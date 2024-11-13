import React, { useState, useEffect } from 'react';

type PickerProps = {
  title: string;
  min: number;
  max: number;
  current: number; // Текущая позиция ползунка
  onChange: (value: number) => void; // Функция для обновления значения
};

const Picker: React.FC<PickerProps> = ({ title, min, max, current, onChange }) => {
  const [value, setValue] = useState(current);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setValue(current);
  }, [current]);

  const updateValueFromPosition = (clientX: number, pickerRect: DOMRect) => {
    const offsetX = clientX - pickerRect.left;
    const newPercentage = Math.max(0, Math.min(1, offsetX / pickerRect.width));
    const newValue = Math.floor(min + newPercentage * (max - min));
    setValue(newValue);
    onChange(newValue); // Вызываем onChange для обновления значения
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const pickerRect = event.currentTarget.getBoundingClientRect();
      requestAnimationFrame(() => updateValueFromPosition(event.clientX, pickerRect));
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const pickerRect = event.currentTarget.getBoundingClientRect();
      requestAnimationFrame(() => updateValueFromPosition(event.touches[0].clientX, pickerRect));
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const pickerRect = event.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => updateValueFromPosition(event.clientX, pickerRect));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative"
      style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
    >
      <h3 className="text-left mb-[10px]">{title}</h3>
      <div className="relative mb-[35px]" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} onClick={handleClick}>
        <div className="flex items-center justify-between">
          <span className="transform -translate-y-3 text-sm">{value}</span>
          <span className="transform -translate-y-3 text-sm">{max}</span>
        </div>
        <div className="h-1 bg-[#EAEAEA] relative">
          <div className="absolute left-0 h-1 bg-[var(--secondary)]" style={{ width: `${percentage}%` }}></div>
          <img 
            src="/forfilter.svg" 
            alt="Picker" 
            className="absolute" 
            style={{ left: `${percentage}%`, transform: 'translate(-50%, -50%)' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Picker;
