import { Link } from "react-router-dom";

const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionText,
  actionLink,
  actionIcon: ActionIcon,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {Icon && <Icon className="h-24 w-24 text-gray-300 mx-auto mb-4" />}
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        {actionText && actionLink && (
          <Link
            to={actionLink}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {ActionIcon && <ActionIcon className="h-5 w-5" />}
            {actionText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
