'use client';
import React from 'react';

interface TabItemProps {
    title: string;
    index: number;
    isActive: boolean;
    onClick: (index: number) => void;
}

const TabItem: React.FC<TabItemProps> = ({ title, index, isActive, onClick }) => {
    const handleClick = () => {
        onClick(index);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out ${isActive ? 'bg-accent text-whiteFont' : 'text-darkgrey'} font-montserrat font-medium text-[16px] leading-[40px] underline-offset-4 decoration-transparent px-2 py-1 mr-2 text-center`}
            style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
        >
            {title}
        </div>
    );
};

interface TabMenuProps {
    tabItems: string[]; // Добавляем пропс tabItems
    activeIndex: number | null;
    onTabClick: (index: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabItems, activeIndex, onTabClick }) => {
    return (
        <div className="inline-flex mb-10"> 
            {tabItems.map((title, index) => (
                <TabItem
                    key={index}
                    title={title}
                    index={index}
                    isActive={activeIndex === index}
                    onClick={onTabClick}
                />
            ))}
        </div>
    );
};

export default TabMenu;
