const NoResults = ({
  icon: Icon,
  message = "No items found",
  className = "",
}) => {
  return (
    <div className={`text-center py-16 ${className}`}>
      {Icon && <Icon className="h-16 w-16 text-gray-300 mx-auto mb-4" />}
      <p className="text-xl sm:text-2xl text-gray-600">{message}</p>
    </div>
  );
};

export default NoResults;
