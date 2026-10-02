export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  readonly fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  readonly fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  readonly __typename?: 'Avatar';
  /** TEST: URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  readonly default: Maybe<Scalars['String']['output']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  readonly extraAttr: Maybe<Scalars['String']['output']>;
  /** Whether to always show the default image, never the Gravatar. */
  readonly forceDefault: Maybe<Scalars['Boolean']['output']>;
  /** Whether the avatar was successfully found. */
  readonly foundAvatar: Maybe<Scalars['Boolean']['output']>;
  /** Height of the avatar image. */
  readonly height: Maybe<Scalars['Int']['output']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  readonly rating: Maybe<Scalars['String']['output']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  readonly scheme: Maybe<Scalars['String']['output']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  readonly size: Maybe<Scalars['Int']['output']>;
  /** URL for the gravatar image source. */
  readonly url: Maybe<Scalars['String']['output']>;
  /** Width of the avatar image. */
  readonly width: Maybe<Scalars['Int']['output']>;
};

/** Content rating filter for user avatars. Determines the maximum maturity level of avatars to display, following standard content rating classifications (G, PG, R, X). */
export type AvatarRatingEnum =
  /** Indicates a G level avatar rating level. */
  | 'G'
  /** Indicates a PG level avatar rating level. */
  | 'PG'
  /** Indicates an R level avatar rating level. */
  | 'R'
  /** Indicates an X level avatar rating level. */
  | 'X';

/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type Category = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  readonly __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly categoryId: Maybe<Scalars['Int']['output']>;
  /** Connection between the category type and its children categories. */
  readonly children: Maybe<CategoryToCategoryConnection>;
  /** Connection between the Category type and the ContentNode type */
  readonly contentNodes: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Connection between the category type and its parent category. */
  readonly parent: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Category type and the post type */
  readonly posts: Maybe<CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** Connection between the Category type and the Taxonomy type */
  readonly taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A taxonomy term that classifies content. Categories support hierarchy and can be used to create a nested structure. */
export type CategoryPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** A paginated collection of category Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  readonly edges: ReadonlyArray<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  readonly nodes: ReadonlyArray<Category>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CategoryConnectionPageInfo;
};

/** Represents a connection to a category. Contains both the category Node and metadata about the relationship. */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected category Node */
  readonly node: Category;
};

/** Pagination metadata specific to &quot;CategoryConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;CategoryConnectionEdge&quot; Nodes. */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific Category. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the Category. */
export type CategoryIdType =
  /** The Database ID for the node */
  | 'DATABASE_ID'
  /** The hashed Global ID */
  | 'ID'
  /** The name of the node */
  | 'NAME'
  /** Url friendly name of the node */
  | 'SLUG'
  /** The URI for the node */
  | 'URI';

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  readonly __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  readonly edges: ReadonlyArray<CategoryToAncestorsCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Category>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  readonly __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Category;
};

/** Pagination metadata specific to &quot;CategoryToAncestorsCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToAncestorsCategoryConnection Nodes. */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  readonly __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  readonly edges: ReadonlyArray<CategoryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Category>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CategoryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  readonly __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Category;
};

/** Pagination metadata specific to &quot;CategoryToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToCategoryConnection Nodes. */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'CategoryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  readonly edges: ReadonlyArray<CategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;CategoryToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToContentNodeConnection Nodes. */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'CategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Category;
};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  readonly edges: ReadonlyArray<CategoryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CategoryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;CategoryToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of CategoryToPostConnection Nodes. */
export type CategoryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'CategoryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  readonly __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Taxonomy;
};

/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type Comment = DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  readonly __typename?: 'Comment';
  /** User agent (browser or client) used to post the comment. */
  readonly agent: Maybe<Scalars['String']['output']>;
  /**
   * The approval status of the comment.
   * @deprecated Deprecated in favor of the `status` field
   */
  readonly approved: Maybe<Scalars['Boolean']['output']>;
  /** The author of the comment */
  readonly author: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author at the time of commenting.
   * @deprecated Use the ipAddress field on the edge between the comment and author
   */
  readonly authorIp: Maybe<Scalars['String']['output']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly commentId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Comment type and the ContentNode type */
  readonly commentedOn: Maybe<CommentToContentNodeConnectionEdge>;
  /** Content of the comment. */
  readonly content: Maybe<Scalars['String']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Date the comment was posted in local time. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** Date the comment was posted in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** Karma value for the comment. */
  readonly karma: Maybe<Scalars['Int']['output']>;
  /** The permalink of the comment */
  readonly link: Maybe<Scalars['String']['output']>;
  /** Connection between the Comment type and the Comment type */
  readonly parent: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent comment node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Comment type and the Comment type */
  readonly replies: Maybe<CommentToCommentConnection>;
  /** The approval status of the comment. */
  readonly status: Maybe<CommentStatusEnum>;
  /** Type of comment. */
  readonly type: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentParentArgs = {
  where: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A response or reaction to content submitted by users. Comments are typically associated with a specific content entry. */
export type CommentRepliesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter & DatabaseIdentifier & Node & {
  readonly __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<Avatar>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The email for the comment author. */
  readonly email: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment author object */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The name for the comment author. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The url the comment author. */
  readonly url: Maybe<Scalars['String']['output']>;
};


/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']['input']>;
  rating: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated collection of Comment Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  readonly edges: ReadonlyArray<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CommentConnectionPageInfo;
};

/** Represents a connection to a Comment. Contains both the Comment Node and metadata about the relationship. */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Comment Node */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;CommentConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;CommentConnectionEdge&quot; Nodes. */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific comment. Specifies which unique attribute is used to find a particular comment. */
export type CommentNodeIdTypeEnum =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID';

/** Moderation state for user comments. Determines whether comments are publicly visible, pending approval, or marked as spam. */
export type CommentStatusEnum =
  /** Comments with the Approved status */
  | 'APPROVE'
  /** Comments with the Unapproved status */
  | 'HOLD'
  /** Comments with the Spam status */
  | 'SPAM'
  /** Comments with the Trash status */
  | 'TRASH';

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  readonly edges: ReadonlyArray<CommentToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: CommentToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;CommentToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of CommentToCommentConnection Nodes. */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'CommentToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'CommentToCommenterConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** Email address representing the author for this particular comment */
  readonly email: Maybe<Scalars['String']['output']>;
  /** IP address of the author at the time of making this comment. */
  readonly ipAddress: Maybe<Scalars['String']['output']>;
  /** The display name of the comment author for this particular comment */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Commenter;
  /** The url entered for the comment author on this particular comment */
  readonly url: Maybe<Scalars['String']['output']>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'CommentToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: ContentNode;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'CommentToParentCommentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Comment;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** A user or guest who has submitted a comment. Provides identification and contact information for the comment author. */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int']['output'];
  /** The email address of the author of a comment. */
  readonly email: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment author. */
  readonly id: Scalars['ID']['output'];
  /** Whether the author information is considered restricted. (not fully public) */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The name of the author of a comment. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The url of the author of a comment. */
  readonly url: Maybe<Scalars['String']['output']>;
};

/** Represents a connection to a Commenter. Contains both the Commenter Node and metadata about the relationship. */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Commenter Node */
  readonly node: Commenter;
};

/** Sorting attributes for comment collections. Specifies which comment property determines the order of results. */
export type CommentsConnectionOrderbyEnum =
  /** Order by browser user agent of the commenter. */
  | 'COMMENT_AGENT'
  /** Order by approval status of the comment. */
  | 'COMMENT_APPROVED'
  /** Order by name of the comment author. */
  | 'COMMENT_AUTHOR'
  /** Order by e-mail of the comment author. */
  | 'COMMENT_AUTHOR_EMAIL'
  /** Order by IP address of the comment author. */
  | 'COMMENT_AUTHOR_IP'
  /** Order by URL address of the comment author. */
  | 'COMMENT_AUTHOR_URL'
  /** Order by the comment contents. */
  | 'COMMENT_CONTENT'
  /** Chronological ordering by comment submission date. */
  | 'COMMENT_DATE'
  /** Chronological ordering by comment date in UTC/GMT time. */
  | 'COMMENT_DATE_GMT'
  /** Ordering by internal ID (typically reflects creation order). */
  | 'COMMENT_ID'
  /** Preserve custom order of IDs as specified in the query. */
  | 'COMMENT_IN'
  /** Order by the comment karma score. */
  | 'COMMENT_KARMA'
  /** Ordering by parent comment relationship (threaded discussions). */
  | 'COMMENT_PARENT'
  /** Ordering by associated content item ID. */
  | 'COMMENT_POST_ID'
  /** Ordering by comment classification (standard comments, pingbacks, etc.). */
  | 'COMMENT_TYPE'
  /** Ordering by the user account ID associated with the comment as the comment author. */
  | 'USER_ID';

/** A paginated relationship between objects. Supports cursor-based pagination with edges containing relationship metadata and nodes containing the related objects. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  readonly edges: ReadonlyArray<Edge>;
  /** A list of connected nodes */
  readonly nodes: ReadonlyArray<Node>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PageInfo;
};

/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String']['output'];
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  readonly guid: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique ID of the preview node */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Base interface for content objects like posts, pages, and media items. Provides common fields available across these content types. */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** A paginated collection of ContentNode Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  readonly edges: ReadonlyArray<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentNodeConnectionPageInfo;
};

/** Represents a connection to a ContentNode. Contains both the ContentNode Node and metadata about the relationship. */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected ContentNode Node */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;ContentNodeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ContentNodeConnectionEdge&quot; Nodes. */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving specific content. Determines which property (global ID, database ID, URI) is used to locate content objects. */
export type ContentNodeIdTypeEnum =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID'
  /** Identify a resource by the URI. */
  | 'URI';

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: ContentType;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  readonly __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: User;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  readonly __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The timestamp for when the node was last edited */
  readonly lockTimestamp: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: User;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  readonly __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  readonly edges: ReadonlyArray<ContentNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedScript>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  readonly __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;ContentNodeToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentNodeToEnqueuedScriptConnection Nodes. */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ContentNodeToEnqueuedScriptConnection connection */
export type ContentNodeToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  readonly __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  readonly edges: ReadonlyArray<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  readonly __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;ContentNodeToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentNodeToEnqueuedStylesheetConnection Nodes. */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ContentNodeToEnqueuedStylesheetConnection connection */
export type ContentNodeToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** A layout pattern that can help inform how content might be structured and displayed. Templates can define specialized layouts for different types of content. */
export type ContentTemplate = {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']['output']>;
};

/** The templates that can be assigned to content. Used to filter a connection by the template its content uses. */
export type ContentTemplateEnum =
  /** The default template, applied when no specific template is assigned. */
  | 'DEFAULT_TEMPLATE';

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  readonly __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  readonly canExport: Maybe<Scalars['Boolean']['output']>;
  /** Connection between the ContentType type and the Taxonomy type */
  readonly connectedTaxonomies: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  readonly contentNodes: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  readonly deleteWithUser: Maybe<Scalars['Boolean']['output']>;
  /** Description of the content type. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  readonly excludeFromSearch: Maybe<Scalars['Boolean']['output']>;
  /** The plural name of the content type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']['output']>;
  /** The singular name of the content type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']['output']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  readonly hasArchive: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is hierarchical, for example pages. */
  readonly hierarchical: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the post-type object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** Display name of the content type. */
  readonly label: Maybe<Scalars['String']['output']>;
  /** Details about the content type labels. */
  readonly labels: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  readonly menuIcon: Maybe<Scalars['String']['output']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  readonly menuPosition: Maybe<Scalars['Int']['output']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  readonly public: Maybe<Scalars['Boolean']['output']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  readonly publiclyQueryable: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']['output']>;
  /** Makes this content type available via the admin bar. */
  readonly showInAdminBar: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the content type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']['output']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  readonly showInMenu: Maybe<Scalars['Boolean']['output']>;
  /** Makes this content type available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  readonly showUi: Maybe<Scalars['Boolean']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** A paginated collection of ContentType Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  readonly edges: ReadonlyArray<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  readonly nodes: ReadonlyArray<ContentType>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentTypeConnectionPageInfo;
};

/** Represents a connection to a ContentType. Contains both the ContentType Node and metadata about the relationship. */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected ContentType Node */
  readonly node: ContentType;
};

/** Pagination metadata specific to &quot;ContentTypeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ContentTypeConnectionEdge&quot; Nodes. */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Available content entity types that can be queried or filtered. Identifies the primary content structures available in the system. */
export type ContentTypeEnum =
  /** The Type of Content object */
  | 'ATTACHMENT'
  /** The Type of Content object */
  | 'PAGE'
  /** The Type of Content object */
  | 'POST';

/** Identifier types for retrieving a specific content type definition. Determines whether to look up content types by ID or name. */
export type ContentTypeIdTypeEnum =
  /** The globally unique ID */
  | 'ID'
  /** The name of the content type. */
  | 'NAME';

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  readonly edges: ReadonlyArray<ContentTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;ContentTypeToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentTypeToContentNodeConnection Nodes. */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'ContentTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection & TaxonomyConnection & {
  readonly __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  readonly edges: ReadonlyArray<ContentTypeToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Taxonomy>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  readonly __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Taxonomy;
};

/** Pagination metadata specific to &quot;ContentTypeToTaxonomyConnection&quot; collections. Provides cursors and flags for navigating through sets of ContentTypeToTaxonomyConnection Nodes. */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'ContentTypeToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Allowed Content Types of the Category taxonomy. */
export type ContentTypesOfCategoryEnum =
  /** The Type of Content object */
  | 'POST';

/** Allowed Content Types of the PostFormat taxonomy. */
export type ContentTypesOfPostFormatEnum =
  /** The Type of Content object */
  | 'POST';

/** Allowed Content Types of the Tag taxonomy. */
export type ContentTypesOfTagEnum =
  /** The Type of Content object */
  | 'POST';

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The name of the category object to mutate */
  readonly name: Scalars['String']['input'];
  /** The database ID of the category that should be set as the parent. This field cannot be used in conjunction with parentId */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the category that should be set as the parent. This field cannot be used in conjunction with parentDatabaseId */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  readonly __typename?: 'CreateCategoryPayload';
  /** The created category */
  readonly category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The name of the comment's author. */
  readonly author: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  readonly commentOn: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** Parent comment ID of current comment. */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  readonly status: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  readonly type: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  readonly __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The comment that was created */
  readonly comment: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  readonly caption: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  readonly filePath: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  readonly fileType: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  readonly status: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  readonly __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The MediaItem object mutation type. */
  readonly mediaItem: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  readonly status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  readonly __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  readonly page: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_format object to mutate */
  readonly name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  readonly __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_format */
  readonly postFormat: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  readonly categories: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  readonly excerpt: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  readonly pingStatus: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  readonly pinged: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: InputMaybe<PostTagsInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  readonly toPing: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  readonly __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  readonly post: Maybe<Post>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_tag object to mutate */
  readonly name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  readonly __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_tag */
  readonly tag: Maybe<Tag>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']['input']>;
  /** The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** A string that contains the user's username for logging in. */
  readonly username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  readonly __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  readonly user: Maybe<User>;
};

/** An object that has a unique numeric identifier in the database. Provides consistent access to the database ID across different object types. */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  readonly day: InputMaybe<Scalars['Int']['input']>;
  /** Hour of the day (from 0 to 23) */
  readonly hour: InputMaybe<Scalars['Int']['input']>;
  /** Minute of the hour (from 0 to 59) */
  readonly minute: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  readonly month: InputMaybe<Scalars['Int']['input']>;
  /** Second of the minute (from 0 to 59) */
  readonly second: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: InputMaybe<Scalars['Int']['input']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  readonly after: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  readonly before: InputMaybe<DateInput>;
  /** Column to query against */
  readonly column: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  readonly compare: InputMaybe<Scalars['String']['input']>;
  /** Day of the month (from 1 to 31) */
  readonly day: InputMaybe<Scalars['Int']['input']>;
  /** Hour (from 0 to 23) */
  readonly hour: InputMaybe<Scalars['Int']['input']>;
  /** For after/before, whether exact value should be matched or not */
  readonly inclusive: InputMaybe<Scalars['Boolean']['input']>;
  /** Minute (from 0 to 59) */
  readonly minute: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  readonly month: InputMaybe<Scalars['Int']['input']>;
  /** OR or AND, how the sub-arrays should be compared */
  readonly relation: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  readonly second: InputMaybe<Scalars['Int']['input']>;
  /** Week of the year (from 0 to 53) */
  readonly week: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: InputMaybe<Scalars['Int']['input']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  readonly __typename?: 'DefaultTemplate';
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']['output']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category to delete */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  readonly __typename?: 'DeleteCategoryPayload';
  /** The deleted term object */
  readonly category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The deleted comment ID */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  readonly __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The deleted comment object */
  readonly comment: Maybe<Comment>;
  /** The deleted comment ID */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the mediaItem to delete */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  readonly __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted mediaItem */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The mediaItem before it was deleted */
  readonly mediaItem: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the page to delete */
  readonly id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  readonly ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  readonly __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  readonly page: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat to delete */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  readonly __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  readonly postFormat: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the post to delete */
  readonly id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  readonly ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  readonly __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  readonly post: Maybe<Post>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag to delete */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  readonly __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  readonly tag: Maybe<Tag>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user you want to delete */
  readonly id: Scalars['ID']['input'];
  /** Reassign posts and links to new User ID. */
  readonly reassignId: InputMaybe<Scalars['ID']['input']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  readonly __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the user that you just deleted */
  readonly deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted user object */
  readonly user: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = Node & {
  readonly __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  readonly defaultCommentStatus: Maybe<Scalars['String']['output']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly defaultPingStatus: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the settings group. */
  readonly id: Scalars['ID']['output'];
};

/** Represents a connection between two objects. Contains both the related object (node) and metadata about the relationship (cursor). */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected node */
  readonly node: Node;
};

/** A script or stylesheet resource that should be loaded by the client. Contains information about the resource&#039;s location, dependencies, and loading behavior. */
export type EnqueuedAsset = {
  /** The inline code to be run after the asset is loaded. */
  readonly after: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  readonly args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  readonly before: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  readonly conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedAsset>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  readonly extra: Maybe<Scalars['String']['output']>;
  /** The loading group to which this asset belongs. */
  readonly group: Maybe<Scalars['Int']['output']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']['output']>;
  /** The ID of the enqueued asset */
  readonly id: Scalars['ID']['output'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']['output']>;
  /** The version of the enqueued asset */
  readonly version: Maybe<Scalars['String']['output']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset & Node & {
  readonly __typename?: 'EnqueuedScript';
  /** The inline code to be run after the asset is loaded. */
  readonly after: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  readonly args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  readonly before: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  readonly conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  readonly extra: Maybe<Scalars['String']['output']>;
  /** Extra data supplied to the enqueued script */
  readonly extraData: Maybe<Scalars['String']['output']>;
  /** The loading group to which this asset belongs. */
  readonly group: Maybe<Scalars['Int']['output']>;
  /** The location where this script should be loaded */
  readonly groupLocation: Maybe<ScriptLoadingGroupLocationEnum>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']['output']>;
  /** The global ID of the enqueued script */
  readonly id: Scalars['ID']['output'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']['output']>;
  /** The loading strategy to use on the script tag */
  readonly strategy: Maybe<ScriptLoadingStrategyEnum>;
  /** The version of the enqueued script */
  readonly version: Maybe<Scalars['String']['output']>;
};

/** A paginated collection of EnqueuedScript Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  readonly edges: ReadonlyArray<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  readonly nodes: ReadonlyArray<EnqueuedScript>;
  /** Information about pagination in a connection. */
  readonly pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Represents a connection to a EnqueuedScript. Contains both the EnqueuedScript Node and metadata about the relationship. */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected EnqueuedScript Node */
  readonly node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;EnqueuedScriptConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;EnqueuedScriptConnectionEdge&quot; Nodes. */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset & Node & {
  readonly __typename?: 'EnqueuedStylesheet';
  /** The inline code to be run after the asset is loaded. */
  readonly after: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  readonly args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  readonly before: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  readonly conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<EnqueuedStylesheet>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  readonly extra: Maybe<Scalars['String']['output']>;
  /** The loading group to which this asset belongs. */
  readonly group: Maybe<Scalars['Int']['output']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']['output']>;
  /** The global ID of the enqueued stylesheet */
  readonly id: Scalars['ID']['output'];
  /** Whether the enqueued style is RTL or not */
  readonly isRtl: Maybe<Scalars['Boolean']['output']>;
  /** The media attribute to use for the link */
  readonly media: Maybe<Scalars['String']['output']>;
  /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
  readonly path: Maybe<Scalars['String']['output']>;
  /** The `rel` attribute to use for the link */
  readonly rel: Maybe<Scalars['String']['output']>;
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']['output']>;
  /** Optional suffix, used in combination with RTL */
  readonly suffix: Maybe<Scalars['String']['output']>;
  /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
  readonly title: Maybe<Scalars['String']['output']>;
  /** The version of the enqueued style */
  readonly version: Maybe<Scalars['String']['output']>;
};

/** A paginated collection of EnqueuedStylesheet Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  readonly edges: ReadonlyArray<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  readonly nodes: ReadonlyArray<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  readonly pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Represents a connection to a EnqueuedStylesheet. Contains both the EnqueuedStylesheet Node and metadata about the relationship. */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected EnqueuedStylesheet Node */
  readonly node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;EnqueuedStylesheetConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;EnqueuedStylesheetConnectionEdge&quot; Nodes. */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** The general setting type */
export type GeneralSettings = Node & {
  readonly __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  readonly dateFormat: Maybe<Scalars['String']['output']>;
  /** Site tagline. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly email: Maybe<Scalars['String']['output']>;
  /** The address at which visitors reach the site&#039;s front end. Can differ from the `url` field when the front end and the content management backend are served from different addresses, such as on headless or decoupled installs. */
  readonly homeUrl: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the settings group. */
  readonly id: Scalars['ID']['output'];
  /** WordPress locale code. */
  readonly language: Maybe<Scalars['String']['output']>;
  /** The media item representing the site icon configured in site settings, used as the site&#039;s favicon and app icon. */
  readonly siteIcon: Maybe<GeneralSettingsToMediaItemConnectionEdge>;
  /** Site icon URL configured in site settings, used as the site&#039;s favicon and app icon. */
  readonly siteIconUrl: Maybe<Scalars['String']['output']>;
  /** A day number of the week that the week should start on. */
  readonly startOfWeek: Maybe<Scalars['Int']['output']>;
  /** A time format for all time strings. */
  readonly timeFormat: Maybe<Scalars['String']['output']>;
  /** A city in the same timezone as you. */
  readonly timezone: Maybe<Scalars['String']['output']>;
  /** Site title. */
  readonly title: Maybe<Scalars['String']['output']>;
  /** Site URL. */
  readonly url: Maybe<Scalars['String']['output']>;
};


/** The general setting type */
export type GeneralSettingsSiteIconUrlArgs = {
  size: InputMaybe<Scalars['Int']['input']>;
};

/** Connection between the GeneralSettings type and the MediaItem type */
export type GeneralSettingsToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  readonly __typename?: 'GeneralSettingsToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: MediaItem;
};

/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  readonly guid: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique ID of the preview node */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Content that can be organized in a parent-child structure. Provides fields for navigating up and down the hierarchy and maintaining structured relationships. */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  readonly edges: ReadonlyArray<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; collections. Provides cursors and flags for navigating through sets of HierarchicalContentNodeToContentNodeAncestorsConnection Nodes. */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  readonly edges: ReadonlyArray<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; collections. Provides cursors and flags for navigating through sets of HierarchicalContentNodeToContentNodeChildrenConnection Nodes. */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: ContentNode;
};

/** Content that can exist in a parent-child structure. Provides fields for navigating up (parent) and down (children) through the hierarchy. */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** File details for a Media Item */
export type MediaDetails = {
  readonly __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  readonly file: Maybe<Scalars['String']['output']>;
  /** The path to the mediaItem relative to the uploads directory */
  readonly filePath: Maybe<Scalars['String']['output']>;
  /** The height of the mediaItem */
  readonly height: Maybe<Scalars['Int']['output']>;
  /** Meta information associated with the mediaItem */
  readonly meta: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  readonly sizes: Maybe<ReadonlyArray<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  readonly width: Maybe<Scalars['Int']['output']>;
};


/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude: InputMaybe<ReadonlyArray<InputMaybe<MediaItemSizeEnum>>>;
  include: InputMaybe<ReadonlyArray<InputMaybe<MediaItemSizeEnum>>>;
};

/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItem = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & Node & NodeWithAuthor & NodeWithComments & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & {
  readonly __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  readonly altText: Maybe<Scalars['String']['output']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']['output']>;
  /** The caption for the resource */
  readonly caption: Maybe<Scalars['String']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the MediaItem type and the Comment type */
  readonly comments: Maybe<MediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** Description of the image (stored as post_content) */
  readonly description: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filename of the mediaItem for the specified size (default size is full) */
  readonly file: Maybe<Scalars['String']['output']>;
  /** The path to the original file relative to the uploads directory */
  readonly filePath: Maybe<Scalars['String']['output']>;
  /** The filesize in bytes of the resource */
  readonly fileSize: Maybe<Scalars['Int']['output']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  readonly guid: Maybe<Scalars['String']['output']>;
  /** Whether the attachment object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the attachment object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']['output']>;
  /** Details about the mediaItem */
  readonly mediaDetails: Maybe<MediaDetails>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly mediaItemId: Scalars['Int']['output'];
  /** Url of the mediaItem */
  readonly mediaItemUrl: Maybe<Scalars['String']['output']>;
  /** Type of resource */
  readonly mediaType: Maybe<Scalars['String']['output']>;
  /** The mime type of the mediaItem */
  readonly mimeType: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** The password for the attachment object. */
  readonly password: Maybe<Scalars['String']['output']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique ID of the preview node */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The sizes attribute value for an image. */
  readonly sizes: Maybe<Scalars['String']['output']>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** Url of the mediaItem */
  readonly sourceUrl: Maybe<Scalars['String']['output']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  readonly srcSet: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemCaptionArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MediaItemToCommentConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemDescriptionArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFileArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFilePathArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemFileSizeArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSizesArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSourceUrlArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemSrcSetArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** Represents uploaded media, including images, videos, documents, and audio files. */
export type MediaItemTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A paginated collection of mediaItem Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  readonly edges: ReadonlyArray<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  readonly nodes: ReadonlyArray<MediaItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MediaItemConnectionPageInfo;
};

/** Represents a connection to a mediaItem. Contains both the mediaItem Node and metadata about the relationship. */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected mediaItem Node */
  readonly node: MediaItem;
};

/** Pagination metadata specific to &quot;MediaItemConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MediaItemConnectionEdge&quot; Nodes. */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific MediaItem. Specifies which unique attribute is used to find an exact MediaItem. */
export type MediaItemIdType =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID'
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  | 'SLUG'
  /** Identify a media item by its source url */
  | 'SOURCE_URL'
  /** Identify a resource by the URI. */
  | 'URI';

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  readonly __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  readonly aperture: Maybe<Scalars['Float']['output']>;
  /** Information about the camera used to create the media item. */
  readonly camera: Maybe<Scalars['String']['output']>;
  /** The text string description associated with the media item. */
  readonly caption: Maybe<Scalars['String']['output']>;
  /** Copyright information associated with the media item. */
  readonly copyright: Maybe<Scalars['String']['output']>;
  /** The date/time when the media was created. */
  readonly createdTimestamp: Maybe<Scalars['Int']['output']>;
  /** The original creator of the media item. */
  readonly credit: Maybe<Scalars['String']['output']>;
  /** The focal length value of the media item. */
  readonly focalLength: Maybe<Scalars['Float']['output']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  readonly iso: Maybe<Scalars['Int']['output']>;
  /** List of keywords used to describe or identfy the media item. */
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The vertical or horizontal aspect of the media item. */
  readonly orientation: Maybe<Scalars['String']['output']>;
  /** The shutter speed information of the media item. */
  readonly shutterSpeed: Maybe<Scalars['Float']['output']>;
  /** A useful title for the media item. */
  readonly title: Maybe<Scalars['String']['output']>;
};

/** Predefined image size variations. Represents the standard image dimensions available for media assets. */
export type MediaItemSizeEnum =
  /** Large image preview suitable for detail views. (1024x1024) */
  | 'LARGE'
  /** Medium image preview typically suitable for listings and detail views. (300x300) */
  | 'MEDIUM'
  /** Medium-to-large image preview suitable for listings and detail views. (768x0) */
  | 'MEDIUM_LARGE'
  /** Small image preview suitable for thumbnails and listings. (150x150) */
  | 'THUMBNAIL'
  /** Custom Image Size. (1536x1536) */
  | '_1536X1536'
  /** Custom Image Size. (2048x2048) */
  | '_2048X2048';

/** Publication status for media items. Controls whether media is publicly accessible, private, or in another state. */
export type MediaItemStatusEnum =
  /** Automatically created media that has not been finalized */
  | 'AUTO_DRAFT'
  /** Media that inherits its publication status from the parent content */
  | 'INHERIT'
  /** Media visible only to users with appropriate permissions */
  | 'PRIVATE'
  /** Media marked for deletion but still recoverable */
  | 'TRASH';

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  readonly edges: ReadonlyArray<MediaItemToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MediaItemToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;MediaItemToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of MediaItemToCommentConnection Nodes. */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'MediaItemToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  readonly __typename?: 'MediaSize';
  /** The filename of the referenced size */
  readonly file: Maybe<Scalars['String']['output']>;
  /** The path of the file for the referenced size (default size is full) */
  readonly filePath: Maybe<Scalars['String']['output']>;
  /** The filesize of the resource */
  readonly fileSize: Maybe<Scalars['Int']['output']>;
  /** The height of the referenced size */
  readonly height: Maybe<Scalars['String']['output']>;
  /** The mime type of the referenced size */
  readonly mimeType: Maybe<Scalars['String']['output']>;
  /** The referenced size name */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The url of the referenced size */
  readonly sourceUrl: Maybe<Scalars['String']['output']>;
  /** The width of the referenced size */
  readonly width: Maybe<Scalars['String']['output']>;
};

/** Collections of navigation links. Menus can be assigned to designated locations and used to build site navigation structures. */
export type Menu = DatabaseIdentifier & Node & {
  readonly __typename?: 'Menu';
  /** The number of items in the menu */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The globally unique identifier of the nav menu object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The locations a menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Menu type and the MenuItem type */
  readonly menuItems: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The url friendly name of the menu. */
  readonly slug: Maybe<Scalars['String']['output']>;
};


/** Collections of navigation links. Menus can be assigned to designated locations and used to build site navigation structures. */
export type MenuMenuItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** A paginated collection of Menu Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  readonly edges: ReadonlyArray<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  readonly nodes: ReadonlyArray<Menu>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MenuConnectionPageInfo;
};

/** Represents a connection to a Menu. Contains both the Menu Node and metadata about the relationship. */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Menu Node */
  readonly node: Menu;
};

/** Pagination metadata specific to &quot;MenuConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MenuConnectionEdge&quot; Nodes. */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier & Node & {
  readonly __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  readonly childItems: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  readonly connectedNode: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  readonly connectedObject: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  readonly cssClasses: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Description of the menu item. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the nav menu item object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Label or title of the menu item. */
  readonly label: Maybe<Scalars['String']['output']>;
  /** Link relationship (XFN) of the menu item. */
  readonly linkRelationship: Maybe<Scalars['String']['output']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  readonly menu: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuItemId: Maybe<Scalars['Int']['output']>;
  /** Menu item order */
  readonly order: Maybe<Scalars['Int']['output']>;
  /** The database id of the parent menu item or null if it is the root */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent nav menu item object. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  readonly path: Maybe<Scalars['String']['output']>;
  /** Target attribute for the menu item link. */
  readonly target: Maybe<Scalars['String']['output']>;
  /** Title attribute for the menu item link */
  readonly title: Maybe<Scalars['String']['output']>;
  /** The uri of the resource the menu item links to */
  readonly uri: Maybe<Scalars['String']['output']>;
  /** URL or destination of the menu item. */
  readonly url: Maybe<Scalars['String']['output']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** A paginated collection of MenuItem Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  readonly edges: ReadonlyArray<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  readonly nodes: ReadonlyArray<MenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MenuItemConnectionPageInfo;
};

/** Represents a connection to a MenuItem. Contains both the MenuItem Node and metadata about the relationship. */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected MenuItem Node */
  readonly node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuItemConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;MenuItemConnectionEdge&quot; Nodes. */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Content that can be referenced by navigation menu items. Provides the essential fields needed to create links within navigation structures. */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};

/** Represents a connection to a MenuItemLinkable. Contains both the MenuItemLinkable Node and metadata about the relationship. */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected MenuItemLinkable Node */
  readonly node: MenuItemLinkable;
};

/** Identifier types for retrieving a specific menu item. Determines whether to look up menu items by global ID or database ID. */
export type MenuItemNodeIdTypeEnum =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID';

/** Deprecated in favor of MenuItemLinkable Interface */
export type MenuItemObjectUnion = Category | Page | Post | Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge & MenuConnectionEdge & OneToOneConnection & {
  readonly __typename?: 'MenuItemToMenuConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Menu;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection & MenuItemConnection & {
  readonly __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  readonly edges: ReadonlyArray<MenuItemToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<MenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MenuItemToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  readonly __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuItemToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of MenuItemToMenuItemConnection Nodes. */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'MenuItemToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge & MenuItemLinkableConnectionEdge & OneToOneConnection & {
  readonly __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: MenuItemLinkable;
};

/** Designated areas where navigation menus can be displayed. Represents the named regions in the interface where menus can be assigned. */
export type MenuLocationEnum =
  /** Empty menu location */
  | 'EMPTY';

/** Identifier types for retrieving a specific navigation menu. Specifies which property (ID, name, location) is used to locate a particular menu. */
export type MenuNodeIdTypeEnum =
  /** Identify a menu node by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a menu node by the (hashed) Global ID. */
  | 'ID'
  /** Identify a menu node by the slug of menu location to which it is assigned */
  | 'LOCATION'
  /** Identify a menu node by its name */
  | 'NAME'
  /** Identify a menu node by its slug */
  | 'SLUG';

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection & MenuItemConnection & {
  readonly __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  readonly edges: ReadonlyArray<MenuToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<MenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: MenuToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  readonly __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: MenuItem;
};

/** Pagination metadata specific to &quot;MenuToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of MenuToMenuItemConnection Nodes. */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'MenuToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
};

/** Media file type classification based on MIME standards. Used to identify and filter media items by their format and content type. */
export type MimeTypeEnum =
  /** application/java mime type. */
  | 'APPLICATION_JAVA'
  /** application/msword mime type. */
  | 'APPLICATION_MSWORD'
  /** application/octet-stream mime type. */
  | 'APPLICATION_OCTET_STREAM'
  /** application/onenote mime type. */
  | 'APPLICATION_ONENOTE'
  /** application/oxps mime type. */
  | 'APPLICATION_OXPS'
  /** application/pdf mime type. */
  | 'APPLICATION_PDF'
  /** application/rar mime type. */
  | 'APPLICATION_RAR'
  /** application/rtf mime type. */
  | 'APPLICATION_RTF'
  /** application/ttaf+xml mime type. */
  | 'APPLICATION_TTAF_XML'
  /** application/vnd.apple.keynote mime type. */
  | 'APPLICATION_VND_APPLE_KEYNOTE'
  /** application/vnd.apple.numbers mime type. */
  | 'APPLICATION_VND_APPLE_NUMBERS'
  /** application/vnd.apple.pages mime type. */
  | 'APPLICATION_VND_APPLE_PAGES'
  /** application/vnd.ms-access mime type. */
  | 'APPLICATION_VND_MS_ACCESS'
  /** application/vnd.ms-excel mime type. */
  | 'APPLICATION_VND_MS_EXCEL'
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12'
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12'
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12'
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12'
  /** application/vnd.ms-powerpoint mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT'
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12'
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12'
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12'
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12'
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12'
  /** application/vnd.ms-project mime type. */
  | 'APPLICATION_VND_MS_PROJECT'
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12'
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  | 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12'
  /** application/vnd.ms-write mime type. */
  | 'APPLICATION_VND_MS_WRITE'
  /** application/vnd.ms-xpsdocument mime type. */
  | 'APPLICATION_VND_MS_XPSDOCUMENT'
  /** application/vnd.oasis.opendocument.chart mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART'
  /** application/vnd.oasis.opendocument.database mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE'
  /** application/vnd.oasis.opendocument.formula mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA'
  /** application/vnd.oasis.opendocument.graphics mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS'
  /** application/vnd.oasis.opendocument.presentation mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION'
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET'
  /** application/vnd.oasis.opendocument.text mime type. */
  | 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT'
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION'
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE'
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW'
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE'
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET'
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE'
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT'
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE'
  /** application/wordperfect mime type. */
  | 'APPLICATION_WORDPERFECT'
  /** application/x-7z-compressed mime type. */
  | 'APPLICATION_X_7Z_COMPRESSED'
  /** application/x-gzip mime type. */
  | 'APPLICATION_X_GZIP'
  /** application/x-tar mime type. */
  | 'APPLICATION_X_TAR'
  /** application/zip mime type. */
  | 'APPLICATION_ZIP'
  /** audio/aac mime type. */
  | 'AUDIO_AAC'
  /** audio/flac mime type. */
  | 'AUDIO_FLAC'
  /** audio/midi mime type. */
  | 'AUDIO_MIDI'
  /** audio/mpeg mime type. */
  | 'AUDIO_MPEG'
  /** audio/ogg mime type. */
  | 'AUDIO_OGG'
  /** audio/wav mime type. */
  | 'AUDIO_WAV'
  /** audio/x-matroska mime type. */
  | 'AUDIO_X_MATROSKA'
  /** audio/x-ms-wax mime type. */
  | 'AUDIO_X_MS_WAX'
  /** audio/x-ms-wma mime type. */
  | 'AUDIO_X_MS_WMA'
  /** audio/x-realaudio mime type. */
  | 'AUDIO_X_REALAUDIO'
  /** image/avif mime type. */
  | 'IMAGE_AVIF'
  /** image/bmp mime type. */
  | 'IMAGE_BMP'
  /** image/gif mime type. */
  | 'IMAGE_GIF'
  /** image/heic mime type. */
  | 'IMAGE_HEIC'
  /** image/heic-sequence mime type. */
  | 'IMAGE_HEIC_SEQUENCE'
  /** image/heif mime type. */
  | 'IMAGE_HEIF'
  /** image/heif-sequence mime type. */
  | 'IMAGE_HEIF_SEQUENCE'
  /** image/jpeg mime type. */
  | 'IMAGE_JPEG'
  /** image/png mime type. */
  | 'IMAGE_PNG'
  /** image/tiff mime type. */
  | 'IMAGE_TIFF'
  /** image/webp mime type. */
  | 'IMAGE_WEBP'
  /** image/x-icon mime type. */
  | 'IMAGE_X_ICON'
  /** text/calendar mime type. */
  | 'TEXT_CALENDAR'
  /** text/css mime type. */
  | 'TEXT_CSS'
  /** text/csv mime type. */
  | 'TEXT_CSV'
  /** text/plain mime type. */
  | 'TEXT_PLAIN'
  /** text/richtext mime type. */
  | 'TEXT_RICHTEXT'
  /** text/tab-separated-values mime type. */
  | 'TEXT_TAB_SEPARATED_VALUES'
  /** text/vtt mime type. */
  | 'TEXT_VTT'
  /** video/3gpp mime type. */
  | 'VIDEO_3GPP'
  /** video/3gpp2 mime type. */
  | 'VIDEO_3GPP2'
  /** video/avi mime type. */
  | 'VIDEO_AVI'
  /** video/divx mime type. */
  | 'VIDEO_DIVX'
  /** video/mp4 mime type. */
  | 'VIDEO_MP4'
  /** video/mpeg mime type. */
  | 'VIDEO_MPEG'
  /** video/ogg mime type. */
  | 'VIDEO_OGG'
  /** video/quicktime mime type. */
  | 'VIDEO_QUICKTIME'
  /** video/webm mime type. */
  | 'VIDEO_WEBM'
  /** video/x-flv mime type. */
  | 'VIDEO_X_FLV'
  /** video/x-matroska mime type. */
  | 'VIDEO_X_MATROSKA'
  /** video/x-ms-asf mime type. */
  | 'VIDEO_X_MS_ASF'
  /** video/x-ms-wm mime type. */
  | 'VIDEO_X_MS_WM'
  /** video/x-ms-wmv mime type. */
  | 'VIDEO_X_MS_WMV'
  /** video/x-ms-wmx mime type. */
  | 'VIDEO_X_MS_WMX';

/** An object with a globally unique identifier. All objects that can be identified by a unique ID implement this interface. */
export type Node = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};

/** Content that can be attributed to a specific user. Provides fields for accessing the author&#039;s information and establishing content ownership. */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  readonly __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: User;
};

/** Content that can receive and display user-submitted comments. Provides fields for accessing comment counts and managing comment status. */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};

/** Content that has a main body field which can contain formatted text and media. Provides access to both raw (with appropriate permissions) and rendered versions of the content. */
export type NodeWithContentEditor = {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};


/** Content that has a main body field which can contain formatted text and media. Provides access to both raw (with appropriate permissions) and rendered versions of the content. */
export type NodeWithContentEditorContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node which provides an excerpt field, which is a condensed summary of the main content. Excerpts can be manually created or automatically generated and are often used in content listings and search results. */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};


/** A node which provides an excerpt field, which is a condensed summary of the main content. Excerpts can be manually created or automatically generated and are often used in content listings and search results. */
export type NodeWithExcerptExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Content that can have a primary image attached. This image is typically used for thumbnails, social sharing, and prominent display in the presentation layer. */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  readonly __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: MediaItem;
};

/** Content that supports ordering metadata. Includes a menu order field which can be used for custom sorting in navigation menus and other ordered collections. */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']['output']>;
};

/** Content that maintains a history of changes. Provides access to previous versions of the content and the ability to restore earlier revisions. */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  readonly __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: ContentNode;
};

/** Content that provides template metadata. The template can help inform how the content is might be structured, styled, and presented to the user. */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** The template assigned to the node */
  readonly template: Maybe<ContentTemplate>;
};

/** Content with a dedicated title field. The title typically serves as the main heading and identifier for the content. */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']['output']>;
};


/** Content with a dedicated title field. The title typically serves as the main heading and identifier for the content. */
export type NodeWithTitleTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Content that supports cross-site notifications when linked to by other sites. Includes fields for pingback status and linked URLs. */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

/** A direct one-to-one relationship between objects. Unlike plural connections, this represents a single related object rather than a collection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected node */
  readonly node: Node;
};

/** Sort direction for ordered results. Determines whether items are returned in ascending or descending order. */
export type OrderEnum =
  /** Results ordered from lowest to highest values (i.e. A-Z, oldest-newest) */
  | 'ASC'
  /** Results ordered from highest to lowest values (i.e. Z-A, newest-oldest) */
  | 'DESC';

/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type Page = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfPageFields & {
  readonly __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Page type and the Comment type */
  readonly comments: Maybe<PageToCommentConnection>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  readonly guid: Maybe<Scalars['String']['output']>;
  /** Whether the page object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the page object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether this page is set to the privacy page. */
  readonly isPrivacyPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']['output']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']['output']>;
  /** Fields of the PageFields ACF Field Group */
  readonly pageFields: Maybe<PageFields>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly pageId: Scalars['Int']['output'];
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']['output']>;
  /** The password for the page object. */
  readonly password: Maybe<Scalars['String']['output']>;
  /** Connection between the page type and the page type */
  readonly preview: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique ID of the preview node */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Page type and the page type */
  readonly revisions: Maybe<PageToRevisionConnection>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageToCommentConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageToRevisionConnectionWhereArgs>;
};


/** A standalone content entry generally used for static, non-chronological content such as &quot;About Us&quot; or &quot;Contact&quot; pages. */
export type PageTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A paginated collection of page Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  readonly edges: ReadonlyArray<PageConnectionEdge>;
  /** A list of connected page Nodes */
  readonly nodes: ReadonlyArray<Page>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PageConnectionPageInfo;
};

/** Represents a connection to a page. Contains both the page Node and metadata about the relationship. */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected page Node */
  readonly node: Page;
};

/** Pagination metadata specific to &quot;PageConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PageConnectionEdge&quot; Nodes. */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** The &quot;PageFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PageFields = AcfFieldGroup & AcfFieldGroupFields & PageFields_Fields & {
  readonly __typename?: 'PageFields';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  readonly fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Short summary shown under the page title. */
  readonly intro: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;PageFields&quot; Field Group */
export type PageFields_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  readonly fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Short summary shown under the page title. */
  readonly intro: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific Page. Specifies which unique attribute is used to find an exact Page. */
export type PageIdType =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID'
  /** Identify a resource by the URI. */
  | 'URI';

/** Metadata for cursor-based pagination. Provides cursors for continuing pagination and boolean flags indicating if more items exist in either direction. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  readonly edges: ReadonlyArray<PageToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PageToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;PageToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of PageToCommentConnection Nodes. */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'PageToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  readonly __typename?: 'PageToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Page;
};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection & PageConnection & {
  readonly __typename?: 'PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  readonly edges: ReadonlyArray<PageToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Page>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PageToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge & PageConnectionEdge & {
  readonly __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Page;
};

/** Pagination metadata specific to &quot;PageToRevisionConnection&quot; collections. Provides cursors and flags for navigating through sets of PageToRevisionConnection Nodes. */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'PageToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** The permalink setting type */
export type PermalinkSettings = Node & {
  readonly __typename?: 'PermalinkSettings';
  /** The prefix used in the URLs of category archive pages. */
  readonly categoryBase: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the settings group. */
  readonly id: Scalars['ID']['output'];
  /** The structure used to build the URLs for content on the site. */
  readonly structure: Maybe<Scalars['String']['output']>;
  /** The prefix used in the URLs of tag archive pages. */
  readonly tagBase: Maybe<Scalars['String']['output']>;
};

/** An plugin object */
export type Plugin = Node & {
  readonly __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  readonly author: Maybe<Scalars['String']['output']>;
  /** URI for the related author(s)/company website. */
  readonly authorUri: Maybe<Scalars['String']['output']>;
  /** Description of the plugin. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the plugin object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Display name of the plugin. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Plugin path. */
  readonly path: Maybe<Scalars['String']['output']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  readonly pluginUri: Maybe<Scalars['String']['output']>;
  /** Current version of the plugin. */
  readonly version: Maybe<Scalars['String']['output']>;
};

/** A paginated collection of Plugin Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  readonly edges: ReadonlyArray<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  readonly nodes: ReadonlyArray<Plugin>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PluginConnectionPageInfo;
};

/** Represents a connection to a Plugin. Contains both the Plugin Node and metadata about the relationship. */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Plugin Node */
  readonly node: Plugin;
};

/** Pagination metadata specific to &quot;PluginConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PluginConnectionEdge&quot; Nodes. */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Operational status of a plugin. Indicates whether a plugin is active, inactive, or in another state that affects its functionality. */
export type PluginStatusEnum =
  /** The plugin is currently active. */
  | 'ACTIVE'
  /** The plugin is a drop-in plugin. */
  | 'DROP_IN'
  /** The plugin is currently inactive. */
  | 'INACTIVE'
  /** The plugin is a must-use plugin. */
  | 'MUST_USE'
  /** The plugin is technically active but was paused while loading. */
  | 'PAUSED'
  /** The plugin was active recently. */
  | 'RECENTLY_ACTIVE'
  /** The plugin has an upgrade available. */
  | 'UPGRADE';

/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type Post = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & NodeWithTrackbacks & Previewable & UniformResourceIdentifiable & {
  readonly __typename?: 'Post';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  readonly ancestors: Maybe<PostToPostConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Post type and the category type */
  readonly categories: Maybe<PostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the Comment type */
  readonly comments: Maybe<PostToCommentConnection>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this content node. This is a stable, unique identifier for the node that does not change even if the node is moved or its url changes. */
  readonly guid: Maybe<Scalars['String']['output']>;
  /** Whether the post object is password protected. */
  readonly hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the post object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether this page is sticky */
  readonly isSticky: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  readonly parent: Maybe<PostToParentConnectionEdge>;
  /** The password for the post object. */
  readonly password: Maybe<Scalars['String']['output']>;
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** Connection between the Post type and the postFormat type */
  readonly postFormats: Maybe<PostToPostFormatConnection>;
  /**
   * The unique numeric identifier for the content node.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly postId: Scalars['Int']['output'];
  /** Connection between the post type and the post type */
  readonly preview: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Post type and the post type */
  readonly revisions: Maybe<PostToRevisionConnection>;
  /** The URL-friendly, human-readable identifier for the content node, used in its permalink. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the tag type */
  readonly tags: Maybe<PostToTagConnection>;
  /** The template assigned to the node */
  readonly template: Maybe<ContentTemplate>;
  /** Connection between the Post type and the TermNode type */
  readonly terms: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']['output']>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToCategoryConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToCommentConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostPostFormatsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToRevisionConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToTagConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};


/** A chronological content entry typically used for blog posts, news articles, or similar date-based content. */
export type PostTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** A paginated collection of post Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  readonly edges: ReadonlyArray<PostConnectionEdge>;
  /** A list of connected post Nodes */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostConnectionPageInfo;
};

/** Represents a connection to a post. Contains both the post Node and metadata about the relationship. */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected post Node */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;PostConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PostConnectionEdge&quot; Nodes. */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormat = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  readonly __typename?: 'PostFormat';
  /** Connection between the PostFormat type and the ContentNode type */
  readonly contentNodes: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']['output']>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly postFormatId: Maybe<Scalars['Int']['output']>;
  /** Connection between the PostFormat type and the post type */
  readonly posts: Maybe<PostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  readonly taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A standardized classification system for content presentation styles. These formats can be used to display content differently based on type, such as &quot;standard&quot;, &quot;gallery&quot;, &quot;video&quot;, etc. */
export type PostFormatPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** A paginated collection of postFormat Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  readonly edges: ReadonlyArray<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  readonly nodes: ReadonlyArray<PostFormat>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostFormatConnectionPageInfo;
};

/** Represents a connection to a postFormat. Contains both the postFormat Node and metadata about the relationship. */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected postFormat Node */
  readonly node: PostFormat;
};

/** Pagination metadata specific to &quot;PostFormatConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;PostFormatConnectionEdge&quot; Nodes. */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific PostFormat. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the PostFormat. */
export type PostFormatIdType =
  /** The Database ID for the node */
  | 'DATABASE_ID'
  /** The hashed Global ID */
  | 'ID'
  /** The name of the node */
  | 'NAME'
  /** Url friendly name of the node */
  | 'SLUG'
  /** The URI for the node */
  | 'URI';

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  readonly edges: ReadonlyArray<PostFormatToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostFormatToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;PostFormatToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of PostFormatToContentNodeConnection Nodes. */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'PostFormatToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  readonly edges: ReadonlyArray<PostFormatToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostFormatToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;PostFormatToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of PostFormatToPostConnection Nodes. */
export type PostFormatToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostFormatToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  readonly __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Taxonomy;
};

/** Identifier types for retrieving a specific Post. Specifies which unique attribute is used to find an exact Post. */
export type PostIdType =
  /** Identify a resource by the Database ID. */
  | 'DATABASE_ID'
  /** Identify a resource by the (hashed) Global ID. */
  | 'ID'
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  | 'SLUG'
  /** Identify a resource by the URI. */
  | 'URI';

/** Content field rendering options. Determines whether content fields are returned as raw data or with applied formatting and transformations. Default is RENDERED. */
export type PostObjectFieldFormatEnum =
  /** Unprocessed content exactly as stored in the database, requires appropriate permissions. */
  | 'RAW'
  /** Content with all formatting and transformations applied, ready for display. */
  | 'RENDERED';

/** Date field selectors for content filtering. Specifies which date attribute (creation date, modification date) should be used for date-based queries. */
export type PostObjectsConnectionDateColumnEnum =
  /** The date the comment was created in local time. */
  | 'DATE'
  /** The most recent modification date of the comment. */
  | 'MODIFIED';

/** Content sorting attributes for post-type objects. Identifies which content property should be used to determine result order. */
export type PostObjectsConnectionOrderbyEnum =
  /** Ordering by content author (typically by author name). */
  | 'AUTHOR'
  /** Ordering by popularity based on number of comments. */
  | 'COMMENT_COUNT'
  /** Chronological ordering by publication date. */
  | 'DATE'
  /** Maintain custom order of IDs exactly as specified in the query with the IN field. */
  | 'IN'
  /** Ordering by manually defined sort position. */
  | 'MENU_ORDER'
  /** Chronological ordering by modified date. */
  | 'MODIFIED'
  /** Maintain custom order of IDs exactly as specified in the query with the NAME_IN field. */
  | 'NAME_IN'
  /** Ordering by parent-child relationship in hierarchical content. */
  | 'PARENT'
  /** Alphabetical ordering by URL-friendly name. */
  | 'SLUG'
  /** Alphabetical ordering by content title */
  | 'TITLE';

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  readonly field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  readonly order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** Publishing status that controls the visibility and editorial state of content. Determines whether content is published, pending review, in draft state, or private. */
export type PostStatusEnum =
  /** Objects with the acf-disabled status */
  | 'ACF_DISABLED'
  /** Automatically saved content that has not been manually saved */
  | 'AUTO_DRAFT'
  /** Content that is saved but not yet published or visible to the public */
  | 'DRAFT'
  /** Objects with the future status */
  | 'FUTURE'
  /** Content that inherits its status from a parent object */
  | 'INHERIT'
  /** Content awaiting review before publication */
  | 'PENDING'
  /** Content only visible to authorized users with appropriate permissions */
  | 'PRIVATE'
  /** Content that is publicly visible to all visitors */
  | 'PUBLISH'
  /** Objects with the request-completed status */
  | 'REQUEST_COMPLETED'
  /** Objects with the request-confirmed status */
  | 'REQUEST_CONFIRMED'
  /** Objects with the request-failed status */
  | 'REQUEST_FAILED'
  /** Objects with the request-pending status */
  | 'REQUEST_PENDING'
  /** Content marked for deletion but still recoverable */
  | 'TRASH';

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection & Connection & {
  readonly __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  readonly edges: ReadonlyArray<PostToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Category>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  readonly __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Category;
};

/** Pagination metadata specific to &quot;PostToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToCategoryConnection Nodes. */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'PostToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  readonly edges: ReadonlyArray<PostToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;PostToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToCommentConnection Nodes. */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'PostToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the post type and the post type */
export type PostToParentConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  readonly __typename?: 'PostToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Post;
};

/** Connection between the post type and the post type */
export type PostToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'PostToPostConnection';
  /** Edges for the PostToPostConnection connection */
  readonly edges: ReadonlyArray<PostToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'PostToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;PostToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToPostConnection Nodes. */
export type PostToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection & PostFormatConnection & {
  readonly __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  readonly edges: ReadonlyArray<PostToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<PostFormat>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  readonly __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: PostFormat;
};

/** Pagination metadata specific to &quot;PostToPostFormatConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToPostFormatConnection Nodes. */
export type PostToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  readonly __typename?: 'PostToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Post;
};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection & PostConnection & {
  readonly __typename?: 'PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  readonly edges: ReadonlyArray<PostToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;PostToRevisionConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToRevisionConnection Nodes. */
export type PostToRevisionConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection & TagConnection & {
  readonly __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  readonly edges: ReadonlyArray<PostToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Tag>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToTagConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge & TagConnectionEdge & {
  readonly __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Tag;
};

/** Pagination metadata specific to &quot;PostToTagConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToTagConnection Nodes. */
export type PostToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection & TermNodeConnection & {
  readonly __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  readonly edges: ReadonlyArray<PostToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<TermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: PostToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  readonly __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: TermNode;
};

/** Pagination metadata specific to &quot;PostToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of PostToTermNodeConnection Nodes. */
export type PostToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'PostToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  readonly __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  readonly addNew: Maybe<Scalars['String']['output']>;
  /** Label for adding a new singular item. */
  readonly addNewItem: Maybe<Scalars['String']['output']>;
  /** Label to signify all items in a submenu link. */
  readonly allItems: Maybe<Scalars['String']['output']>;
  /** Label for archives in nav menus */
  readonly archives: Maybe<Scalars['String']['output']>;
  /** Label for the attributes meta box. */
  readonly attributes: Maybe<Scalars['String']['output']>;
  /** Label for editing a singular item. */
  readonly editItem: Maybe<Scalars['String']['output']>;
  /** Label for the Featured Image meta box title. */
  readonly featuredImage: Maybe<Scalars['String']['output']>;
  /** Label for the table views hidden heading. */
  readonly filterItemsList: Maybe<Scalars['String']['output']>;
  /** Label for the media frame button. */
  readonly insertIntoItem: Maybe<Scalars['String']['output']>;
  /** Label for the table hidden heading. */
  readonly itemsList: Maybe<Scalars['String']['output']>;
  /** Label for the table pagination hidden heading. */
  readonly itemsListNavigation: Maybe<Scalars['String']['output']>;
  /** Label for the menu name. */
  readonly menuName: Maybe<Scalars['String']['output']>;
  /** General name for the post type, usually plural. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Label for the new item page title. */
  readonly newItem: Maybe<Scalars['String']['output']>;
  /** Label used when no items are found. */
  readonly notFound: Maybe<Scalars['String']['output']>;
  /** Label used when no items are in the trash. */
  readonly notFoundInTrash: Maybe<Scalars['String']['output']>;
  /** Label used to prefix parents of hierarchical items. */
  readonly parentItemColon: Maybe<Scalars['String']['output']>;
  /** Label for removing the featured image. */
  readonly removeFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Label for searching plural items. */
  readonly searchItems: Maybe<Scalars['String']['output']>;
  /** Label for setting the featured image. */
  readonly setFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Name for one object of this post type. */
  readonly singularName: Maybe<Scalars['String']['output']>;
  /** Label for the media frame filter. */
  readonly uploadedToThisItem: Maybe<Scalars['String']['output']>;
  /** Label in the media frame for using a featured image. */
  readonly useFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Label for viewing a singular item. */
  readonly viewItem: Maybe<Scalars['String']['output']>;
  /** Label for viewing post type archives. */
  readonly viewItems: Maybe<Scalars['String']['output']>;
};

/** Content that supports a draft preview mode. Allows viewing unpublished changes before they are made publicly available. Previewing unpublished changes requires appropriate permissions. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']['output']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']['output']>;
};

/** The reading setting type */
export type ReadingSettings = Node & {
  readonly __typename?: 'ReadingSettings';
  /** The globally unique identifier of the settings group. */
  readonly id: Scalars['ID']['output'];
  /** The ID of the page that should display the latest posts */
  readonly pageForPosts: Maybe<Scalars['Int']['output']>;
  /** The ID of the page that should be displayed on the front page */
  readonly pageOnFront: Maybe<Scalars['Int']['output']>;
  /** Blog pages show at most. */
  readonly postsPerPage: Maybe<Scalars['Int']['output']>;
  /** What to show on the front page */
  readonly showOnFront: Maybe<Scalars['String']['output']>;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']['input']>;
  /** The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username. */
  readonly username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  readonly __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  readonly user: Maybe<User>;
};

/** Logical operators for filter conditions. Determines whether multiple filtering criteria should be combined with AND (all must match) or OR (any can match). */
export type RelationEnum =
  /** All conditions must match (more restrictive filtering) */
  | 'AND'
  /** Any condition can match (more inclusive filtering) */
  | 'OR';

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Password reset key */
  readonly key: InputMaybe<Scalars['String']['input']>;
  /** The user's login (username). */
  readonly login: InputMaybe<Scalars['String']['input']>;
  /** The new password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  readonly __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  readonly user: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment to be restored */
  readonly id: Scalars['ID']['input'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  readonly __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The restored comment object */
  readonly comment: Maybe<Comment>;
  /** The ID of the restored comment */
  readonly restoredId: Maybe<Scalars['ID']['output']>;
};

/** The root mutation */
export type RootMutation = {
  readonly __typename?: 'RootMutation';
  /** The createCategory mutation */
  readonly createCategory: Maybe<CreateCategoryPayload>;
  /** The createComment mutation */
  readonly createComment: Maybe<CreateCommentPayload>;
  /** The createMediaItem mutation */
  readonly createMediaItem: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  readonly createPage: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  readonly createPost: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  readonly createPostFormat: Maybe<CreatePostFormatPayload>;
  /** The createTag mutation */
  readonly createTag: Maybe<CreateTagPayload>;
  /** The createUser mutation */
  readonly createUser: Maybe<CreateUserPayload>;
  /** The deleteCategory mutation */
  readonly deleteCategory: Maybe<DeleteCategoryPayload>;
  /** The deleteComment mutation */
  readonly deleteComment: Maybe<DeleteCommentPayload>;
  /** The deleteMediaItem mutation */
  readonly deleteMediaItem: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  readonly deletePage: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  readonly deletePost: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  readonly deletePostFormat: Maybe<DeletePostFormatPayload>;
  /** The deleteTag mutation */
  readonly deleteTag: Maybe<DeleteTagPayload>;
  /** The deleteUser mutation */
  readonly deleteUser: Maybe<DeleteUserPayload>;
  /** Increase the count. */
  readonly increaseCount: Maybe<Scalars['Int']['output']>;
  /** The registerUser mutation */
  readonly registerUser: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  readonly resetUserPassword: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  readonly restoreComment: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  readonly sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
  /** The updateCategory mutation */
  readonly updateCategory: Maybe<UpdateCategoryPayload>;
  /** The updateComment mutation */
  readonly updateComment: Maybe<UpdateCommentPayload>;
  /** The updateMediaItem mutation */
  readonly updateMediaItem: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  readonly updatePage: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  readonly updatePost: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  readonly updatePostFormat: Maybe<UpdatePostFormatPayload>;
  /** The updateSettings mutation */
  readonly updateSettings: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  readonly updateTag: Maybe<UpdateTagPayload>;
  /** The updateUser mutation */
  readonly updateUser: Maybe<UpdateUserPayload>;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count: InputMaybe<Scalars['Int']['input']>;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  readonly __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  readonly allSettings: Maybe<Settings>;
  /** Connection between the RootQuery type and the category type */
  readonly categories: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  readonly category: Maybe<Category>;
  /** Returns a Comment */
  readonly comment: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  readonly comments: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  readonly contentNode: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  readonly contentNodes: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  readonly contentType: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  readonly contentTypes: Maybe<RootQueryToContentTypeConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  readonly discussionSettings: Maybe<DiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  readonly generalSettings: Maybe<GeneralSettings>;
  /** An object of the mediaItem Type.  */
  readonly mediaItem: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly mediaItemBy: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  readonly mediaItems: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  readonly menu: Maybe<Menu>;
  /** A WordPress navigation menu item */
  readonly menuItem: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  readonly menuItems: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  readonly menus: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  readonly node: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  readonly nodeByUri: Maybe<UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  readonly page: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly pageBy: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  readonly pages: Maybe<RootQueryToPageConnection>;
  /** Fields of the &#039;PermalinkSettings&#039; settings group */
  readonly permalinkSettings: Maybe<PermalinkSettings>;
  /** A WordPress plugin */
  readonly plugin: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  readonly plugins: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  readonly post: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly postBy: Maybe<Post>;
  /** A 0bject */
  readonly postFormat: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  readonly postFormats: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  readonly posts: Maybe<RootQueryToPostConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readonly readingSettings: Maybe<ReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  readonly registeredScripts: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  readonly registeredStylesheets: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  readonly revisions: Maybe<RootQueryToRevisionsConnection>;
  /** A 0bject */
  readonly tag: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  readonly tags: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  readonly taxonomies: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  readonly taxonomy: Maybe<Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  readonly termNode: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  readonly terms: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  readonly theme: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  readonly themes: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  readonly user: Maybe<User>;
  /** Returns a user role */
  readonly userRole: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  readonly userRoles: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  readonly users: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  readonly viewer: Maybe<User>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  readonly writingSettings: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<CommentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  contentType: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<ContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<MediaItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  mediaItemId: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String']['input'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<PageIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  pageId: InputMaybe<Scalars['Int']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<PostIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  postId: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToEnqueuedScriptConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToEnqueuedStylesheetConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy: InputMaybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  readonly __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  readonly edges: ReadonlyArray<RootQueryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Category>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  readonly __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Category;
};

/** Pagination metadata specific to &quot;RootQueryToCategoryConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToCategoryConnection Nodes. */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  readonly edges: ReadonlyArray<RootQueryToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;RootQueryToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToCommentConnection Nodes. */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  readonly edges: ReadonlyArray<RootQueryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;RootQueryToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToContentNodeConnection Nodes. */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection & ContentTypeConnection & {
  readonly __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  readonly edges: ReadonlyArray<RootQueryToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentType>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  readonly __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentType;
};

/** Pagination metadata specific to &quot;RootQueryToContentTypeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToContentTypeConnection Nodes. */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  readonly __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  readonly edges: ReadonlyArray<RootQueryToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedScript>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  readonly __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;RootQueryToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToEnqueuedScriptConnection Nodes. */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToEnqueuedScriptConnection connection */
export type RootQueryToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  readonly __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  readonly edges: ReadonlyArray<RootQueryToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  readonly __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;RootQueryToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToEnqueuedStylesheetConnection Nodes. */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToEnqueuedStylesheetConnection connection */
export type RootQueryToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection & MediaItemConnection & {
  readonly __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  readonly edges: ReadonlyArray<RootQueryToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<MediaItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  readonly __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: MediaItem;
};

/** Pagination metadata specific to &quot;RootQueryToMediaItemConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMediaItemConnection Nodes. */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection & MenuConnection & {
  readonly __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  readonly edges: ReadonlyArray<RootQueryToMenuConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Menu>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToMenuConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge & MenuConnectionEdge & {
  readonly __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Menu;
};

/** Pagination metadata specific to &quot;RootQueryToMenuConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMenuConnection Nodes. */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToMenuConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection & MenuItemConnection & {
  readonly __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  readonly edges: ReadonlyArray<RootQueryToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<MenuItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  readonly __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: MenuItem;
};

/** Pagination metadata specific to &quot;RootQueryToMenuItemConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToMenuItemConnection Nodes. */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection & PageConnection & {
  readonly __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  readonly edges: ReadonlyArray<RootQueryToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Page>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToPageConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge & PageConnectionEdge & {
  readonly __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Page;
};

/** Pagination metadata specific to &quot;RootQueryToPageConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPageConnection Nodes. */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection & PluginConnection & {
  readonly __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  readonly edges: ReadonlyArray<RootQueryToPluginConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Plugin>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToPluginConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge & PluginConnectionEdge & {
  readonly __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Plugin;
};

/** Pagination metadata specific to &quot;RootQueryToPluginConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPluginConnection Nodes. */
export type RootQueryToPluginConnectionPageInfo = PageInfo & PluginConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToPluginConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve plugins where plugin status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  readonly status: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  readonly edges: ReadonlyArray<RootQueryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;RootQueryToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPostConnection Nodes. */
export type RootQueryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection & PostFormatConnection & {
  readonly __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  readonly edges: ReadonlyArray<RootQueryToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<PostFormat>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  readonly __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: PostFormat;
};

/** Pagination metadata specific to &quot;RootQueryToPostFormatConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToPostFormatConnection Nodes. */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'RootQueryToRevisionsConnection';
  /** Edges for the RootQueryToRevisionsConnection connection */
  readonly edges: ReadonlyArray<RootQueryToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'RootQueryToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;RootQueryToRevisionsConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToRevisionsConnection Nodes. */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection & TagConnection & {
  readonly __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  readonly edges: ReadonlyArray<RootQueryToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Tag>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToTagConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge & TagConnectionEdge & {
  readonly __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Tag;
};

/** Pagination metadata specific to &quot;RootQueryToTagConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTagConnection Nodes. */
export type RootQueryToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection & TaxonomyConnection & {
  readonly __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  readonly edges: ReadonlyArray<RootQueryToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Taxonomy>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  readonly __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Taxonomy;
};

/** Pagination metadata specific to &quot;RootQueryToTaxonomyConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTaxonomyConnection Nodes. */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection & TermNodeConnection & {
  readonly __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  readonly edges: ReadonlyArray<RootQueryToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<TermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  readonly __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: TermNode;
};

/** Pagination metadata specific to &quot;RootQueryToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToTermNodeConnection Nodes. */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomyId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection & ThemeConnection & {
  readonly __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  readonly edges: ReadonlyArray<RootQueryToThemeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Theme>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToThemeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge & ThemeConnectionEdge & {
  readonly __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Theme;
};

/** Pagination metadata specific to &quot;RootQueryToThemeConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToThemeConnection Nodes. */
export type RootQueryToThemeConnectionPageInfo = PageInfo & ThemeConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToThemeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection & UserConnection & {
  readonly __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  readonly edges: ReadonlyArray<RootQueryToUserConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<User>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToUserConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge & UserConnectionEdge & {
  readonly __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: User;
};

/** Pagination metadata specific to &quot;RootQueryToUserConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToUserConnection Nodes. */
export type RootQueryToUserConnectionPageInfo = PageInfo & UserConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToUserConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  readonly hasPublishedPosts: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  /** The user login. */
  readonly login: InputMaybe<Scalars['String']['input']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  readonly loginIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  readonly loginNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** The user nicename. */
  readonly nicename: InputMaybe<Scalars['String']['input']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  readonly nicenameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  readonly nicenameNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  readonly role: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  readonly roleIn: InputMaybe<ReadonlyArray<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  readonly roleNotIn: InputMaybe<ReadonlyArray<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  readonly searchColumns: InputMaybe<ReadonlyArray<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection & UserRoleConnection & {
  readonly __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  readonly edges: ReadonlyArray<RootQueryToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<UserRole>;
  /** Information about pagination in a connection. */
  readonly pageInfo: RootQueryToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  readonly __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: UserRole;
};

/** Pagination metadata specific to &quot;RootQueryToUserRoleConnection&quot; collections. Provides cursors and flags for navigating through sets of RootQueryToUserRoleConnection Nodes. */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'RootQueryToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Script insertion positions in the document structure. Determines whether scripts are placed in the document head or before the closing body tag. */
export type ScriptLoadingGroupLocationEnum =
  /** Delayed loading at end of document, right before the closing `<body>` tag. (allows content to render first) */
  | 'FOOTER'
  /** Early loading in document `<head>` tag. (executes before page content renders) */
  | 'HEADER';

/** Script loading optimization attributes. Controls browser behavior for script loading to improve page performance (async or defer). */
export type ScriptLoadingStrategyEnum =
  /** Load script in parallel with page rendering, executing as soon as downloaded */
  | 'ASYNC'
  /** Download script in parallel but defer execution until page is fully parsed */
  | 'DEFER';

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username or email address. */
  readonly username: Scalars['String']['input'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  readonly __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  readonly success: Maybe<Scalars['Boolean']['output']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  readonly user: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
  readonly __typename?: 'Settings';
  /** Settings of the string Settings Group */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsDescription: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsEmail: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsHomeUrl: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsLanguage: Maybe<Scalars['String']['output']>;
  /** Settings of the integer Settings Group */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsTimezone: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsTitle: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly generalSettingsUrl: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly permalinkSettingsCategoryBase: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly permalinkSettingsStructure: Maybe<Scalars['String']['output']>;
  /** Settings of the string Settings Group */
  readonly permalinkSettingsTagBase: Maybe<Scalars['String']['output']>;
  /** Settings of the integer Settings Group */
  readonly readingSettingsPageForPosts: Maybe<Scalars['Int']['output']>;
  /** Settings of the integer Settings Group */
  readonly readingSettingsPageOnFront: Maybe<Scalars['Int']['output']>;
  /** Settings of the integer Settings Group */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']['output']>;
  /** Settings of the string Settings Group */
  readonly readingSettingsShowOnFront: Maybe<Scalars['String']['output']>;
  /** Settings of the integer Settings Group */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']['output']>;
  /** Settings of the string Settings Group */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the boolean Settings Group */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']['output']>;
};

/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type Tag = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  readonly __typename?: 'Tag';
  /** Connection between the Tag type and the ContentNode type */
  readonly contentNodes: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int']['output'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Connection between the Tag type and the post type */
  readonly posts: Maybe<TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /**
   * The unique numeric identifier for the term.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly tagId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Tag type and the Taxonomy type */
  readonly taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A taxonomy term used to organize and classify content. Tags do not have a hierarchy and are generally used for more specific classifications. */
export type TagPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** A paginated collection of tag Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  readonly edges: ReadonlyArray<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  readonly nodes: ReadonlyArray<Tag>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TagConnectionPageInfo;
};

/** Represents a connection to a tag. Contains both the tag Node and metadata about the relationship. */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected tag Node */
  readonly node: Tag;
};

/** Pagination metadata specific to &quot;TagConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TagConnectionEdge&quot; Nodes. */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific Tag. Determines which unique property (global ID, database ID, slug, etc.) is used to locate the Tag. */
export type TagIdType =
  /** The Database ID for the node */
  | 'DATABASE_ID'
  /** The hashed Global ID */
  | 'ID'
  /** The name of the node */
  | 'NAME'
  /** Url friendly name of the node */
  | 'SLUG'
  /** The URI for the node */
  | 'URI';

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  readonly edges: ReadonlyArray<TagToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TagToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;TagToContentNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of TagToContentNodeConnection Nodes. */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'TagToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  readonly edges: ReadonlyArray<TagToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TagToPostConnectionPageInfo;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;TagToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of TagToPostConnection Nodes. */
export type TagToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'TagToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  readonly __typename?: 'TagToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  readonly node: Taxonomy;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  readonly __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  readonly connectedContentTypes: Maybe<TaxonomyToContentTypeConnection>;
  /** List of Term Nodes associated with the Taxonomy */
  readonly connectedTerms: Maybe<TaxonomyToTermNodeConnection>;
  /** Description of the taxonomy. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** The plural name of the post type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']['output']>;
  /** The singular name of the post type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']['output']>;
  /** Whether the taxonomy is hierarchical */
  readonly hierarchical: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the taxonomy object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  readonly label: Maybe<Scalars['String']['output']>;
  /** The display name of the taxonomy. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** Whether the taxonomy is publicly queryable */
  readonly public: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']['output']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. */
  readonly showCloud: Maybe<Scalars['Boolean']['output']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  readonly showInAdminColumn: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the admin menu */
  readonly showInMenu: Maybe<Scalars['Boolean']['output']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  readonly showInQuickEdit: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  readonly showUi: Maybe<Scalars['Boolean']['output']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated collection of Taxonomy Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  readonly edges: ReadonlyArray<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  readonly nodes: ReadonlyArray<Taxonomy>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TaxonomyConnectionPageInfo;
};

/** Represents a connection to a Taxonomy. Contains both the Taxonomy Node and metadata about the relationship. */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Taxonomy Node */
  readonly node: Taxonomy;
};

/** Pagination metadata specific to &quot;TaxonomyConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TaxonomyConnectionEdge&quot; Nodes. */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Available classification systems for organizing content. Identifies the different taxonomy types that can be used for content categorization. */
export type TaxonomyEnum =
  /** Taxonomy enum category */
  | 'CATEGORY'
  /** Taxonomy enum post_format */
  | 'POSTFORMAT'
  /** Taxonomy enum post_tag */
  | 'TAG';

/** Identifier types for retrieving a taxonomy definition. Determines whether to look up taxonomies by ID or name. */
export type TaxonomyIdTypeEnum =
  /** The globally unique ID */
  | 'ID'
  /** The name of the taxonomy */
  | 'NAME';

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection & ContentTypeConnection & {
  readonly __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  readonly edges: ReadonlyArray<TaxonomyToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentType>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TaxonomyToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  readonly __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentType;
};

/** Pagination metadata specific to &quot;TaxonomyToContentTypeConnection&quot; collections. Provides cursors and flags for navigating through sets of TaxonomyToContentTypeConnection Nodes. */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'TaxonomyToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection & TermNodeConnection & {
  readonly __typename?: 'TaxonomyToTermNodeConnection';
  /** Edges for the TaxonomyToTermNodeConnection connection */
  readonly edges: ReadonlyArray<TaxonomyToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<TermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TaxonomyToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  readonly __typename?: 'TaxonomyToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: TermNode;
};

/** Pagination metadata specific to &quot;TaxonomyToTermNodeConnection&quot; collections. Provides cursors and flags for navigating through sets of TaxonomyToTermNodeConnection Nodes. */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'TaxonomyToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNode = {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int']['output'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};


/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedScriptConnectionWhereArgs>;
};


/** Base interface for taxonomy terms such as categories and tags. Terms are used to organize and classify content. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TermNodeToEnqueuedStylesheetConnectionWhereArgs>;
};

/** A paginated collection of TermNode Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  readonly edges: ReadonlyArray<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  readonly nodes: ReadonlyArray<TermNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TermNodeConnectionPageInfo;
};

/** Represents a connection to a TermNode. Contains both the TermNode Node and metadata about the relationship. */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected TermNode Node */
  readonly node: TermNode;
};

/** Pagination metadata specific to &quot;TermNodeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;TermNodeConnectionEdge&quot; Nodes. */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export type TermNodeIdTypeEnum =
  /** The Database ID for the node */
  | 'DATABASE_ID'
  /** The hashed Global ID */
  | 'ID'
  /** The name of the node */
  | 'NAME'
  /** Url friendly name of the node */
  | 'SLUG'
  /** The URI for the node */
  | 'URI';

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  readonly __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  readonly edges: ReadonlyArray<TermNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedScript>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  readonly __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;TermNodeToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of TermNodeToEnqueuedScriptConnection Nodes. */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TermNodeToEnqueuedScriptConnection connection */
export type TermNodeToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  readonly __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  readonly edges: ReadonlyArray<TermNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  readonly pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  readonly __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;TermNodeToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of TermNodeToEnqueuedStylesheetConnection Nodes. */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TermNodeToEnqueuedStylesheetConnection connection */
export type TermNodeToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Sorting attributes for taxonomy term collections. Determines which property of taxonomy terms is used for ordering results. */
export type TermObjectsConnectionOrderbyEnum =
  /** Ordering by number of associated content items. */
  | 'COUNT'
  /** Alphabetical ordering by term description text. */
  | 'DESCRIPTION'
  /** Alphabetical ordering by term name. */
  | 'NAME'
  /** Alphabetical ordering by URL-friendly name. */
  | 'SLUG'
  /** Ordering by assigned term grouping value. */
  | 'TERM_GROUP'
  /** Ordering by internal identifier. */
  | 'TERM_ID'
  /** Ordering by manually defined sort position. */
  | 'TERM_ORDER';

/** A theme object */
export type Theme = Node & {
  readonly __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. */
  readonly author: Maybe<Scalars['String']['output']>;
  /** URI for the author/company website. */
  readonly authorUri: Maybe<Scalars['String']['output']>;
  /** The description of the theme. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the theme object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Display name of the theme. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. */
  readonly screenshot: Maybe<Scalars['String']['output']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** A list of tags associated with the theme, typically describing its features (e.g. custom-logo, accessibility-ready, full-site-editing). */
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. */
  readonly themeUri: Maybe<Scalars['String']['output']>;
  /** The current version of the theme. */
  readonly version: Maybe<Scalars['String']['output']>;
};

/** A paginated collection of Theme Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  readonly edges: ReadonlyArray<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  readonly nodes: ReadonlyArray<Theme>;
  /** Information about pagination in a connection. */
  readonly pageInfo: ThemeConnectionPageInfo;
};

/** Represents a connection to a Theme. Contains both the Theme Node and metadata about the relationship. */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected Theme Node */
  readonly node: Theme;
};

/** Pagination metadata specific to &quot;ThemeConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;ThemeConnectionEdge&quot; Nodes. */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** An interface for content that can be accessed via a unique URI/URL path. Implemented by content types that have their own permalinks. */
export type UniformResourceIdentifiable = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category object to update */
  readonly id: Scalars['ID']['input'];
  /** The name of the category object to mutate */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the category that should be set as the parent. This field cannot be used in conjunction with parentId */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the category that should be set as the parent. This field cannot be used in conjunction with parentDatabaseId */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  readonly __typename?: 'UpdateCategoryPayload';
  /** The created category */
  readonly category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The name of the comment's author. */
  readonly author: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  readonly commentOn: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment being updated. */
  readonly id: Scalars['ID']['input'];
  /** Parent comment ID of current comment. */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  readonly status: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  readonly type: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  readonly __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The comment that was created */
  readonly comment: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  readonly caption: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  readonly filePath: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  readonly fileType: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  readonly id: Scalars['ID']['input'];
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  readonly status: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  readonly __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The MediaItem object mutation type. */
  readonly mediaItem: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page object */
  readonly id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  readonly ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  readonly status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  readonly __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  readonly page: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat object to update */
  readonly id: Scalars['ID']['input'];
  /** The name of the post_format object to mutate */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  readonly __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_format */
  readonly postFormat: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  readonly categories: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  readonly excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the post object */
  readonly id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  readonly ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  readonly pingStatus: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  readonly pinged: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: InputMaybe<PostTagsInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  readonly toPing: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  readonly __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  readonly post: Maybe<Post>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Allow people to submit comments on new posts. */
  readonly discussionSettingsDefaultCommentStatus: InputMaybe<Scalars['String']['input']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly discussionSettingsDefaultPingStatus: InputMaybe<Scalars['String']['input']>;
  /** A date format for all date strings. */
  readonly generalSettingsDateFormat: InputMaybe<Scalars['String']['input']>;
  /** Site tagline. */
  readonly generalSettingsDescription: InputMaybe<Scalars['String']['input']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly generalSettingsEmail: InputMaybe<Scalars['String']['input']>;
  /** WordPress locale code. */
  readonly generalSettingsLanguage: InputMaybe<Scalars['String']['input']>;
  /** A day number of the week that the week should start on. */
  readonly generalSettingsStartOfWeek: InputMaybe<Scalars['Int']['input']>;
  /** A time format for all time strings. */
  readonly generalSettingsTimeFormat: InputMaybe<Scalars['String']['input']>;
  /** A city in the same timezone as you. */
  readonly generalSettingsTimezone: InputMaybe<Scalars['String']['input']>;
  /** Site title. */
  readonly generalSettingsTitle: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page that should display the latest posts */
  readonly readingSettingsPageForPosts: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the page that should be displayed on the front page */
  readonly readingSettingsPageOnFront: InputMaybe<Scalars['Int']['input']>;
  /** Blog pages show at most. */
  readonly readingSettingsPostsPerPage: InputMaybe<Scalars['Int']['input']>;
  /** What to show on the front page */
  readonly readingSettingsShowOnFront: InputMaybe<Scalars['String']['input']>;
  /** Default post category. */
  readonly writingSettingsDefaultCategory: InputMaybe<Scalars['Int']['input']>;
  /** Default post format. */
  readonly writingSettingsDefaultPostFormat: InputMaybe<Scalars['String']['input']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly writingSettingsUseSmilies: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  readonly __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  readonly allSettings: Maybe<Settings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** Update the DiscussionSettings setting. */
  readonly discussionSettings: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  readonly generalSettings: Maybe<GeneralSettings>;
  /** Update the PermalinkSettings setting. */
  readonly permalinkSettings: Maybe<PermalinkSettings>;
  /** Update the ReadingSettings setting. */
  readonly readingSettings: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  readonly writingSettings: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag object to update */
  readonly id: Scalars['ID']['input'];
  /** The name of the post_tag object to mutate */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  readonly __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_tag */
  readonly tag: Maybe<Tag>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']['input']>;
  /** The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user */
  readonly id: Scalars['ID']['input'];
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  readonly __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  readonly user: Maybe<User>;
};

/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type User = Commenter & DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  readonly __typename?: 'User';
  /** The admin color scheme preference for the user. Possible values include &quot;fresh&quot;, &quot;light&quot;, &quot;blue&quot;, &quot;coffee&quot;, &quot;ectoplasm&quot;, &quot;midnight&quot;, &quot;ocean&quot;, &quot;sunrise&quot;. Default is &quot;fresh&quot;. */
  readonly adminColor: Maybe<Scalars['String']['output']>;
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  readonly capKey: Maybe<Scalars['String']['output']>;
  /** A list of capabilities (permissions) granted to the user */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** Connection between the User type and the Comment type */
  readonly comments: Maybe<UserToCommentConnection>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int']['output'];
  /** Description of the user. */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Email address of the user. */
  readonly email: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<UserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. */
  readonly extraCapabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** First name of the user. */
  readonly firstName: Maybe<Scalars['String']['output']>;
  /** Whether the user has enabled keyboard shortcuts for comment moderation. Defaults to false. */
  readonly hasCommentShortcutsEnabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the user has enabled the visual editor. When enabled, the WYSIWYG editor is used for content editing. Defaults to true. */
  readonly hasRichEditingEnabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the user has enabled syntax highlighting when editing code within the post editor. Defaults to true. */
  readonly hasSyntaxHighlightingEnabled: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier for the user object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  readonly isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  readonly isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  readonly isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean']['output'];
  /** Last name of the user. */
  readonly lastName: Maybe<Scalars['String']['output']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  readonly locale: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the mediaItem type */
  readonly mediaItems: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The url friendly name for the user, used to reference the user in a public url. */
  readonly nicename: Maybe<Scalars['String']['output']>;
  /** Nickname of the user. */
  readonly nickname: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the page type */
  readonly pages: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  readonly posts: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  readonly registeredDate: Maybe<Scalars['String']['output']>;
  /** Connection between the User and Revisions authored by the user */
  readonly revisions: Maybe<UserToRevisionsConnection>;
  /** Connection between the User type and the UserRole type */
  readonly roles: Maybe<UserToUserRoleConnection>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  readonly shouldShowAdminToolbar: Maybe<Scalars['Boolean']['output']>;
  /** The url friendly identifier for the user. */
  readonly slug: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']['output']>;
  /** A website url that is associated with the user. */
  readonly url: Maybe<Scalars['String']['output']>;
  /**
   * The unique numeric identifier for the user.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly userId: Maybe<Scalars['Int']['output']>;
  /** Username for the user. This is the unique identifier the user provides to log in. */
  readonly username: Maybe<Scalars['String']['output']>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']['input']>;
  rating: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToCommentConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToEnqueuedScriptConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToEnqueuedStylesheetConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserMediaItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToPageConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToPostConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};


/** A registered user account. Users can be assigned roles, author content, and have various capabilities within the site. */
export type UserRolesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated collection of User Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  readonly edges: ReadonlyArray<UserConnectionEdge>;
  /** A list of connected User Nodes */
  readonly nodes: ReadonlyArray<User>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserConnectionPageInfo;
};

/** Represents a connection to a User. Contains both the User Node and metadata about the relationship. */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected User Node */
  readonly node: User;
};

/** Pagination metadata specific to &quot;UserConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;UserConnectionEdge&quot; Nodes. */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Identifier types for retrieving a specific user. Determines whether to look up users by ID, email, username, or other unique properties. */
export type UserNodeIdTypeEnum =
  /** The Database ID for the node */
  | 'DATABASE_ID'
  /** The Email of the User */
  | 'EMAIL'
  /** The hashed Global ID */
  | 'ID'
  /** The slug of the User */
  | 'SLUG'
  /** The URI for the node */
  | 'URI'
  /** The username the User uses to login with */
  | 'USERNAME';

/** A user role object */
export type UserRole = Node & {
  readonly __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  /** The display name of the role */
  readonly displayName: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the user role object. */
  readonly id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The registered name of the role */
  readonly name: Maybe<Scalars['String']['output']>;
};

/** A paginated collection of UserRole Nodes, Supports cursor-based pagination and filtering to efficiently retrieve sets of UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  readonly edges: ReadonlyArray<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  readonly nodes: ReadonlyArray<UserRole>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserRoleConnectionPageInfo;
};

/** Represents a connection to a UserRole. Contains both the UserRole Node and metadata about the relationship. */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The connected UserRole Node */
  readonly node: UserRole;
};

/** Pagination metadata specific to &quot;UserRoleConnectionEdge&quot; collections. Provides cursors and flags for navigating through sets of &quot;UserRoleConnectionEdge&quot; Nodes. */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Permission levels for user accounts. Defines the standard access levels that control what actions users can perform within the system. */
export type UserRoleEnum =
  /** Full system access with ability to manage all aspects of the site. */
  | 'ADMINISTRATOR'
  /** Can publish and manage their own content. */
  | 'AUTHOR'
  /** Can write and manage their own content but cannot publish. */
  | 'CONTRIBUTOR'
  /** Content management access without administrative capabilities. */
  | 'EDITOR'
  /** Can only manage their profile and read content. */
  | 'SUBSCRIBER';

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection & Connection & {
  readonly __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  readonly edges: ReadonlyArray<UserToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Comment>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  readonly __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Comment;
};

/** Pagination metadata specific to &quot;UserToCommentConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToCommentConnection Nodes. */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** One or more Comment Statuses to limit results by */
  readonly statusIn: InputMaybe<ReadonlyArray<InputMaybe<CommentStatusEnum>>>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  readonly __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  readonly edges: ReadonlyArray<UserToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedScript>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  readonly __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedScript;
};

/** Pagination metadata specific to &quot;UserToEnqueuedScriptConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToEnqueuedScriptConnection Nodes. */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToEnqueuedScriptConnection connection */
export type UserToEnqueuedScriptConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  readonly __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  readonly edges: ReadonlyArray<UserToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  readonly __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: EnqueuedStylesheet;
};

/** Pagination metadata specific to &quot;UserToEnqueuedStylesheetConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToEnqueuedStylesheetConnection Nodes. */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToEnqueuedStylesheetConnection connection */
export type UserToEnqueuedStylesheetConnectionWhereArgs = {
  /** Limit results to assets whose handle is in the provided list. Handles that do not match an asset are ignored. An empty list matches no assets, while omitting the argument (or passing null) leaves the connection unfiltered. */
  readonly handlesIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection & MediaItemConnection & {
  readonly __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  readonly edges: ReadonlyArray<UserToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<MediaItem>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  readonly __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: MediaItem;
};

/** Pagination metadata specific to &quot;UserToMediaItemConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToMediaItemConnection Nodes. */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection & PageConnection & {
  readonly __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  readonly edges: ReadonlyArray<UserToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Page>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToPageConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge & PageConnectionEdge & {
  readonly __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Page;
};

/** Pagination metadata specific to &quot;UserToPageConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToPageConnection Nodes. */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection & PostConnection & {
  readonly __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  readonly edges: ReadonlyArray<UserToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<Post>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToPostConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge & PostConnectionEdge & {
  readonly __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: Post;
};

/** Pagination metadata specific to &quot;UserToPostConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToPostConnection Nodes. */
export type UserToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'UserToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection & ContentNodeConnection & {
  readonly __typename?: 'UserToRevisionsConnection';
  /** Edges for the UserToRevisionsConnection connection */
  readonly edges: ReadonlyArray<UserToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<ContentNode>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  readonly __typename?: 'UserToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: ContentNode;
};

/** Pagination metadata specific to &quot;UserToRevisionsConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToRevisionsConnection Nodes. */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  readonly __typename?: 'UserToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  readonly id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** True to limit the results to sticky posts; false to exclude sticky posts. Note: this filters the result set, it does not float sticky posts to the top of the results. */
  readonly isSticky: InputMaybe<Scalars['Boolean']['input']>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<PostStatusEnum>;
  /** Filter the connection to content assigned a specific template. */
  readonly template: InputMaybe<ContentTemplateEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection & UserRoleConnection & {
  readonly __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  readonly edges: ReadonlyArray<UserToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  readonly nodes: ReadonlyArray<UserRole>;
  /** Information about pagination in a connection. */
  readonly pageInfo: UserToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  readonly __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  readonly node: UserRole;
};

/** Pagination metadata specific to &quot;UserToUserRoleConnection&quot; collections. Provides cursors and flags for navigating through sets of UserToUserRoleConnection Nodes. */
export type UserToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  readonly __typename?: 'UserToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** User attribute sorting options. Determines which property of user accounts is used for ordering user listings. */
export type UsersConnectionOrderbyEnum =
  /** Order by display name */
  | 'DISPLAY_NAME'
  /** Order by email address */
  | 'EMAIL'
  /** Order by login */
  | 'LOGIN'
  /** Preserve the login order given in the LOGIN_IN array */
  | 'LOGIN_IN'
  /** Order by nice name */
  | 'NICE_NAME'
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  | 'NICE_NAME_IN'
  /** Order by registration date */
  | 'REGISTERED'
  /** Order by URL */
  | 'URL';

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  readonly field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<OrderEnum>;
};

/** User properties that can be targeted in search operations. Defines which user attributes can be searched when looking for specific users. */
export type UsersConnectionSearchColumnEnum =
  /** The user's email address. */
  | 'EMAIL'
  /** The globally unique ID. */
  | 'ID'
  /** The username the User uses to login with. */
  | 'LOGIN'
  /** A URL-friendly name for the user. The default is the user's username. */
  | 'NICENAME'
  /** The URL of the user's website. */
  | 'URL';

/** Metadata for cursor-based pagination. Provides cursors for continuing pagination and boolean flags indicating if more items exist in either direction. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

/** Provides access to fields of the &quot;PageFields&quot; ACF Field Group via the &quot;pageFields&quot; field */
export type WithAcfPageFields = {
  /** Fields of the PageFields ACF Field Group */
  readonly pageFields: Maybe<PageFields>;
};

/** The writing setting type */
export type WritingSettings = Node & {
  readonly __typename?: 'WritingSettings';
  /** Default post category. */
  readonly defaultCategory: Maybe<Scalars['Int']['output']>;
  /** Default post format. */
  readonly defaultPostFormat: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the settings group. */
  readonly id: Scalars['ID']['output'];
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly useSmilies: Maybe<Scalars['Boolean']['output']>;
};
