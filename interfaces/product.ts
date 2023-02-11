export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<any>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IFilterItem {
  id: number;
  value: string;
  label: string | React.ReactNode;
}

export interface IFilter {
  title: string;
  group: IFilterItem[];
}
