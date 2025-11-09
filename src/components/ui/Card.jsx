const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const hoverStyles = hover ? 'hover:shadow-xl' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${hoverStyles} transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
