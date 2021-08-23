import { FaPaperclip } from 'react-icons/fa';

import { FileField } from '../schemaTypes';

export const attachment: FileField = {
  name: 'attachment',
  type: 'file',
  title: 'Attachment',
  blockEditor: {
    icon: FaPaperclip,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
