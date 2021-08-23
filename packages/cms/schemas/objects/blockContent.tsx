import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';

import { BlockForPreview } from '../schemaTypes';
import { attachment } from './attachment';
import externalLink from './externalLink';
import { internalLink } from './internalLink';
import { seoAltTextField } from './seoImage';

const AlignCenterRender: React.FC = ({ children }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);
export const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'P styled as H2', value: 'ph2' },
        { title: 'P styled as H3', value: 'ph3' },
        { title: 'P styled as H4', value: 'ph4' },
        { title: 'P styled as H5', value: 'ph5' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Centered',
            value: 'centered',
            blockEditor: {
              icon: FaAlignCenter,
              render: AlignCenterRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [internalLink, externalLink, attachment],
      },
    },
    {
      type: 'image',
      title: 'Image',
      name: 'seoImage',
      fields: [
        seoAltTextField,
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};

export const getEditorialBlockText = (blocks?: BlockForPreview[]): string => {
  const blockAll = (blocks || []).find(block => block._type === 'block');
  const text = blockAll
    ? blockAll.children
        .filter(child => child._type === 'span')
        .map(span => span.text)
        .join('')
    : '';
  return text;
};
