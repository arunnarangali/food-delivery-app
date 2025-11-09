import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  ShoppingCartIcon, 
  UserIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            FoodExpress
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link to="/menu" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition">
              <ShoppingBagIcon className="h-5 w-5" />
              Menu
            </Link>
            <Link to="/cart" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition relative">
              <ShoppingCartIcon className="h-5 w-5" />
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-2 text-gray-700">
                  <UserIcon className="h-5 w-5" />
                  Hi, {user.name}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                <UserIcon className="h-5 w-5" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart {getCartCount() > 0 && `(${getCartCount()})`}
            </Link>
            {isAuthenticated ? (
              <>
                <span className="block py-2 text-gray-700">Hi, {user.name}</span>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block py-2 text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
