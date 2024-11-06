import React from "react";

type CardProps = {
  url: string;
  title: string;
  price: number;
  id: string;
  features?: { id: string; text: string }[];
};

const Card: React.FC<CardProps> = ({
  url,
  title,
  price,
  id,
  features = [],
}) => {
  return (
    <div className=" card border rounded-lg flex flex-col h-full mx-0 relative transition-shadow duration-300 group hover:shadow-[0px_0px_30px_0px_#FFC94F4D]">
      <div className="flex justify-center items-center h-24 mb-4 pt-[180px]">
        {url.includes("prod1") ? (
          <img
            src={url}
            alt={title}
            className="w-[256px] h-[96px] object-contain rounded-t-lg mb-[100px]"
          />
        ) : (
          <img
            src={url}
            alt={title}
            className="w-[128px] h-[181px] object-contain rounded-t-lg mb-[100px]"
          />
        )}
      </div>
      <h1 className="text-darkgrey font-bold text-lg leading-5 mb-[8px] p-0 mt-[80px] ml-[10px] mr-[10px]">
        {title}
      </h1>
      <ul className="list-none pl-5 space-y-2 mb-4 p-0 mt-[8px] mr-[10px] custom-list">
        {features.map((feature) => (
          <li key={feature.id} className="flex items-start">
            <span className="bg-secondary mr-2 w-[6px] h-[6px] rounded-full"></span>
            <span className="text-shortDesc font-light text-sm leading-5">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <span className="text-darkgrey font-bold text-xl leading-5 mb-4 p-4 transition-colors duration-300 group-hover:text-[#F3C650]">
        {price} ₽
      </span>
      <div className="flex w-full space-x-0">
        <a
          href={`/product/${id}`}
          className="flex items-center justify-center bg-accent text-white font-semibold text-sm leading-5 h-10 flex-grow"
        >
          Подробнее
        </a>
        <button className="flex items-center justify-center border border-gray-300 bg-white text-darkgrey font-semibold text-sm leading-5 h-10 w-14">
          <img src="/add_grey.svg" alt="Добавить" className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Card;
