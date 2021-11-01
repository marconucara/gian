import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};



export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

export type BlockOrSeoImage = Block | SeoImage;

export type BlogArticle = Document & {
  __typename?: 'BlogArticle';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<SeoImage>;
  author?: Maybe<BlogAuthor>;
  /** It will be visible in the article */
  publishDate?: Maybe<Scalars['Date']>;
  /** It will be visible in the article */
  modifiedDate?: Maybe<Scalars['Date']>;
  /** Choose the heading to search in the page to generate the index */
  indexHeading?: Maybe<Scalars['String']>;
  contentRaw?: Maybe<Scalars['JSON']>;
};

export type BlogArticleFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  seo?: Maybe<SeoFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  cover?: Maybe<SeoImageFilter>;
  author?: Maybe<BlogAuthorFilter>;
  publishDate?: Maybe<DateFilter>;
  modifiedDate?: Maybe<DateFilter>;
  indexHeading?: Maybe<StringFilter>;
};

export type BlogArticleOrBlogHomepageOrHomepageOrModularPage = BlogArticle | BlogHomepage | Homepage | ModularPage;

export type BlogArticleSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  seo?: Maybe<SeoSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  cover?: Maybe<SeoImageSorting>;
  publishDate?: Maybe<SortOrder>;
  modifiedDate?: Maybe<SortOrder>;
  indexHeading?: Maybe<SortOrder>;
};

export type BlogAuthor = Document & {
  __typename?: 'BlogAuthor';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  photo?: Maybe<SeoImage>;
};

export type BlogAuthorFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  photo?: Maybe<SeoImageFilter>;
};

export type BlogAuthorSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  firstname?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  photo?: Maybe<SeoImageSorting>;
};

export type BlogHomepage = Document & {
  __typename?: 'BlogHomepage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<HeroOrSection>>>;
};

export type BlogHomepageFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  seo?: Maybe<SeoFilter>;
  title?: Maybe<StringFilter>;
};

export type BlogHomepageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  seo?: Maybe<SeoSorting>;
  title?: Maybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};


export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
};


export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type EditorialText = {
  __typename?: 'EditorialText';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  textRaw?: Maybe<Scalars['JSON']>;
};

export type EditorialTextFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type EditorialTextOrPostListing = EditorialText | PostListing;

export type EditorialTextSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type Hero = {
  __typename?: 'Hero';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SeoImage>;
};

export type HeroFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<SeoImageFilter>;
};

export type HeroOrSection = Hero | Section;

export type HeroSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<SeoImageSorting>;
};

export type Homepage = Document & {
  __typename?: 'Homepage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']>;
  cover?: Maybe<SeoImage>;
  profile?: Maybe<SeoImage>;
  introRaw?: Maybe<Scalars['JSON']>;
};

export type HomepageFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  seo?: Maybe<SeoFilter>;
  title?: Maybe<StringFilter>;
  cover?: Maybe<SeoImageFilter>;
  profile?: Maybe<SeoImageFilter>;
};

export type HomepageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  seo?: Maybe<SeoSorting>;
  title?: Maybe<SortOrder>;
  cover?: Maybe<SeoImageSorting>;
  profile?: Maybe<SeoImageSorting>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
};

export type InternalLink = {
  __typename?: 'InternalLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** Optional override */
  title?: Maybe<Scalars['String']>;
  document?: Maybe<BlogArticleOrBlogHomepageOrHomepageOrModularPage>;
  anchor?: Maybe<Scalars['String']>;
  asButton?: Maybe<Scalars['Boolean']>;
};

export type InternalLinkFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  anchor?: Maybe<StringFilter>;
  asButton?: Maybe<BooleanFilter>;
};

export type InternalLinkSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  anchor?: Maybe<SortOrder>;
  asButton?: Maybe<SortOrder>;
};


export type ModularPage = Document & {
  __typename?: 'ModularPage';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  /** Leave it empty normal pages, use it for sub-pages. This field will reflects breacrumbs and links. */
  parentPage?: Maybe<ModularPage>;
  title?: Maybe<Scalars['String']>;
  breadcrumb?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<Array<Maybe<HeroOrSection>>>;
};

export type ModularPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  seo?: Maybe<SeoFilter>;
  parentPage?: Maybe<ModularPageFilter>;
  title?: Maybe<StringFilter>;
  breadcrumb?: Maybe<BooleanFilter>;
};

export type ModularPageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  seo?: Maybe<SeoSorting>;
  title?: Maybe<SortOrder>;
  breadcrumb?: Maybe<SortOrder>;
};

export type PostListing = {
  __typename?: 'PostListing';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostListingFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type PostListingSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  BlogAuthor?: Maybe<BlogAuthor>;
  BlogArticle?: Maybe<BlogArticle>;
  BlogHomepage?: Maybe<BlogHomepage>;
  Homepage?: Maybe<Homepage>;
  ModularPage?: Maybe<ModularPage>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allBlogAuthor: Array<BlogAuthor>;
  allBlogArticle: Array<BlogArticle>;
  allBlogHomepage: Array<BlogHomepage>;
  allHomepage: Array<Homepage>;
  allModularPage: Array<ModularPage>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};


export type RootQueryBlogAuthorArgs = {
  id: Scalars['ID'];
};


export type RootQueryBlogArticleArgs = {
  id: Scalars['ID'];
};


export type RootQueryBlogHomepageArgs = {
  id: Scalars['ID'];
};


export type RootQueryHomepageArgs = {
  id: Scalars['ID'];
};


export type RootQueryModularPageArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllBlogAuthorArgs = {
  where?: Maybe<BlogAuthorFilter>;
  sort?: Maybe<Array<BlogAuthorSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllBlogArticleArgs = {
  where?: Maybe<BlogArticleFilter>;
  sort?: Maybe<Array<BlogArticleSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllBlogHomepageArgs = {
  where?: Maybe<BlogHomepageFilter>;
  sort?: Maybe<Array<BlogHomepageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllHomepageArgs = {
  where?: Maybe<HomepageFilter>;
  sort?: Maybe<Array<HomepageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllModularPageArgs = {
  where?: Maybe<ModularPageFilter>;
  sort?: Maybe<Array<ModularPageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<SanityDocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type SanityDocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** Choose the color scheme */
  theme?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<EditorialTextOrPostListing>>>;
};

export type SectionFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  theme?: Maybe<StringFilter>;
};

export type SectionSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  theme?: Maybe<SortOrder>;
};

export type Seo = {
  __typename?: 'Seo';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** Max suggested length: 60 */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  /** Max suggested length: 160 */
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  noindex?: Maybe<Scalars['Boolean']>;
  ldJson?: Maybe<Array<Maybe<WrappedText>>>;
};

export type SeoFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  description?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
  noindex?: Maybe<BooleanFilter>;
};

export type SeoImage = {
  __typename?: 'SeoImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  /** Please follow these guidelines: https://moz.com/learn/seo/alt-text */
  alt?: Maybe<Scalars['String']>;
};

export type SeoImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  alt?: Maybe<StringFilter>;
};

export type SeoImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
  alt?: Maybe<SortOrder>;
};

export type SeoSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  description?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
  noindex?: Maybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type SortOrder =
  /** Sorts on the value in ascending order. */
  | 'ASC'
  /** Sorts on the value in descending order. */
  | 'DESC';

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type WrappedString = {
  __typename?: 'WrappedString';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WrappedStringFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type WrappedStringSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export type WrappedText = {
  __typename?: 'WrappedText';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WrappedTextFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type WrappedTextSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export type GetBlogArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogArticleQuery = (
  { __typename?: 'RootQuery' }
  & { page: Array<(
    { __typename?: 'BlogArticle' }
    & Pick<BlogArticle, '_id' | 'title' | 'subtitle' | 'publishDate' | 'modifiedDate' | 'indexHeading' | 'contentRaw'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & SanitySeoFragment
    )>, cover?: Maybe<(
      { __typename?: 'SeoImage' }
      & SanityImageFragment
    )>, author?: Maybe<(
      { __typename?: 'BlogAuthor' }
      & Pick<BlogAuthor, 'firstname' | 'lastname'>
      & { photo?: Maybe<(
        { __typename?: 'SeoImage' }
        & SanityImageFragment
      )> }
    )> }
  )> }
);

export type GetBlogHomepageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlogHomepageQuery = (
  { __typename?: 'RootQuery' }
  & { page: Array<(
    { __typename?: 'BlogHomepage' }
    & Pick<BlogHomepage, '_id' | 'title'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & SanitySeoFragment
    )>, sections?: Maybe<Array<Maybe<(
      { __typename?: 'Hero' }
      & SectionsHeroFragment
    ) | (
      { __typename?: 'Section' }
      & SectionsSectionFragment
    )>>> }
  )> }
);

export type GetHomepageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetHomepageQuery = (
  { __typename?: 'RootQuery' }
  & { page: Array<(
    { __typename?: 'Homepage' }
    & Pick<Homepage, '_id' | 'title' | 'introRaw'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & SanitySeoFragment
    )>, cover?: Maybe<(
      { __typename?: 'SeoImage' }
      & SanityImageFragment
    )>, profile?: Maybe<(
      { __typename?: 'SeoImage' }
      & SanityImageFragment
    )> }
  )> }
);

export type GetModularPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetModularPageQuery = (
  { __typename?: 'RootQuery' }
  & { page: Array<(
    { __typename?: 'ModularPage' }
    & Pick<ModularPage, '_id' | 'title'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & SanitySeoFragment
    )>, sections?: Maybe<Array<Maybe<(
      { __typename?: 'Hero' }
      & SectionsHeroFragment
    ) | (
      { __typename?: 'Section' }
      & SectionsSectionFragment
    )>>> }
  )> }
);

export type EditorialTextFragment = (
  { __typename?: 'EditorialText' }
  & Pick<EditorialText, '_key' | 'textRaw'>
);

export type HeroFragment = (
  { __typename?: 'Hero' }
  & Pick<Hero, '_key'>
  & { image?: Maybe<(
    { __typename?: 'SeoImage' }
    & SanityImageFragment
  )> }
);

export type GetImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetImageQuery = (
  { __typename?: 'RootQuery' }
  & { SanityImageAsset?: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & Pick<SanityImageAsset, '_id' | 'url' | 'path' | 'assetId' | 'extension'>
  )> }
);

export type SanityImageFragment = (
  { __typename?: 'SeoImage' }
  & Pick<SeoImage, 'alt'>
  & { crop?: Maybe<(
    { __typename?: 'SanityImageCrop' }
    & Pick<SanityImageCrop, 'top' | 'bottom' | 'left' | 'right'>
  )>, hotspot?: Maybe<(
    { __typename?: 'SanityImageHotspot' }
    & Pick<SanityImageHotspot, 'x' | 'y' | 'height' | 'width'>
  )>, asset?: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & Pick<SanityImageAsset, '_id' | 'url' | 'path' | 'assetId' | 'extension'>
  )> }
);

export type GetPostListingQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetPostListingQuery = (
  { __typename?: 'RootQuery' }
  & { listing: Array<(
    { __typename?: 'BlogArticle' }
    & Pick<BlogArticle, '_id' | 'title' | 'subtitle' | 'publishDate' | 'modifiedDate' | 'contentRaw'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & SanitySeoFragment
    )>, cover?: Maybe<(
      { __typename?: 'SeoImage' }
      & SanityImageFragment
    )>, author?: Maybe<(
      { __typename?: 'BlogAuthor' }
      & Pick<BlogAuthor, 'firstname' | 'lastname'>
    )> }
  )> }
);

export type SectionFragment = (
  { __typename?: 'Section' }
  & Pick<Section, '_key' | 'theme'>
  & { components?: Maybe<Array<Maybe<(
    { __typename: 'EditorialText' }
    & EditorialTextFragment
  ) | (
    { __typename: 'PostListing' }
    & Pick<PostListing, '_key'>
  )>>> }
);

type SectionsHeroFragment = (
  { __typename?: 'Hero' }
  & HeroFragment
);

type SectionsSectionFragment = (
  { __typename?: 'Section' }
  & SectionFragment
);

export type SectionsFragment = SectionsHeroFragment | SectionsSectionFragment;

export type SanitySeoFragment = (
  { __typename?: 'Seo' }
  & Pick<Seo, 'title' | 'description' | 'noindex'>
  & { id?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, image?: Maybe<(
    { __typename?: 'Image' }
    & { asset?: Maybe<(
      { __typename?: 'SanityImageAsset' }
      & Pick<SanityImageAsset, '_id' | 'assetId'>
    )> }
  )>, ldJson?: Maybe<Array<Maybe<(
    { __typename?: 'WrappedText' }
    & Pick<WrappedText, 'value'>
  )>>> }
);

type DocumentRoutingBlogArticleFragment = (
  { __typename: 'BlogArticle' }
  & Pick<BlogArticle, 'title' | '_id'>
  & { seo?: Maybe<(
    { __typename?: 'Seo' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

type DocumentRoutingBlogAuthorFragment = (
  { __typename: 'BlogAuthor' }
  & Pick<BlogAuthor, '_id'>
);

type DocumentRoutingBlogHomepageFragment = (
  { __typename: 'BlogHomepage' }
  & Pick<BlogHomepage, 'title' | '_id'>
  & { seo?: Maybe<(
    { __typename?: 'Seo' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

type DocumentRoutingHomepageFragment = (
  { __typename: 'Homepage' }
  & Pick<Homepage, 'title' | '_id'>
  & { seo?: Maybe<(
    { __typename?: 'Seo' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

type DocumentRoutingModularPageFragment = (
  { __typename: 'ModularPage' }
  & Pick<ModularPage, 'title' | '_id'>
  & { seo?: Maybe<(
    { __typename?: 'Seo' }
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )>, parentPage?: Maybe<(
    { __typename?: 'ModularPage' }
    & Pick<ModularPage, '_id' | 'title'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & { slug?: Maybe<(
        { __typename?: 'Slug' }
        & Pick<Slug, 'current'>
      )> }
    )> }
  )> }
);

type DocumentRoutingSanityFileAssetFragment = (
  { __typename: 'SanityFileAsset' }
  & Pick<SanityFileAsset, '_id'>
);

type DocumentRoutingSanityImageAssetFragment = (
  { __typename: 'SanityImageAsset' }
  & Pick<SanityImageAsset, '_id'>
);

export type DocumentRoutingFragment = DocumentRoutingBlogArticleFragment | DocumentRoutingBlogAuthorFragment | DocumentRoutingBlogHomepageFragment | DocumentRoutingHomepageFragment | DocumentRoutingModularPageFragment | DocumentRoutingSanityFileAssetFragment | DocumentRoutingSanityImageAssetFragment;

export type GetRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoutesQuery = (
  { __typename?: 'RootQuery' }
  & { allDocument: Array<(
    { __typename?: 'BlogArticle' }
    & DocumentRoutingBlogArticleFragment
  ) | (
    { __typename?: 'BlogAuthor' }
    & DocumentRoutingBlogAuthorFragment
  ) | (
    { __typename?: 'BlogHomepage' }
    & DocumentRoutingBlogHomepageFragment
  ) | (
    { __typename?: 'Homepage' }
    & DocumentRoutingHomepageFragment
  ) | (
    { __typename?: 'ModularPage' }
    & DocumentRoutingModularPageFragment
  ) | (
    { __typename?: 'SanityFileAsset' }
    & DocumentRoutingSanityFileAssetFragment
  ) | (
    { __typename?: 'SanityImageAsset' }
    & DocumentRoutingSanityImageAssetFragment
  )> }
);

export const EditorialTextFragmentDoc = gql`
    fragment EditorialText on EditorialText {
  _key
  textRaw
}
    `;
export const SectionFragmentDoc = gql`
    fragment Section on Section {
  _key
  theme
  components {
    __typename
    ... on EditorialText {
      ...EditorialText
    }
    ... on PostListing {
      _key
    }
  }
}
    ${EditorialTextFragmentDoc}`;
export const SanityImageFragmentDoc = gql`
    fragment SanityImage on SeoImage {
  alt
  crop {
    top
    bottom
    left
    right
  }
  hotspot {
    x
    y
    height
    width
  }
  asset {
    _id
    url
    path
    assetId
    extension
  }
}
    `;
export const HeroFragmentDoc = gql`
    fragment Hero on Hero {
  _key
  image {
    ...SanityImage
  }
}
    ${SanityImageFragmentDoc}`;
export const SectionsFragmentDoc = gql`
    fragment Sections on HeroOrSection {
  ... on Section {
    ...Section
  }
  ... on Hero {
    ...Hero
  }
}
    ${SectionFragmentDoc}
${HeroFragmentDoc}`;
export const SanitySeoFragmentDoc = gql`
    fragment SanitySeo on Seo {
  id: slug {
    current
  }
  title
  slug {
    current
  }
  description
  image {
    asset {
      _id
      assetId
    }
  }
  noindex
  ldJson {
    value
  }
}
    `;
export const DocumentRoutingFragmentDoc = gql`
    fragment DocumentRouting on Document {
  _id
  __typename
  ... on BlogArticle {
    title
    seo {
      slug {
        current
      }
    }
  }
  ... on BlogHomepage {
    title
    seo {
      slug {
        current
      }
    }
  }
  ... on Homepage {
    title
    seo {
      slug {
        current
      }
    }
  }
  ... on ModularPage {
    title
    seo {
      slug {
        current
      }
    }
    parentPage {
      _id
      title
      seo {
        slug {
          current
        }
      }
    }
  }
}
    `;
export const GetBlogArticleDocument = gql`
    query getBlogArticle($id: ID!) {
  page: allBlogArticle(
    where: {_id: {matches: $id}}
    sort: {_updatedAt: DESC}
    limit: 1
  ) {
    _id
    seo {
      ...SanitySeo
    }
    title
    subtitle
    cover {
      ...SanityImage
    }
    author {
      photo {
        ...SanityImage
      }
      firstname
      lastname
    }
    publishDate
    modifiedDate
    indexHeading
    contentRaw
  }
}
    ${SanitySeoFragmentDoc}
${SanityImageFragmentDoc}`;

/**
 * __useGetBlogArticleQuery__
 *
 * To run a query within a React component, call `useGetBlogArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogArticleQuery(baseOptions: Apollo.QueryHookOptions<GetBlogArticleQuery, GetBlogArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogArticleQuery, GetBlogArticleQueryVariables>(GetBlogArticleDocument, options);
      }
export function useGetBlogArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogArticleQuery, GetBlogArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogArticleQuery, GetBlogArticleQueryVariables>(GetBlogArticleDocument, options);
        }
export type GetBlogArticleQueryHookResult = ReturnType<typeof useGetBlogArticleQuery>;
export type GetBlogArticleLazyQueryHookResult = ReturnType<typeof useGetBlogArticleLazyQuery>;
export type GetBlogArticleQueryResult = Apollo.QueryResult<GetBlogArticleQuery, GetBlogArticleQueryVariables>;
export const GetBlogHomepageDocument = gql`
    query getBlogHomepage($id: ID!) {
  page: allBlogHomepage(
    where: {_id: {matches: $id}}
    sort: {_updatedAt: DESC}
    limit: 1
  ) {
    _id
    seo {
      ...SanitySeo
    }
    title
    sections {
      ...Sections
    }
  }
}
    ${SanitySeoFragmentDoc}
${SectionsFragmentDoc}`;

/**
 * __useGetBlogHomepageQuery__
 *
 * To run a query within a React component, call `useGetBlogHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogHomepageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogHomepageQuery(baseOptions: Apollo.QueryHookOptions<GetBlogHomepageQuery, GetBlogHomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogHomepageQuery, GetBlogHomepageQueryVariables>(GetBlogHomepageDocument, options);
      }
export function useGetBlogHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogHomepageQuery, GetBlogHomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogHomepageQuery, GetBlogHomepageQueryVariables>(GetBlogHomepageDocument, options);
        }
export type GetBlogHomepageQueryHookResult = ReturnType<typeof useGetBlogHomepageQuery>;
export type GetBlogHomepageLazyQueryHookResult = ReturnType<typeof useGetBlogHomepageLazyQuery>;
export type GetBlogHomepageQueryResult = Apollo.QueryResult<GetBlogHomepageQuery, GetBlogHomepageQueryVariables>;
export const GetHomepageDocument = gql`
    query getHomepage($id: ID!) {
  page: allHomepage(
    where: {_id: {matches: $id}}
    sort: {_updatedAt: DESC}
    limit: 1
  ) {
    _id
    seo {
      ...SanitySeo
    }
    title
    cover {
      ...SanityImage
    }
    profile {
      ...SanityImage
    }
    introRaw
  }
}
    ${SanitySeoFragmentDoc}
${SanityImageFragmentDoc}`;

/**
 * __useGetHomepageQuery__
 *
 * To run a query within a React component, call `useGetHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHomepageQuery(baseOptions: Apollo.QueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
      }
export function useGetHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
        }
export type GetHomepageQueryHookResult = ReturnType<typeof useGetHomepageQuery>;
export type GetHomepageLazyQueryHookResult = ReturnType<typeof useGetHomepageLazyQuery>;
export type GetHomepageQueryResult = Apollo.QueryResult<GetHomepageQuery, GetHomepageQueryVariables>;
export const GetModularPageDocument = gql`
    query getModularPage($id: ID!) {
  page: allModularPage(
    where: {_id: {matches: $id}}
    sort: {_updatedAt: DESC}
    limit: 1
  ) {
    _id
    seo {
      ...SanitySeo
    }
    title
    sections {
      ...Sections
    }
  }
}
    ${SanitySeoFragmentDoc}
${SectionsFragmentDoc}`;

/**
 * __useGetModularPageQuery__
 *
 * To run a query within a React component, call `useGetModularPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModularPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModularPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetModularPageQuery(baseOptions: Apollo.QueryHookOptions<GetModularPageQuery, GetModularPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModularPageQuery, GetModularPageQueryVariables>(GetModularPageDocument, options);
      }
export function useGetModularPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModularPageQuery, GetModularPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModularPageQuery, GetModularPageQueryVariables>(GetModularPageDocument, options);
        }
export type GetModularPageQueryHookResult = ReturnType<typeof useGetModularPageQuery>;
export type GetModularPageLazyQueryHookResult = ReturnType<typeof useGetModularPageLazyQuery>;
export type GetModularPageQueryResult = Apollo.QueryResult<GetModularPageQuery, GetModularPageQueryVariables>;
export const GetImageDocument = gql`
    query getImage($id: ID!) {
  SanityImageAsset(id: $id) {
    _id
    url
    path
    assetId
    extension
  }
}
    `;

/**
 * __useGetImageQuery__
 *
 * To run a query within a React component, call `useGetImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetImageQuery(baseOptions: Apollo.QueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
      }
export function useGetImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImageQuery, GetImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, options);
        }
export type GetImageQueryHookResult = ReturnType<typeof useGetImageQuery>;
export type GetImageLazyQueryHookResult = ReturnType<typeof useGetImageLazyQuery>;
export type GetImageQueryResult = Apollo.QueryResult<GetImageQuery, GetImageQueryVariables>;
export const GetPostListingDocument = gql`
    query getPostListing($offset: Int!, $limit: Int!) {
  listing: allBlogArticle(
    sort: {publishDate: DESC}
    limit: $limit
    offset: $offset
  ) {
    _id
    seo {
      ...SanitySeo
    }
    title
    subtitle
    cover {
      ...SanityImage
    }
    author {
      firstname
      lastname
    }
    publishDate
    modifiedDate
    contentRaw
  }
}
    ${SanitySeoFragmentDoc}
${SanityImageFragmentDoc}`;

/**
 * __useGetPostListingQuery__
 *
 * To run a query within a React component, call `useGetPostListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostListingQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPostListingQuery(baseOptions: Apollo.QueryHookOptions<GetPostListingQuery, GetPostListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostListingQuery, GetPostListingQueryVariables>(GetPostListingDocument, options);
      }
export function useGetPostListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostListingQuery, GetPostListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostListingQuery, GetPostListingQueryVariables>(GetPostListingDocument, options);
        }
export type GetPostListingQueryHookResult = ReturnType<typeof useGetPostListingQuery>;
export type GetPostListingLazyQueryHookResult = ReturnType<typeof useGetPostListingLazyQuery>;
export type GetPostListingQueryResult = Apollo.QueryResult<GetPostListingQuery, GetPostListingQueryVariables>;
export const GetRoutesDocument = gql`
    query getRoutes {
  allDocument(
    where: {_type: {in: ["blogArticle", "homepage", "blogHomepage", "modularPage"]}}
  ) {
    ...DocumentRouting
  }
}
    ${DocumentRoutingFragmentDoc}`;

/**
 * __useGetRoutesQuery__
 *
 * To run a query within a React component, call `useGetRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoutesQuery(baseOptions?: Apollo.QueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, options);
      }
export function useGetRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, options);
        }
export type GetRoutesQueryHookResult = ReturnType<typeof useGetRoutesQuery>;
export type GetRoutesLazyQueryHookResult = ReturnType<typeof useGetRoutesLazyQuery>;
export type GetRoutesQueryResult = Apollo.QueryResult<GetRoutesQuery, GetRoutesQueryVariables>;