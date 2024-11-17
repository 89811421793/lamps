import React from 'react';

interface DeliveryTabsProps {
  tabs: string[];
  selectedTab: string;
  onTabClick: (tab: string) => void;
}

const DeliveryTabs: React.FC<DeliveryTabsProps> = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <ul className="mb-4 mt-6 list-none p-0 flex">
      {tabs.map((tab, index) => (
        <li
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`cursor-pointer py-2 px-4 rounded-[3px] inline-block leading-[18px] ${
            selectedTab === tab
              ? "text-[var(--whiteFont)] bg-[var(--accent)] font-semibold"
              : "text-[var(--darkgrey)] font-medium"
          }`}
          style={{
            fontSize: "14px",
            marginRight: index < tabs.length - 1 ? "10px" : "0",
            marginBottom: "10px",
            fontWeight: selectedTab === tab ? 600 : 500,
          }}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default DeliveryTabs;
