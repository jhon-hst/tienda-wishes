export type MediaType = {
  type: string;
  key: number;
  url: string;
  localImage?: boolean;
  youtube?: boolean;
  main?: boolean;
};

export type VariationType = {
  title: string;
  icon: {
    type: string;
    key: number;
    color?: string;
  };
  stock: number;
  sku: string;
};

export type ProductType = {
  category: number;
  title: string;
  description: string;
  media: Array<MediaType>;
  variations?: Array<VariationType>;
  priceCost: number;
  salePrice: number;
  stock: number | null;
  sku: string;
};
