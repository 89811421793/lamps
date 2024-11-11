'use client'; // Директива для клиентского компонента
import React, { useState } from 'react';

interface SolutionsProps {
  serviceTabs: string[];
  serviceImages: string[];
}

const Solutions: React.FC<SolutionsProps> = ({ serviceTabs, serviceImages }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);

  const handleServiceClick = (index: number) => {
    setActiveServiceIndex(index);
  };

  return (
    <div className="flex mb-[100px]">
      <div className="flex-1">
        <h2 className="font-montserrat text-24 font-bold text-[var(--darkgrey)] mb-[25px]">
          Наши решения
        </h2>
        <ul className="flex flex-col">
          {serviceTabs.map((tab, index) => (
            <li key={index} className="relative">
              <div
                onClick={() => handleServiceClick(index)}
                className={`cursor-pointer pt-4 pr-10 pb-4 pl-5 ${
                  activeServiceIndex === index
                    ? "bg-[var(--accent)] text-[var(--whiteFont)]"
                    : "text-black"
                } inline-flex`}
                style={{ width: "fit-content" }}
              >
                {tab}
              </div>
              {index < serviceTabs.length - 1 && (
                <div className="border-t border-[#EFEFEF] max-w-[90%] mt-2" style={{ height: '1px' }} />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-2 flex justify-center items-center">
        {activeServiceIndex !== -1 && (
          <img
            src={serviceImages[activeServiceIndex]}
            alt={serviceTabs[activeServiceIndex]}
            className="max-w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default Solutions;