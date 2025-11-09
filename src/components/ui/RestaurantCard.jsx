import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';
import Card from './Card';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card hover className="p-4 sm:p-5 md:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-2.5">
        {restaurant.name}
      </h3>
      <div className="flex items-center justify-between text-sm sm:text-base text-gray-600">
        <span className="flex items-center gap-1 sm:gap-1.5">
          <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{restaurant.rating}</span>
        </span>
        <span className="flex items-center gap-1 sm:gap-1.5">
          <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>{restaurant.deliveryTime}</span>
        </span>
      </div>
    </Card>
  );
};

export default RestaurantCard;
