import React from 'react';

type CardProps = {
    url: string;
    title: string;
    price: number;
    id: string;
    features?: { id: string; text: string }[];
};

const Card: React.FC<CardProps> = ({ url, title, price, id, features = [] }) => {
    return (
        <div className="border rounded-lg flex flex-col h-full space-y-8 mx-0"> 
            <div className="flex justify-center items-center h-24 mb-4 pt-[20px]">
                {url.includes('prod1') ? (
                    <img src={url} alt={title} className="w-[256px] h-full object-contain rounded-t-lg" />
                ) : (
                    <img src={url} alt={title} className="w-[128px] h-full object-contain rounded-t-lg" />
                )}
            </div>
            <h1 className="text-darkgrey font-bold text-lg leading-5 mb-4 p-4">{title}</h1> 
            <ul className="list-disc pl-5 space-y-2 mb-4 p-4">
                {features.map((feature) => (
                    <li key={feature.id} className="text-shortDesc font-light text-sm leading-5">
                        {feature.text}
                    </li>
                ))}
            </ul>
            <span className="text-darkgrey font-bold text-xl leading-5 mb-4 p-4">{price} ₽</span> 
            <div className="flex w-full space-x-0">
                <a 
                    href={`/product/${id}`} 
                    className="flex items-center justify-center bg-accent text-white font-semibold text-sm leading-5 h-10 flex-grow"
                >
                    Подробнее
                </a>
                <button 
                    className="flex items-center justify-center border border-gray-300 bg-white text-darkgrey font-semibold text-sm leading-5 h-10 w-14"
                >
                    <img src="/add_grey.svg" alt="Добавить" className="mr-2" />
                </button>
            </div>
        </div>
    );
};

export default Card;
