import { Product } from '../types';

export const products: Product[] = [
  // Vegetables
  {
    id: 'v1',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 40,
    description: 'Locally grown, organic tomatoes rich in lycopene and vitamins.',
    image: 'https://images.unsplash.com/photo-1546470427-f5b0b6d1c9ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 100
  },
  {
    id: 'v2',
    name: 'Organic Potatoes',
    category: 'vegetables',
    price: 30,
    description: 'Farm-fresh potatoes perfect for cooking and roasting.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 150
  },
  {
    id: 'v3',
    name: 'Green Spinach',
    category: 'vegetables',
    price: 25,
    description: 'Fresh, nutrient-rich spinach leaves from organic farms.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 80
  },
  {
    id: 'v4',
    name: 'Fresh Carrots',
    category: 'vegetables',
    price: 35,
    description: 'Sweet and crunchy carrots rich in beta-carotene.',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 120
  },
  {
    id: 'v5',
    name: 'Green Cabbage',
    category: 'vegetables',
    price: 45,
    description: 'Fresh, crispy cabbage perfect for salads and cooking.',
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 90
  },

  // Fruits
  {
    id: 'f1',
    name: 'Sweet Mangoes',
    category: 'fruits',
    price: 80,
    description: 'Naturally ripened, sweet and juicy mangoes.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 100
  },
  {
    id: 'f2',
    name: 'Fresh Apples',
    category: 'fruits',
    price: 120,
    description: 'Crisp and sweet apples from Himalayan orchards.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 150
  },
  {
    id: 'f3',
    name: 'Organic Bananas',
    category: 'fruits',
    price: 60,
    description: 'Naturally ripened, chemical-free bananas.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 200
  },
  {
    id: 'f4',
    name: 'Sweet Oranges',
    category: 'fruits',
    price: 70,
    description: 'Juicy oranges rich in Vitamin C.',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 120
  },
  {
    id: 'f5',
    name: 'Fresh Pomegranate',
    category: 'fruits',
    price: 90,
    description: 'Sweet and tangy pomegranates full of antioxidants.',
    image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 80
  },

  // Dairy Products
  {
    id: 'd1',
    name: 'Fresh Milk',
    category: 'dairy',
    price: 50,
    description: 'Farm-fresh, pasteurized milk rich in calcium.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 100
  },
  {
    id: 'd2',
    name: 'Natural Yogurt',
    category: 'dairy',
    price: 40,
    description: 'Probiotic-rich natural yogurt.',
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 80
  },
  {
    id: 'd3',
    name: 'Butter',
    category: 'dairy',
    price: 45,
    description: 'Pure butter made from farm-fresh cream.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 60
  },
  {
    id: 'd4',
    name: 'Paneer',
    category: 'dairy',
    price: 120,
    description: 'Fresh, homemade cottage cheese.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 50
  },
  {
    id: 'd5',
    name: 'Ghee',
    category: 'dairy',
    price: 450,
    description: 'Pure cow ghee made using traditional methods.',
    image: 'https://images.unsplash.com/photo-1631452180775-8bc1def44001?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stock: 40
  }
];