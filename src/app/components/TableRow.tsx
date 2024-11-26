import React from "react";

interface TableRowProps {
  id: number;
  name: string;
  power: string;
  color: string;
  dimensions: string;
  ledFlux: string;
  beamAngle: string;
  efficiency: string;
  colorTemp: string;
  cri: string;
  lightControl: string;
  price: string;
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  power,
  color,
  dimensions,
  ledFlux,
  beamAngle,
  efficiency,
  colorTemp,
  cri,
  lightControl,
  price,
}) => {
  return (
    <div className="flex w-full pb-2 mb-2 data-row relative">
      <span className="flex flex-col w-[12%] min-w-[80px]">{name}</span>
      <span className="flex flex-col w-[8%] min-w-[80px]">{power}</span>
      <span className="flex flex-col w-[7%] min-w-[80px]">{color}</span>
      <span className="flex flex-col w-[6%] min-w-[100px]">{dimensions}</span>
      <span className="flex flex-col w-[8%] min-w-[100px]">{ledFlux}</span>
      <span className="flex flex-col w-[10%] min-w-[100px]">{beamAngle}</span>
      <span className="flex flex-col w-[11%] min-w-[100px]">{efficiency}</span>
      <span className="flex flex-col w-[9%] min-w-[100px]">{colorTemp}</span>
      <span className="flex flex-col w-[3%] min-w-[80px]">{cri}</span>
      <span className="flex flex-col w-[9%] min-w-[80px]">{lightControl}</span>
      <span className="flex flex-col w-[3%] min-w-[80px]">{price}</span>
      <div className="flex flex-col w-[7%] min-w-[80px] items-center">
        <button className="w-[22px] h-[22px] bg-[var(--darkgrey)] rounded-full relative btn"></button>
      </div>
    </div>
  );
};

export default TableRow;
