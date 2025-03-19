import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = 'bg-cyan-500 text hover:bg-cyan-600 text-white',
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded cursor-pointer ${className} `}
    >
      {children}
    </button>
  );
};
