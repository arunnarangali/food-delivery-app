import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { foodItems } from "../data/mockData";
import FoodCard from "../components/FoodCard";
import { useCart } from "../hooks/useCart";
import Button from "../components/ui/Button";
import NoResults from "../components/ui/NoResults";
import { useAuth } from "../hooks/useAuth";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [filteredItems, setFilteredItems] = useState(foodItems);
  const { addToCart } = useCart();
   const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  

  const categories = ["All", "Pizza", "Burgers", "Salads", "Asian", "Desserts"];

  useEffect(() => {
    let items = [...foodItems];
    const searchQuery = searchParams.get("search");

    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (sortBy === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price-low") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      items.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(items);
  }, [selectedCategory, sortBy, searchParams]);

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
          Our Menu
        </h1>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "primary" : "secondary"
                  }
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-700" />
              <label className="text-sm sm:text-base text-gray-700 font-semibold whitespace-nowrap">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 min-[481px]:grid-cols-2 min-[769px]:grid-cols-3 min-[1201px]:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <NoResults 
            icon={MagnifyingGlassIcon}
            message="No items found"
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
