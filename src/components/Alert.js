// Alert.js
import React, { useState } from 'react';

const Alert = ({ type, message="Error Loading Message", onClose }) => {
  // Define CSS classes for different alert types
  const [alert, setAlert] = useState(true);
  const alertClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  let alertClass = alertClasses[type] || 'bg-gray-100 text-black';

  return (
    alert && <div className={`${alertClass} p-5 relative flex`}>
      <span className='flex justify-center items-center' >{message}</span>
      <span className='flex justify-center items-center text-xl rounded-full w-8 h-8 p-1' onClick={onClose}>&times;</span>
    </div>
  );
};

export default Alert;