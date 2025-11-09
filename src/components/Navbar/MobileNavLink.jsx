import { Link, useLocation } from 'react-router-dom';

const MobileNavLink = ({ to, icon: Icon, label, badge, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 py-3 rounded-lg px-3 transition ${
        isActive
          ? 'text-orange-500 bg-orange-50 font-semibold'
          : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
      }`}
    >
      <div className="relative">
        <Icon className="h-5 w-5" />
        {badge > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
            {badge}
          </span>
        )}
      </div>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default MobileNavLink;
