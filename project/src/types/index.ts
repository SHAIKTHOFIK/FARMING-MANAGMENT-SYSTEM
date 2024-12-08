export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'customer';
  phone: string;
  address: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'vegetables' | 'fruits' | 'dairy';
  price: number;
  description: string;
  image: string;
  stock: number;
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  customerDetails: {
    name: string;
    phone: string;
    address: string;
  };
}