export interface Product {
  id?: number;
  name?: string;
  price?: number;
  bgColor?: string;
  comments?: Comment[];
}

export interface Comment {
  id?: number;
  body?: string;
  productId?: number;
}
