import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { restaurants, foodItems } from "../data/mockData";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/ui/SearchBar";
import RestaurantCard from "../components/ui/RestaurantCard";
import Button from "../components/ui/Button";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const featuredItems = foodItems.slice(0, 4);

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Responsive */}
      <div className="bg-linear-to-r from-orange-500 to-red-500 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Delicious Food Delivered to Your Door
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
            Order from the best restaurants in town
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto px-2 sm:px-0">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
        </div>
      </div>

      {/* Top Restaurants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Top Restaurants
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>

      {/* Featured Food Items */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Featured Items
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {featuredItems.map((item) => (
              <div 
                key={item.id} 
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <FoodCard item={item} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/menu">
              <Button size="lg">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
