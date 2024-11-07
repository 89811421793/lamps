'use client'
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
  const fadeDistance = 50; // Расстояние, на котором элементы начинают исчезать и появляться

  return (
    <div
      ref={containerRef}
      className="border-0 rounded-lg overflow-y-scroll py-4"
      onScroll={handleScroll}
      style={{ height: `${itemHeight * visibleItems}px` }}
    >
      {listItems.map((item, index) => {
        const position = index * itemHeight - scrollY; // Вычисляем позицию элемента относительно прокрутки
        let opacity = 1; // По умолчанию полная непрозрачность

        // Логика изменения прозрачности верхних элементов
        if (position < 0) {
          opacity = Math.max(0, 1 + (position / fadeDistance)*1.5); // Элемент начинает исчезать при прокрутке вверх
        } 
        // Логика изменения прозрачности нижних элементов
        else if (position > (itemHeight * (visibleItems - 1))) {
          const distanceFromBottom = position - (itemHeight * (visibleItems - 1));
          if (distanceFromBottom < fadeDistance) {
            opacity = Math.max(0, 1 - (distanceFromBottom / fadeDistance)*1.5); // Элемент начинает исчезать при прокрутке вниз
          }
        }

        return (
          <div
            key={index}
            className="p-4 transition-opacity duration-300 ease-in-out hover:bg-gray-100"
            style={{ opacity }}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              <div className="flex items-center space-x-2">
                <button className="text-blue-500">Посмотреть</button>
                <button className="text-blue-500">Скачать</button>
                <img src='/downloadpic.svg' alt='Иконка скачивания' className="h-6" />
              </div>
            </div>
            {index < listItems.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollableList;
