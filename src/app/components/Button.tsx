import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string; 
  paddingX?: string; // Опциональный пропс для боковых отступов
  href?: string; // Пропс для ссылки
  isLink?: boolean; // Пропс, указывающий, является ли элемент ссылкой
}

const Button: React.FC<ButtonProps> = ({ text, paddingX, href, isLink = false }) => {
  const buttonClass = `bg-secondary text-darkgrey py-3 ${paddingX} w-fit`;

  if (isLink && href) {
    // Используем Link напрямую без тега <a>
    return (
      <Link href={href} className={buttonClass}>
        {text}
      </Link>
    );
  }

  // В противном случае, рендерим кнопку
  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
