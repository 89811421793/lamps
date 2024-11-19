// components/VerticalSlider.tsx

import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Определяем массив элементов
const items: JSX.Element[] = Array.from({ length: 9 }, (_, index) => (
  <div key={index} className="h-24 flex items-center justify-center bg-gray-200 border border-gray-300">
    Item {index + 1}
  </div>
));

const VerticalSlider: React.FC = () => {
  // Состояние для отслеживания выбранного элемента
  const [selectedItem, setSelectedItem] = useState<string>("Item 1");

  // Функция для обработки изменения выбранного элемента
  const handleOnSlideChange = (event: { item: number }) => {
    const newIndex = event.item; // Индекс нового элемента
    setSelectedItem(`Item ${newIndex + 1}`); // Обновляем состояние
  };

  return (
    <div className="flex">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{ 0: { items: 1 } }}
        autoHeight
        infinite
        onSlideChanged={handleOnSlideChange} // Обработчик изменения слайда
        disableDotsControls // Отключаем точки пагинации
      />
      <div className="ml-4 h-24 w-48 border border-black flex items-center justify-center">
        {/* Отображаем выбранный элемент */}
        {selectedItem}
      </div>
    </div>
  );
};

export default VerticalSlider;
