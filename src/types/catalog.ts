export type Product = {
  id: string;
  name: string;
  category: string;
  colors?: string[];
  department?: string;
  ratingValue?: number;
  totalRating?: number;
  salePrice?: number;
  price: number;
  currency: string;
  image: number;
  discount?: string;
  description?: string;
  sizes?: string[];
};

export type ProductCategory = {
  name: string;
  image: number | null;
};

export type ProductDepartment = {
  name: string;
  subcategories: ProductCategory[];
};
