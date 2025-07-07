import React from 'react';

const Input = ({ type = 'text', placeholder = '', className = '', ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
