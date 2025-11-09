import { useState } from 'react';
import { UserIcon, ChevronDownIcon, EnvelopeIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Popover from '../ui/Popover';
import Button from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

const UserMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition cursor-pointer"
        >
          <UserIcon className="h-5 w-5" />
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      }
    >
      {isAuthenticated && <div className="px-4 py-3 border-b border-gray-200">
        <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
          <EnvelopeIcon className="h-3 w-3" />
          {user.email}
        </p>
      </div>}
      <div className="p-2">
        <Button
          onClick={() => {
            onLogout();
            setIsOpen(false);
          }}
          variant="ghost-danger"
          icon={ArrowRightEndOnRectangleIcon}
          className="w-full justify-start px-3 py-2"
        >
          Logout
        </Button>
      </div>
    </Popover>
  );
};

export default UserMenu;
