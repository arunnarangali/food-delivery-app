import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <p className="text-gray-500 text-sm mb-3">{item.restaurant}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-500">${item.price}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
