import { IconType } from "react-icons";

export type PreviewReturn = {
  title: string;
  subtitle?: string;
  media?: string;
};

export type RuleType = {
  required: () => RuleType;
  min: (min: number) => RuleType;
  max: (max: number) => RuleType;
  length: (exactLength: number) => RuleType;
  greaterThan: (gt: number) => RuleType;
  uri: (options: { scheme: string[] }) => RuleType;
};

type Validation = (rule: RuleType) => RuleType;

export type BlockForPreview = {
  _type: string;
  children: { _type: string; text: string }[];
};

export type PreviewComponentsProps = {
  value: {
    blocks?: BlockForPreview[];
  };
};

type PreviewWithBlocks = {
  select?: { [key: string]: string };
  prepare?: (selection: {
    blocks?: BlockForPreview[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) => PreviewReturn;
  component?: (props: PreviewComponentsProps) => React.ReactElement;
};

export interface BaseField {
  name: string;
  title: string;
  description?: string;
  validation?: Validation;
  type: string;
  preview?: PreviewWithBlocks;
  blockEditor?: { icon?: IconType };
}

export interface StringField extends BaseField {
  type: "string";
  options: {
    list: { value: string; title: string }[];
  };
}

export interface ArrayField extends BaseField {
  type: "array";
  of: { type: string; name: string }[];
}

export interface ReferenceField extends BaseField {
  type: "reference";
  to: { type: string }[];
}

export interface SlugField extends BaseField {
  type: "slug";
  options: {
    source: string;
    maxLength: number;
    slugify: (input: string) => string;
  };
}

export interface TextField extends BaseField {
  type: "text";
  rows: number;
}

export interface StringType extends BaseField {
  type: "string";
  options: {
    isHighlighted: boolean;
  };
}

export interface ImageField extends BaseField {
  type: "image";
  fields?: Field[];
  options: {
    hotspot: boolean;
  };
}

export interface FileField extends BaseField {
  type: "file";
  fields?: Field[];
}

export type Field =
  | ArrayField
  | StringField
  | ReferenceField
  | SlugField
  | TextField
  | ImageField
  | FileField
  | BaseField;

export type ObjectType = {
  type: "object";
  title?: string;
  name: string;
  fields: Field[];
  validation?: Validation;
  preview?: PreviewWithBlocks; // | Preview
  // fieldsets?: Fieldset[];
  description?: string;
  options?: { collapsible?: boolean; collapsed?: boolean };
  blockEditor?: { icon?: IconType };
};
