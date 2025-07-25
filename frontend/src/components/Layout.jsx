import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const { token, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      {token && (
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <nav className="container flex items-center justify-between p-4 mx-auto">
            <Link to="/" className="text-xl font-bold text-indigo-600 hover:text-indigo-700">
              InventorySys
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </nav>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
