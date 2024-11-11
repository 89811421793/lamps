'use client'; // Директива для клиентского компонента
import React, { useState } from "react";

interface TabMenuProps {
  tabItems: string[];
  descriptions: string[];
}

const TabMenu: React.FC<TabMenuProps> = ({ tabItems, descriptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="inline-flex mb-10">
        {tabItems.map((title, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`flex items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out ${activeIndex === index ? 'bg-accent text-whiteFont' : 'text-darkgrey'} font-montserrat font-medium text-[16px] leading-[40px] underline-offset-4 decoration-transparent px-2 py-1 mr-2 text-center`}
            style={{ transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)' }}
          >
            {title}
          </div>
        ))}
      </div>
      <p className="mt-[1px] mb-[60px] border-t border-[#EDEDED] pt-4 text-darkgrey font-montserrat transition-opacity duration-700 ease-in-out opacity-100">
        {descriptions[activeIndex]} {/* Используем активный индекс для отображения описания */}
      </p>
    </div>
  );
};

export default TabMenu;
