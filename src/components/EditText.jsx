import { useState } from 'react';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  leftImage = null,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'w-full rounded-[10px] bg-white text-sm leading-[18px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-transparent';
  
  const paddingClasses = leftImage 
    ? 'pl-16 pr-3 py-6 sm:pl-16 sm:pr-4 sm:py-6' 
    : rightImage 
    ? 'pl-3 pr-16 py-6 sm:pl-4 sm:pr-16 sm:py-6' :'px-3 py-6 sm:px-4 sm:py-6';

  const inputClasses = `
    ${baseClasses}
    ${paddingClasses}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="relative w-full">
      {leftImage && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={leftImage.src} 
            alt="" 
            className={`w-[${leftImage.width}px] h-[${leftImage.height}px]`}
          />
        </div>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      
      {rightImage && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={rightImage.src} 
            alt="" 
            className={`w-[${rightImage.width}px] h-[${rightImage.height}px]`}
          />
        </div>
      )}
    </div>
  );
};



export default EditText;