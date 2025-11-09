const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  iconOnly = false,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = iconOnly 
    ? 'inline-flex items-center justify-center rounded-full transition shrink-0'
    : 'inline-flex items-center justify-center gap-1.5 sm:gap-2 font-semibold rounded-lg transition';
  
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50',
    ghost: 'bg-transparent text-red-500 hover:text-red-700',
    'ghost-danger': 'bg-transparent text-red-500 hover:bg-red-50',
  };
  
  const sizes = iconOnly ? {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-13 sm:h-13',
  } : {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {!iconOnly && children}
    </button>
  );
};

export default Button;
