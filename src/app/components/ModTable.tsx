'use client'
import React, { useState } from "react";
import TableRow from "./TableRow";

const ModTable: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const rows = [
    {
      id: 1,
      name: "LINE A 50-14W -830-WH",
      power: "14",
      color: "Белый",
      dimensions: "20х15х10",
      ledFlux: "1672",
      beamAngle: "119.43",
      efficiency: "119.43",
      colorTemp: "3000",
      cri: "80+",
      lightControl: "no",
      price: "2700",
    },
    {
      id: 2,
      name: "LINE A 50-14W -830-WH",
      power: "14",
      color: "Черный",
      dimensions: "20х15х10",
      ledFlux: "1760",
      beamAngle: "125.71",
      efficiency: "125.71",
      colorTemp: "3000",
      cri: "80+",
      lightControl: "no",
      price: "2700",
    },
    {
      id: 3,
      name: "LINE A 50-14W -830-WH",
      power: "22",
      color: "Белый",
      dimensions: "20х15х10",
      ledFlux: "1672",
      beamAngle: "119.43",
      efficiency: "119.43",
      colorTemp: "4000",
      cri: "80+",
      lightControl: "no",
      price: "2700",
    },
    {
      id: 4,
      name: "LINE A 50-14W -830-WH",
      power: "22",
      color: "Серый",
      dimensions: "20х15х10",
      ledFlux: "1672",
      beamAngle: "119.43",
      efficiency: "119.43",
      colorTemp: "3000",
      cri: "80+",
      lightControl: "no",
      price: "3500",
    },
    {
      id: 5,
      name: "LINE A 50-14W -830-WH",
      power: "14",
      color: "Красный",
      dimensions: "20х15х10",
      ledFlux: "1600",
      beamAngle: "120.00",
      efficiency: "120.00",
      colorTemp: "3000",
      cri: "80+",
      lightControl: "yes",
      price: "2900",
    },
    {
      id: 6,
      name: "LINE A 50-14W -830-WH",
      power: "14",
      color: "Зеленый",
      dimensions: "20х15х10",
      ledFlux: "1650",
      beamAngle: "125.00",
      efficiency: "125.00",
      colorTemp: "3000",
      cri: "80+",
      lightControl: "yes",
      price: "2950",
    },
  ];

  const displayedRows = showAll ? rows : rows.slice(0, 4);

  return (
    <div id='table'>
      <span className="inline-block mt-2 mb-[10px] font-bold text-darkgrey leading-10 text-base font-montserrat">
        Выбранные модификации
      </span>
      <span className="inline-block mt-2 ml-5 mb-[10px] font-normal text-darkgrey leading-4 text-sm font-montserrat">
        Показано {displayedRows.length} из {rows.length}
      </span>
      <div className="flex flex-col max-w-[1285px] w-full">
        <div className="flex w-full mb-2 items-center pb-2 header-container relative">
          <span className="flex flex-col w-[12%] min-w-[80px] font-bold">Наименование</span>
          <span className="flex flex-col w-[8%] min-w-[80px] font-bold">Мощность</span>
          <span className="flex flex-col w-[7%] min-w-[80px] font-bold">Цвет корпуса</span>
          <span className="flex flex-col w-[6%] min-w-[100px] font-bold">Габариты [ВxДxШ]</span>
          <span className="flex flex-col w-[8%] min-w-[100px] font-bold">Световой поток LED [лкм]</span>
          <span className="flex flex-col w-[10%] min-w-[100px] font-bold">Угол рассеивания</span>
          <span className="flex flex-col w-[11%] min-w-[100px] font-bold">Эффективность LW/W</span>
          <span className="flex flex-col w-[9%] min-w-[100px] font-bold">Цветовая температура</span>
          <span className="flex flex-col w-[3%] min-w-[80px] font-bold">CRI/Ra</span>
          <span className="flex flex-col w-[9%] min-w-[80px] font-bold">Управление светом</span>
          <span className="flex flex-col w-[3%] min-w-[80px] font-bold">Цена</span>
          <span className="flex flex-col w-[7%] min-w-[80px] font-bold">Добавить в подборку</span>
        </div>

        {displayedRows.map((row) => (
          <TableRow key={row.id} {...row} />
        ))}

        <a 
          href="#" 
          className="text-[var(--secondary)] underline mb-[20px] block mod"
          onClick={(e) => {
            e.preventDefault();
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Показать первые четыре" : "Все модификации"}
        </a>
      </div>
    </div>
  );
};

export default ModTable;
