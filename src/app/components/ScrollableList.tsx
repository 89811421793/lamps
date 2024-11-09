'use client'; // Обязательно оставляем use client для клиентского компонента
import React, { useState, useRef, useCallback } from 'react';
const ScrollableList = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollY(containerRef.current.scrollTop);
    }
  }, []);
  
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
  
  const itemHeight = 60; // Высота одного элемента списка
  const visibleItems = 3; // Количество одновременно видимых элементов
  const fadeDistance = 51; // Расстояние, на котором элементы начинают исчезать и появляться
  
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
          const position = index * itemHeight - scrollY; // Вычисляем позицию элемента относительно прокрутки
          let opacity = 1; // По умолчанию полная непрозрачность
          
          // Логика изменения прозрачности верхних элементов
          if (position < 0) {
            opacity = Math.max(0, 1 + (position / fadeDistance) * 1.5); // Элемент начинает исчезать при прокрутке вверх
          } 
          // Логика изменения прозрачности нижних элементов
          else if (position > (itemHeight * (visibleItems - 1))) {
            const distanceFromBottom = position - (itemHeight * (visibleItems - 1));
            if (distanceFromBottom < fadeDistance) {
              opacity = Math.max(0, 1 - (distanceFromBottom / fadeDistance) * 1.5); // Элемент начинает исчезать при прокрутке вниз
            }
          }
          // Убедимся, что последний элемент всегда полностью видимый
          if (index === listItems.length - 1 && position >= (itemHeight * (visibleItems - 1))) {
            opacity = 1; // Последний элемент всегда полностью видимый
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
              {index < listItems.length - 1 && <hr />} {/* Разделитель между элементами */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ScrollableList;
