import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Images/logo.png";
import {
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import Button from "../ui/Button";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getCartCount } = useCart();

  const navItems = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/menu", icon: ShoppingBagIcon, label: "Menu" },
    {
      to: "/cart",
      icon: ShoppingCartIcon,
      label: "Cart",
      badge: getCartCount(),
    },
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-orange-500"
          >
            <img
              src={logo}
              alt="FoodExpress Logo"
              className="w-8 h-8 object-contain"
            />
            <span>FoodExpress</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
              />
            ))}
            {isAuthenticated ? (
              <UserMenu user={user} onLogout={logout} />
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
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            icon={isMenuOpen ? XMarkIcon : Bars3Icon}
            iconOnly
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navItems={navItems}
          user={user}
          isAuthenticated={isAuthenticated}
          onLogout={logout}
          onLoginClick={handleLoginClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
