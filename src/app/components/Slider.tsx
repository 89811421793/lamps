import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Инициализация модулей
SwiperCore.use([Navigation]);

const images: string[] = [
  '/lamp.png',
  '/svetilnik.png',
  '/lamp_scr.png',
  '/slide1.png',
  '/slide2.png',
  '/slide3.png',
  '/slide4.png',
];

const VerticalSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPrevHovered, setIsPrevHovered] = useState<boolean>(false);
  const [isNextHovered, setIsNextHovered] = useState<boolean>(false);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrevClick = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      swiperRef.current.swiper.slideTo(newIndex);
      setSelectedIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    if (selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1;
      swiperRef.current.swiper.slideTo(newIndex);
      setSelectedIndex(newIndex);
    }
  };

  const isPrevDisabled = selectedIndex === 0;
  const isNextDisabled = selectedIndex === images.length - 1;

  return (
    <div className="flex items-stretch h-[516px]">
      <div className="relative w-[82px] mr-[25px] flex flex-col">
        <button
          onClick={handlePrevClick}
          onMouseEnter={() => setIsPrevHovered(true)}
          onMouseLeave={() => setIsPrevHovered(false)}
          className={`w-[82px] h-[40px] border border-[#EDEDED] flex justify-center items-center mb-1.5 
            ${isPrevDisabled ? 'opacity-50 bg-white' : isPrevHovered ? 'bg-var(--accent)' : 'bg-white'}`}
          disabled={isPrevDisabled}
        >
          <Image 
            src='/arrow_pag.svg' 
            alt='' 
            width={11} 
            height={7} 
            className={`transform rotate-[-90deg] ${isPrevDisabled ? 'text-var(--whiteFont)' : isPrevHovered ? 'text-var(--whiteFont)' : 'text-var(--whiteFont)'}`} 
          />
        </button>

        <Swiper
          modules={[Navigation]}
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          direction='vertical'
          slidesPerView={5}
          spaceBetween={10}
          className="flex-grow"
          ref={swiperRef}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex border border-red-500 justify-center">
              <Image
                src={src}
                alt={`Image ${index}`}
                width={82}
                height={82}
                className={`cursor-pointer ${selectedIndex === index ? 'border-2 border-[#F3A800]' : 'border-none'}`}
                onClick={() => setSelectedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handleNextClick}
          onMouseEnter={() => setIsNextHovered(true)}
          onMouseLeave={() => setIsNextHovered(false)}
          className={`w-[82px] h-[40px] border border-[#EDEDED] flex justify-center items-center mt-1.5 
            ${isNextDisabled ? 'opacity-50 bg-white' : isNextHovered ? 'bg-var(--accent)' : 'bg-white'}`}
          disabled={isNextDisabled}
        >
          <Image 
            src='/arrow_pag.svg' 
            alt='' 
            width={11} 
            height={7} 
            className={`transform rotate-[90deg] ${isNextDisabled ? 'text-var(--whiteFont)' : isNextHovered ? 'text-var(--whiteFont)' : 'text-var(--whiteFont)'}`} 
          />
        </button>
      </div>

      <div className="w-[525px] h-[516px] border border-dotted border-red-500 flex justify-center items-center">
        <Image style={{border:"1px solid red"}}src={images[selectedIndex]} alt={`Selected Image`} width={383} height={378} />
      </div>
    </div>
  );
};

export default VerticalSlider;
