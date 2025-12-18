import React from 'react';

const ProfileCard = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default ProfileCard;