import React from 'react';
import { Order } from '../types';

export default function Orders() {
  // Retrieve orders from localStorage
  const orders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h2>
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No orders found</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order #{order.id}</h3>
                  <p className="text-gray-600">Quantity: {order.quantity}</p>
                  <p className="text-gray-600">Total Price: ₹{order.totalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Delivery Details:</p>
                  <p className="font-medium">{order.customerDetails.name}</p>
                  <p className="text-sm text-gray-600">{order.customerDetails.phone}</p>
                  <p className="text-sm text-gray-600">{order.customerDetails.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}