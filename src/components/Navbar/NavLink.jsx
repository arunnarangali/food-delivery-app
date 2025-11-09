import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, icon: Icon, label, badge, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 transition relative ${
        isActive
          ? "text-orange-500 font-semibold"
          : "text-gray-700 hover:text-orange-500"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {badge > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default NavLink;
