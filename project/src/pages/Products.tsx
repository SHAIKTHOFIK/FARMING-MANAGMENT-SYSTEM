import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { products } from '../data/products';
import toast from 'react-hot-toast';

export default function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'vegetables' | 'fruits' | 'dairy' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1
  });

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!user.email) {
      toast.error('Please login to place an order');
      navigate('/login');
      return;
    }

    const order = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.email,
      productId: selectedProduct!.id,
      quantity: orderDetails.quantity,
      totalPrice: selectedProduct!.price * orderDetails.quantity,
      customerDetails: {
        name: orderDetails.name,
        phone: orderDetails.phone,
        address: orderDetails.address
      }
    };

    // Get existing orders or initialize empty array
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    toast.success('Order placed successfully!');
    setShowOrderForm(false);
    setSelectedProduct(null);
    
    // Reset form
    setOrderDetails({
      name: '',
      phone: '',
      address: '',
      quantity: 1
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCategory('vegetables')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'vegetables' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => setSelectedCategory('fruits')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'fruits' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setSelectedCategory('dairy')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'dairy' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Dairy Products
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">₹{product.price}</p>
              <button
                onClick={() => {
                  const user = JSON.parse(localStorage.getItem('user') || '{}');
                  if (!user.email) {
                    toast.error('Please login to place an order');
                    navigate('/login');
                    return;
                  }
                  setSelectedProduct(product);
                  setShowOrderForm(true);
                }}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showOrderForm && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Order {selectedProduct.name}</h3>
            <form onSubmit={handleOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  value={orderDetails.name}
                  onChange={(e) => setOrderDetails({...orderDetails, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  value={orderDetails.phone}
                  onChange={(e) => setOrderDetails({...orderDetails, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  value={orderDetails.address}
                  onChange={(e) => setOrderDetails({...orderDetails, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  min="1"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  value={orderDetails.quantity}
                  onChange={(e) => setOrderDetails({...orderDetails, quantity: parseInt(e.target.value)})}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                  Place Order
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowOrderForm(false);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}