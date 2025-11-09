import { UserIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import MobileNavLink from './MobileNavLink';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose, navItems, user, isAuthenticated, onLogout, onLoginClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white shadow-lg z-40 flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <MobileNavLink
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            badge={item.badge}
            onClick={onClose}
          />
        ))}
      </div>

      {/* Bottom Auth Section */}
      <div className="border-t bg-gray-50 px-4 py-4 space-y-1">
        {isAuthenticated ? (
          <>
            <div className="flex items-center gap-3 py-3 px-3 text-gray-700">
              <UserIcon className="h-5 w-5" />
              <span className="font-medium">Hi, {user.name}</span>
            </div>
            <Button
              onClick={() => {
                onLogout();
                onClose();
              }}
              variant="ghost-danger"
              icon={ArrowRightEndOnRectangleIcon}
              className="w-full justify-start px-3 py-3 gap-3"
            >
              <span className="font-medium">Logout</span>
            </Button>
          </>
        ) : (
          <button
            onClick={() => {
              onLoginClick();
              onClose();
            }}
            className="flex items-center gap-3 py-3 text-orange-500 hover:bg-orange-50 rounded-lg px-3 transition w-full"
          >
            <UserIcon className="h-5 w-5" />
            <span className="font-medium">Login</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
