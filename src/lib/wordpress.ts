import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import { WP_GRAPHQL_URL } from 'astro:env/server';
import { PingDocument } from '~/graphql/generated/graphql';
import { TaggedCache, type Loaded } from '~/lib/tagged-cache';

/** One cache per server process; purged by POST /api/revalidate. */
export const contentCache = new TaggedCache();

/** Response header for cached content pages: short CDN life, long stale window. */
export const CONTENT_CACHE_CONTROL = 'public, max-age=0, s-maxage=60, stale-while-revalidate=600';

async function request<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
): Promise<TResult> {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: print(document), variables }),
    signal: AbortSignal.timeout(10_000),
  });

  const json = (await response.json()) as { data?: TResult; errors?: { message: string }[] };
  if (!response.ok || json.errors?.length || !json.data) {
    const reason = json.errors?.map((error) => error.message).join('; ') ?? `HTTP ${response.status}`;
    throw new Error(`WordPress GraphQL request failed: ${reason}`);
  }

  return json.data;
}

/**
 * Runs a typed query through the tagged cache. `tagsFor` maps the result to
 * the cache tags it depends on; WordPress sends `post:{id}` and
 * `type:{post_type}` when content changes. Return no tags to skip caching.
 */
export function wpQuery<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
  tagsFor: (data: TResult) => readonly string[],
): Promise<TResult> {
  const key = `${print(document)}:${JSON.stringify(variables)}`;

  return contentCache.wrap(key, async (): Promise<Loaded<TResult>> => {
    const data = await request(document, variables);
    return { value: data, tags: tagsFor(data) };
  });
}

/** True when WordPress GraphQL answers; bypasses the cache. */
export async function canReachWordPress(): Promise<boolean> {
  try {
    await request(PingDocument, {});
    return true;
  } catch {
    return false;
  }
}

/** Plain text from a WordPress HTML excerpt, for meta descriptions. */
export function toPlainText(html: string | null | undefined): string {
  return (html ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/&[#\w]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
