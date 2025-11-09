import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0"
      />
      <div className="flex-1 w-full sm:w-auto min-w-0">
        <h3 className="text-base sm:text-lg font-semibold truncate">
          {item.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 order-last sm:order-0">
        <Button
          onClick={() => onDecrease(item.id)}
          variant="secondary"
          size="sm"
          icon={MinusIcon}
          iconOnly
          aria-label="Decrease quantity"
        />
        <span className="font-semibold w-8 sm:w-10 text-center text-sm sm:text-base">
          {item.quantity}
        </span>
        <Button
          onClick={() => onIncrease(item.id)}
          variant="primary"
          size="sm"
          icon={PlusIcon}
          iconOnly
          aria-label="Increase quantity"
        />
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto gap-2">
        <p className="text-base sm:text-lg font-bold text-orange-500 sm:text-gray-900">
          ${subtotal}
        </p>
        <Button
          onClick={() => onRemove(item.id)}
          variant="ghost"
          size="sm"
          icon={TrashIcon}
          className="px-2 sm:px-0"
          aria-label="Remove item from cart"
        >
          <span className="hidden sm:inline">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
