import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ShoppingCartIcon,
  ShoppingBagIcon,
  TrashIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";
import EmptyState from "../components/ui/EmptyState";
import OrderSummary from "../components/ui/OrderSummary";
import Button from "../components/ui/Button";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const subtotal = getCartTotal();
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <EmptyState
        icon={ShoppingCartIcon}
        title="Your cart is empty"
        description="Add some delicious food to get started!"
        actionText="Browse Menu"
        actionLink="/menu"
        actionIcon={ShoppingBagIcon}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex  justify-between items-start gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Your Cart</h1>
          <Button
            onClick={() => {
              clearCart();
              toast.success("Cart cleared successfully");
            }}
            variant="danger"
            icon={TrashIcon}
          >
            Clear Cart
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => addToCart(item)}
                onDecrease={removeFromCart}
                onRemove={deleteFromCart}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              total={total}
            >
              <Link to="/checkout" className="block w-full">
                <Button icon={CreditCardIcon} className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </OrderSummary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
