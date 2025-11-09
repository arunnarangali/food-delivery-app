import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  UserIcon,
  MapPinIcon,
  PhoneIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import OrderSummary from "../components/ui/OrderSummary";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      paymentMethod: "credit-card",
    },
  });

  const subtotal = getCartTotal();
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const onSubmit = (data) => {
    if (!isAuthenticated) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      navigate("/menu");
      return;
    }

    setIsLoading(true);

    // Simulate order processing
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Order placed successfully! Thank you for your order.");
      clearCart();
      navigate("/");
    }, 1500);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Full Name *"
                  icon={UserIcon}
                  placeholder="John Doe"
                  error={errors.name?.message}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <MapPinIcon className="h-5 w-5" />
                    Delivery Address *
                  </label>
                  <textarea
                    {...register("address", {
                      required: "Address is required",
                      minLength: {
                        value: 10,
                        message: "Address must be at least 10 characters",
                      },
                    })}
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="123 Main St, Apt 4B, City, State, ZIP"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <Input
                  label="Phone Number *"
                  icon={PhoneIcon}
                  type="tel"
                  placeholder="1234567890"
                  error={errors.phone?.message}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                />

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <CreditCardIcon className="h-5 w-5" />
                    Payment Method *
                  </label>
                  <select
                    {...register("paymentMethod")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  icon={isLoading ? ArrowPathIcon : CheckCircleIcon}
                  className="w-full mt-6"
                >
                  {isLoading ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              total={total}
              showItems
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
