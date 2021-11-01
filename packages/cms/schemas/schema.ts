// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import { blockContent } from "./objects/blockContent";
import { section } from "./objects/section";
import * as blogArticle from "./documents/blogArticle";
import * as blogAuthor from "./documents/blogAuthor";
import * as blogHomepage from "./documents/blogHomepage";
import * as editorialText from "./objects/editorialText";
import * as hero from "./objects/hero";
import * as homepage from "./documents/homepage";
import * as internalLink from "./objects/internalLink";
import * as modularPage from "./documents/modularPage";
import * as postListing from "./objects/postListing";
import * as seo from "./objects/seo";
import * as seoImage from "./objects/seoImage";
import * as wrappedTypes from "./objects/wrappedTypes";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // objects
    blockContent,
    section,
    ...Object.values(internalLink),
    ...Object.values(wrappedTypes),
    ...Object.values(seo),
    ...Object.values(hero),
    ...Object.values(seoImage),
    ...Object.values(editorialText),
    ...Object.values(postListing),

    // documents
    ...Object.values(blogAuthor),
    ...Object.values(blogArticle),
    ...Object.values(blogHomepage),
    ...Object.values(homepage),
    ...Object.values(modularPage),
  ]),
});
