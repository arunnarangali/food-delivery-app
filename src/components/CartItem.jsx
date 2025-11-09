import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDecrease(item.id)}
          className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center transition"
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="font-semibold w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
        >
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${subtotal}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm transition mt-1"
        >
          <TrashIcon className="h-4 w-4" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
