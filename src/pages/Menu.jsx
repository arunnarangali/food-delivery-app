import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { foodItems } from '../data/mockData';
import FoodCard from '../components/FoodCard';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [filteredItems, setFilteredItems] = useState(foodItems);
  const { addToCart } = useCart();

  const categories = ['All', 'Pizza', 'Burgers', 'Salads', 'Asian', 'Desserts'];

  useEffect(() => {
    let items = [...foodItems];
    const searchQuery = searchParams.get('search');

    // Filter by search query
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Sort items
    if (sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(items);
  }, [selectedCategory, sortBy, searchParams]);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-700" />
              <label className="text-gray-700 font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 min-[481px]:grid-cols-2 min-[769px]:grid-cols-3 min-[1201px]:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600">No items found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
