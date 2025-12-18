import React from 'react';

const ProfileAvatar = ({ name, avatar, size = 'large' }) => {
  const sizeClasses = {
    small: 'w-12 h-12 text-sm',
    medium: 'w-16 h-16 text-lg',
    large: 'w-24 h-24 text-2xl'
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold`}>
      {avatar ? (
        <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};

export default ProfileAvatar;