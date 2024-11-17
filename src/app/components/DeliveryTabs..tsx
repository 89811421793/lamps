'use client';
import React, { useState } from 'react';

interface DeliveryTabsProps {
  tabs: string[];
}

const DeliveryTabs: React.FC<DeliveryTabsProps> = ({ tabs }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach((content, idx) => {
      content.classList.toggle('hidden', idx !== index);
    });
  };

  return (
    <ul className="mb-4 mt-6 list-none p-0 flex">
      {tabs.map((tab, index) => (
        <li
          key={tab}
          onClick={() => handleTabClick(index)}
          className={`cursor-pointer py-2 px-4 rounded-[3px] inline-block leading-[18px] ${
            selectedTabIndex === index
              ? "text-[var(--whiteFont)] bg-[var(--accent)] font-semibold"
              : "text-[var(--darkgrey)] font-medium"
          }`}
          style={{
            fontSize: "14px",
            marginRight: index < tabs.length - 1 ? "10px" : "0",
            marginBottom: "10px",
            fontWeight: selectedTabIndex === index ? 600 : 500,
          }}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default DeliveryTabs;
