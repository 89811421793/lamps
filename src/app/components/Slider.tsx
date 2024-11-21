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

interface VerticalSliderProps {
  onSlideChange: (index: number) => void;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ onSlideChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Set default index to 'lamp_scr.png'
  const [isPrevHovered, setIsPrevHovered] = useState<boolean>(false);
  const [isNextHovered, setIsNextHovered] = useState<boolean>(false);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
    onSlideChange(index); 
  };

  const handlePrevClick = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      swiperRef.current.swiper.slideTo(newIndex);
      handleSlideChange(newIndex);
    }
  };

  const handleNextClick = () => {
    if (selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1;
      swiperRef.current.swiper.slideTo(newIndex);
      handleSlideChange(newIndex);
    }
  };

  const isPrevDisabled = selectedIndex === 0;
  const isNextDisabled = selectedIndex === images.length - 1;

  return (
    <div className="flex h-[516px]">
      <div className="relative w-[82px] mr-[25px] flex flex-col">
        <button
          onClick={handlePrevClick}
          onMouseEnter={() => setIsPrevHovered(true)}
          onMouseLeave={() => setIsPrevHovered(false)}
          style={{
            width: '82px',
            height: '40px',
            border: '1px solid #EDEDED',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
            backgroundColor: isPrevDisabled ? 'white' : (isPrevHovered ? 'var(--accent)' : 'white'),
            opacity: isPrevDisabled ? 0.5 : 1,
          }}
          disabled={isPrevDisabled}
        >
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M7 5.5L1.5 11L0 9.5L4 5.5L0 1.5L1.5 0L7 5.5Z" fill={isPrevDisabled ? '#535353' : (isPrevHovered ? 'white' : '#535353')} />
          </svg>
        </button>

        {/* Swiper Component */}
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
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={src}
                alt={`Image ${index}`}
                width={82}
                height={82}
                className={`cursor-pointer ${selectedIndex === index ? 'border-2 border-[#F3A800]' : 'border-none'}`}
                onClick={() => handleSlideChange(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handleNextClick}
          onMouseEnter={() => setIsNextHovered(true)}
          onMouseLeave={() => setIsNextHovered(false)}
          style={{
            width: '82px',
            height: '40px',
            border: '1px solid #EDEDED',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            backgroundColor: isNextDisabled ? 'white' : (isNextHovered ? 'var(--accent)' : 'white'),
            opacity: isNextDisabled ? 0.5 : 1,
          }}
          disabled={isNextDisabled}
        >
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 5.5L5.5 0L7 1.5L3 5.5L7 9.5L5.5 11L0 5.5Z" fill={isNextDisabled ? '#535353' : (isNextHovered ? 'white' : '#535353')} />
          </svg>
        </button>
      </div>

      <div className="p-[70px_71px_68px_71px] max-w-[500px] h-full flex justify-center items-center mr-[10px]">
        <Image src={images[selectedIndex]} alt={`Selected Image`} width={383} height={378} />
      </div>
    </div>
  );
};

export default VerticalSlider;
