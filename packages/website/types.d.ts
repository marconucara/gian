declare module '@sanity/block-content-to-react';
declare module '@sanity/block-content-to-html';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
