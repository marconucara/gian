import { FaExternalLinkAlt } from 'react-icons/fa';

import { PreviewReturn } from '../schemaTypes';

export default {
  name: 'externalLink',
  title: 'External Link',
  type: 'object',
  blockEditor: {
    icon: FaExternalLinkAlt,
  },
  fields: [
    { type: 'string', name: 'title' },
    { type: 'string', name: 'url' },
    { type: 'boolean', name: 'targetBlank', title: 'Target Blank' },
    { type: 'boolean', name: 'asButton', title: 'As Button' },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }: { title: string; url: string }): PreviewReturn {
      return {
        title: title,
        subtitle: url,
      };
    },
  },
};
