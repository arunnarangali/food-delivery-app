import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { MagnifyingGlassIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid';
import { restaurants, foodItems } from '../data/mockData';
import FoodCard from '../components/FoodCard';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const featuredItems = foodItems.slice(0, 4);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food Delivered to Your Door
          </h1>
          <p className="text-xl mb-8">Order from the best restaurants in town</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for food or restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <Link
                to={`/menu${searchQuery ? `?search=${searchQuery}` : ''}`}
                className="flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Restaurants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
              <div className="flex items-center justify-between text-gray-600">
                <span className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  {restaurant.rating}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-5 w-5" />
                  {restaurant.deliveryTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Food Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/menu"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
