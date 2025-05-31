export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  brand: string;
  image: string;
  colors: ProductColor[];
  storage?: ProductStorage[];
  description?: string;
  features?: string[];
}

export interface ProductColor {
  name: string;
  value: string;
}

export interface ProductStorage {
  size: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  storage?: string;
}
