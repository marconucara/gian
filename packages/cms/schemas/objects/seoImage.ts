import { ImageField, StringType } from '../schemaTypes';

export const seoAltTextField: StringType = {
  title: 'Alternative Text',
  description:
    'Please follow these guidelines: https://moz.com/learn/seo/alt-text',
  name: 'alt',
  type: 'string',
  options: {
    isHighlighted: true,
  },
};

export const seoImage: ImageField = {
  type: 'image',
  title: 'Seo Image',
  name: 'seoImage',
  fields: [seoAltTextField],
  options: {
    hotspot: true,
  },
};
