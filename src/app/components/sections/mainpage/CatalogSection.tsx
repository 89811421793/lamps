import React from 'react';
import SectionTitle from '../../SectionTitle';
import Image from 'next/image';

const CatalogSection = () => {
    const items = [
        "Трековые светильники",
        "Встраиваемые светильники",
        "Фигурные светильники",
        "Светильники Армстронг",
        "Светильники Армстронг с равномерной засветкой"
      ];

    return (
        <section>
            <SectionTitle title="Каталог"/>
            <div className="flex flex-col md:flex-row">
      <div className="flex flex-col justify-start items-start pr-4 w-full md:w-1/4 mt-6">
        <ul className="space-y-11">
          {items.map((item) => (
            <li key={item} className="text-darkgrey font-montserrat text-14 font-bold leading-22 break-words">
              {item}
              {/* Условный рендеринг разделителя */}
              {item !== items[items.length - 1] && <hr className="my-5 border-gray-300" />}
            </li>
          ))}
        </ul>
      </div>


      <div className="flex-shrink-0 w-full md:w-3/4">
        <Image 
          src='/catalog.png' 
          alt="Hero Image" 
          width={960} 
          height={600} 
          layout="responsive" 
        />
      </div>
    </div>
        </section>
    );
};

export default CatalogSection;