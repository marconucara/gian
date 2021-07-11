// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import * as category from "./documents/category";
import * as post from "./documents/post";
import { blockContent } from "./objects/blockContent";
import * as internalLink from "./objects/internalLink";
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
    ...Object.values(internalLink),
    ...Object.values(wrappedTypes),
    ...Object.values(seo),
    ...Object.values(seoImage),
    // documents
    ...Object.values(category),
    ...Object.values(post),
  ]),
});
