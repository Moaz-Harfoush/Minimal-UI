export type ProductStatus = "sale" | "new" | null;

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  status: ProductStatus;
  colors: string[];
  numberOfColors: boolean;
}

export interface ProductCardProps {
  product: Product;
  index: number;
}
