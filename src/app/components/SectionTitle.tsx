import React from 'react';
import { FC } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string; 
  className?: string; 
  showIndicator?: boolean; // Новый пропс для управления отображением псевдоэлемента
};

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, className, showIndicator = true }) => {
  return (
    <div className={`relative mb-8 ${className}`}>
      {showIndicator && (
        <div className="absolute left-0 w-[5px] h-[25px] bg-secondary translate-y-2" />
      )}
      <div className={`${showIndicator ? 'ml-[15px]' : 'ml-0'}`}>
        <h2 className="text-[30px] font-extrabold leading-[40px] text-darkgrey font-montserrat">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-lg text-darkgrey font-montserrat">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
