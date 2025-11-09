import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ShoppingCartIcon, ShoppingBagIcon, TrashIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCartIcon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious food to get started!</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Your Cart</h1>
          <button
            onClick={() => {
              clearCart();
              toast.success('Cart cleared successfully');
            }}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold transition"
          >
            <TrashIcon className="h-5 w-5" />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
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
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                <CreditCardIcon className="h-5 w-5" />
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
