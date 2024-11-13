import React, { useState } from 'react';
import Picker from './Picker'; 

const Filter: React.FC = () => {
  const [power, setPower] = useState(44);
  const [ledFlux, setLedFlux] = useState(6110);
  const [beamAngle, setBeamAngle] = useState(15);
  const [minPrice, setMinPrice] = useState(2500);

  const handleReset = () => {
    setPower(0);
    setLedFlux(0);
    setBeamAngle(0);
    setMinPrice(0);
  };

  return (
    <div className="border border-[#EAEAEA] p-[24px_26px_25px_22px] max-w-[302px] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[var(--darkgrey)] font-Montserrat text-[16px] font-bold leading-[40px]">
          Фильтр
        </h2>
        <img src="/torch.svg" alt="Torch Icon" className="h-6 w-6" />
      </div>

      {/* Пикеры с передачей onChange */}
      <Picker title="Мощность" min={0} max={432} current={power} onChange={setPower} />
      <Picker title="Световой поток LED" min={0} max={53820} current={ledFlux} onChange={setLedFlux} />
      <Picker title="Угол рассеивания" min={0} max={160} current={beamAngle} onChange={setBeamAngle} />
      <Picker title="Минимальная цена" min={0} max={10575} current={minPrice} onChange={setMinPrice} />

      <div className="flex justify-between mt-4">
        <button className="border border-[#E5E5E5] bg-white px-4 py-2" onClick={handleReset}>
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
