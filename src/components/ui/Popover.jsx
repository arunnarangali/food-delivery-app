import { useEffect, useRef } from "react";

const Popover = ({
  isOpen,
  onClose,
  trigger,
  children,
  position = "bottom-right",
}) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const positions = {
    "bottom-right": "top-full right-0 mt-2",
    "bottom-left": "top-full left-0 mt-2",
    "top-right": "bottom-full right-0 mb-2",
    "top-left": "bottom-full left-0 mb-2",
  };

  return (
    <div className="relative" ref={popoverRef}>
      {trigger}
      {isOpen && (
        <div className={`absolute ${positions[position]} z-50 min-w-[200px]`}>
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
