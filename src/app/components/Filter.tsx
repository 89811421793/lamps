// Filter.tsx
import React from 'react';
import Picker from './Picker'; 
const Filter: React.FC = () => {
  return (
    <div className="border border-[#EAEAEA] p-[24px_26px_25px_22px]">
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[var(--darkgrey)] font-Montserrat text-[16px] font-bold leading-[40px]">
          Фильтр
        </h2>
        <img src="/torch.svg" alt="Torch Icon" className="h-6 w-6" />
      </div>

      {/* Пикеры */}
      <Picker title="Мощность" min={0} max={432} current={44} />
      <Picker title="Световой поток LED" min={0} max={53820} current={6110} />
      <Picker title="Угол рассеивания" min={0} max={160} current={15} />
      <Picker title="Минимальная цена" min={0} max={10575} current={2500} />

      {/* Кнопки */}
      <div className="flex justify-between mt-4">
        <button className="border border-[#E5E5E5] bg-white px-4 py-2">
          Сбросить
        </button>
        <button className="bg-[#FFC94F] text-[#000] px-4 py-2">
          Применить
        </button>
      </div>
    </div>
  );
};

export default Filter;
