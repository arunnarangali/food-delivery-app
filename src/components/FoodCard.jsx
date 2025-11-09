import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-[400px] sm:h-[420px] flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 sm:h-48 object-cover rounded-t-lg shrink-0"
      />
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
          {item.description}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
          {item.restaurant}
        </p>

        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0 mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-orange-500">
            ${item.price}
          </span>
          <Button
            onClick={() => onAddToCart(item)}
            icon={ShoppingCartIcon}
            size="sm"
            className="w-full xs:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
