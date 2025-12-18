import React from 'react';

const InfoRow = ({ label, value, icon }) => {
  return (
    <div className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
      {icon && (
        <div className="mr-3 text-gray-500">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <span className="text-sm text-gray-600 block">{label}</span>
        <span className="text-gray-900 font-medium">{value || 'Not provided'}</span>
      </div>
    </div>
  );
};

export default InfoRow;