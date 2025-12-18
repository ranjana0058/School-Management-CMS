import React from 'react';

const SummaryCard = ({ title, value, subtitle, color = 'blue', icon }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    red: 'bg-red-100 text-red-600 border-red-200'
  };

  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium opacity-80">{title}</h4>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && (
            <p className="text-sm opacity-70 mt-1">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="text-3xl opacity-60">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;