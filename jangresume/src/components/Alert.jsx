import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Alert = () => {
  const [alert, setAlert] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const alertData = sessionStorage.getItem('app-alert');

    if (alertData) {
      const parsedData = JSON.parse(alertData);
      setAlert(parsedData);
      sessionStorage.removeItem('app-alert');
    }
  }, [location]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null); 
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  if (!alert) {
    return null;
  }

  const alertStyles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  };

  return (
    <div 
      className={`fixed top-5 right-5 z-9999 max-w-sm rounded-lg border px-4 py-3 shadow-lg ${alertStyles[alert.type] || alertStyles['success']}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="mr-3">
          <CheckIcon />
        </div>
        <div>
          <p className="font-bold">{alert.message}</p>
        </div>
        <button 
          onClick={() => setAlert(null)}
          className="ml-4 -mr-1 -mt-1 p-1 rounded-md hover:bg-green-200"
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Alert;