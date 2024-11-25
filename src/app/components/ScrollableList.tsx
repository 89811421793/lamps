'use client'; 
import React, { useState, useRef, useCallback, createContext, useContext } from 'react';

// Создаем контекст для управления прокруткой
const ScrollContext = createContext<{ scrollY: number; setScrollY: (value: number) => void } | undefined>(undefined);

const ScrollableList = () => {
  // Используем контекст и проверяем на undefined
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("ScrollContext must be used within a ScrollProvider");
  }
  const { scrollY, setScrollY } = context;
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollY(containerRef.current.scrollTop);
    }
  }, [setScrollY]);
  
  const listItems = [
    { title: "Последние версии каталогов" },
    { title: "Технические спецификации" },
    { title: "IES-файлы и прочая документация" },
    { title: "Последние версии каталогов" },
    { title: "Технические спецификации" },
    { title: "IES-файлы и прочая документация" },
    { title: "Последние версии каталогов" },
    { title: "Технические спецификации" },
    { title: "IES-файлы и прочая документация" },
  ];
  
  const itemHeight = 60; 
  const visibleItems = 3; 
  const fadeDistance = 51; 
  
  return (
    <div className="flex">
      <div className="relative flex flex-col items-center mr-[48px]">
        <h2 className="text-[#505050] font-bold text-[20px] z-10 mt-[28px] pl-[17px] font-montserrat">Файлы для скачивания</h2>
        <img src='/docs.svg' alt='Документы' className="absolute -top-7 -left-6 z-0" /> 
      </div>
      
      <div
        ref={containerRef}
        className="scrollable-container rounded-lg overflow-y-scroll max-w-[950px] pt-[10px] pb-[10px]" 
        onScroll={handleScroll}
        style={{ height: `${itemHeight * visibleItems}px`, flex: 1, border: 'none' }} 
      >
        {listItems.map((item, index) => {
          const position = index * itemHeight - scrollY; 
          let opacity = 1; 
          
          if (position < 0) {
            opacity = Math.max(0, 1 + (position / fadeDistance) * 1.5); 
          } else if (position > (itemHeight * (visibleItems - 1))) {
            const distanceFromBottom = position - (itemHeight * (visibleItems - 1));
            if (distanceFromBottom < fadeDistance) {
              opacity = Math.max(0, 1 - (distanceFromBottom / fadeDistance) * 1.5); 
            }
          }
          if (index === listItems.length - 1 && position >= (itemHeight * (visibleItems - 1))) {
            opacity = 1; 
          }
          
          return (
            <div
              key={index}
              className="p-4 transition-opacity duration-300 ease-in-out hover:bg-gray-100"
              style={{ opacity }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[#505050] font-montserrat text-[14px] font-bold">{item.title}</span>
                <div className="flex items-center space-x-2">
                  <button className="text-[#505050] font-montserrat text-[14px] font-bold hover:text-[#F3A800]">Посмотреть</button>
                  <button className="text-[#656565] font-montserrat text-[14px] font-bold hover:text-[#F3A800]">Скачать</button>
                  <img src='/downloadpic.svg' alt='Иконка скачивания' className="h-6" />
                </div>
              </div>
              {index < listItems.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Провайдер для контекста прокрутки
const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  
  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollProvider, ScrollableList };
