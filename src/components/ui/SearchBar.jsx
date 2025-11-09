import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  placeholder = "Search for food or restaurants...",
  searchLink = "/menu"
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex gap-2 sm:gap-3">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 text-sm sm:text-base rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <Link
          to={`${searchLink}${searchQuery ? `?search=${searchQuery}` : ''}`}
          className="flex items-center justify-center gap-1 sm:gap-2 bg-white text-orange-500 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition min-w-[44px] sm:min-w-fit"
        >
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">Search</span>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
