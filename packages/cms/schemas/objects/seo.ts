import slugify from 'slugify';

import { ObjectType } from '../schemaTypes';

export const seo: ObjectType = {
  name: 'seo',
  type: 'object',
  title: 'Seo',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Max suggested length: 60',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description:
        'If you need to edit it after publication, please notify the tech team for redirects',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          slugify(input, {
            lower: true,
            strict: true,
          }),
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Max suggested length: 160',
      type: 'text',
      rows: 2,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'noindex',
      title: 'Prevent this page from appearing in Search engines',
      type: 'boolean',
    },
    {
      name: 'ldJson',
      title: 'ld+json scripts',
      type: 'array',
      of: [
        {
          type: 'wrappedText',
          name: 'wrappedText',
        },
      ],
    },
  ],
};
