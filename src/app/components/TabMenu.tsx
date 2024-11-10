// TabMenu.tsx
'use client'
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
            className={`cursor-pointer transition-transform duration-500 ease-in-out ${isActive ? 'bg-accent text-whiteFont' : 'text-darkgrey'} font-montserrat font-medium text-[16px] leading-[40px] text-left underline-offset-4 decoration-transparent`}
            style={{ marginRight: index === 3 ? '0' : '42px', padding: '10px 35px', transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
        >
            {title}
        </div>
    );
};

interface TabMenuProps {
    tabItems: string[];
    descriptions: string[];
    activeIndex: number | null;
    onTabClick: (index: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabItems, descriptions, activeIndex, onTabClick }) => {
    return (
        <div className="flex">
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
