'use client'
import React, { useState } from "react";

type Tab = {
  id: number;
  label: string;
}

interface ProdinfoTabsProps {
  tabs: Tab[];
  content: React.ReactNode[];
}

const ProdinfoTabs: React.FC<ProdinfoTabsProps> = ({ tabs, content }) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].id);

  const handleTabChange = (tabId: number) => {
    setSelectedTab(tabId);
  };

  return (
    <div>
      <ul className="flex mb-[1px] list-none p-0">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`mr-[60px] py-2 cursor-pointer text-[var(--darkgrey)] font-medium ${selectedTab === tab.id ? "bg-[var(--accent)] text-[var(--whiteFont)] py-2 px-4" : ""}`}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      <hr className="border-t border-[#EDEDED] mb-[20px]" />

      <div className="flex flex-col mb-[50px]">
        {content[selectedTab - 1]}
      </div>
    </div>
  );
};

export default ProdinfoTabs;
