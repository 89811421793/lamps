// Picker.tsx
import React from 'react';

type PickerProps = {
  title: string;
  min: number;
  max: number;
  current: number; // Текущая позиция ползунка
};

const Picker: React.FC<PickerProps> = ({ title, min, max, current }) => {
  const percentage = ((current - min) / (max - min)) * 100; // Вычисляем процент для окрашенной части

  return (
    <div>
      <h3 className="text-left mb-[30px]">{title}</h3>
      <div className="relative mb-[50px]">
        <div className="flex items-center">
          <span className="absolute left-0 transform -translate-y-3 text-sm">{min}</span>
          <span className="absolute right-0 transform -translate-y-3 text-sm">{max}</span>
        </div>
        <div className="h-1 bg-[#EAEAEA] relative">
          <div className="absolute left-0 h-1 bg-[#FFC94F]" style={{ width: `${percentage}%` }}></div>
          <img src="/forfilter.svg" alt="Picker" className="absolute left-[${percentage}%] transform -translate-y-2" />
        </div>
      </div>
    </div>
  );
};

export default Picker;
