import React from 'react';

interface ButtonProps {
  text: string; 
  paddingX?: string; // Опциональный пропс для боковых отступов
}

const Button: React.FC<ButtonProps> = ({ text, paddingX }) => {
  return (
    <button className={`bg-secondary text-darkgrey py-3 ${paddingX} w-fit`}>
      {text}
    </button>
  );
};

export default Button;