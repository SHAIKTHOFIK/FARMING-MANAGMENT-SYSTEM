import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Tractor size={24} />
            <span className="font-bold text-xl">FarmConnect</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/products" className="hover:text-green-200">Products</Link>
            <Link to="/technologies" className="hover:text-green-200">Farming Technologies</Link>
            <Link to="/about" className="hover:text-green-200">About Farming</Link>
            {user.email ? (
              <>
                <Link to="/orders" className="hover:text-green-200 flex items-center">
                  <ShoppingBag size={18} className="mr-1" />
                  Orders
                </Link>
                <button 
                  onClick={() => {
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                  }}
                  className="hover:text-green-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-green-200">Login</Link>
                <Link to="/signup" className="hover:text-green-200">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}