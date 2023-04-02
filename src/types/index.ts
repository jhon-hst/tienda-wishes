export type MediaType = {
  type: string;
  key: number;
  url: string;
  localImage?: boolean;
  youtube?: boolean;
};

export type VariationType = {
  title: string;
  icon: {
    type: string;
    key: number;
    color?: string;
  };
};

export type ProductType = {
  title: string;
  description: string;
  media: Array<MediaType>;
  variations?: Array<VariationType>;
};
