import type { CodegenConfig } from '@graphql-codegen/cli';

// Introspection is public on local/development WordPress only (see the
// kernel's GraphQLSettings), so run codegen against the DDEV site.
// graphql-codegen does not read .env itself; values already set in the shell win.
try {
  process.loadEnvFile('.env');
} catch {
  // No .env file: rely on the environment.
}

const schemaUrl = process.env.WP_GRAPHQL_URL;
if (!schemaUrl) {
  throw new Error('WP_GRAPHQL_URL is not set. Run `bun run setup`, or add it to apps/site/.env.');
}

const shared = {
  avoidOptionals: true,
  enumsAsTypes: true,
  immutableTypes: true,
  useTypeImports: true,
};

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: ['src/graphql/documents/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/schema-types.ts': {
      plugins: ['typescript'],
      config: shared,
    },
    'src/graphql/generated/graphql.ts': {
      plugins: ['typescript-operations', 'typed-document-node'],
      config: {
        ...shared,
        importSchemaTypesFrom: './src/graphql/generated/schema-types',
        namespacedImportName: 'Types',
      },
    },
  },
};

export default config;
