import { ObjectType } from '../schemaTypes';

export const postListing: ObjectType = {
  name: 'postListing',
  title: 'Automatic Post listing',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
