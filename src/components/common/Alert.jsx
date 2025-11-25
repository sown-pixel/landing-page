import React, { useState, useEffect } from 'react';

function Alert({ type = 'success', message, onClose, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  const alertClasses = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  };

  return (
    <div className={`custom-alert ${alertClasses[type]}`}>
      <div className="alert-content">
        <div className="alert-icon">
          {type === 'success' && <i className="fas fa-check-circle" />}
          {type === 'error' && <i className="fas fa-exclamation-circle" />}
          {type === 'warning' && <i className="fas fa-exclamation-triangle" />}
          {type === 'info' && <i className="fas fa-info-circle" />}
        </div>
        <div className="alert-text">
          <p>{message}</p>
        </div>
        <button 
          className="alert-close" 
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}

export default Alert;