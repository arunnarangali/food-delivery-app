import Card from './Card';

const OrderSummary = ({ 
  cartItems = [], 
  subtotal, 
  deliveryFee, 
  total,
  showItems = false,
  children 
}) => {
  return (
    <Card className="p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      
      {showItems && cartItems.length > 0 && (
        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-600">
                {item.name} x {item.quantity}
              </span>
              <span className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}
      
      <div className={`space-y-3 ${showItems && cartItems.length > 0 ? 'border-t pt-4' : 'mb-6'}`}>
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
      
      {children}
    </Card>
  );
};

export default OrderSummary;
