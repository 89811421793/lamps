import Image from 'next/image';
import Button from '../../Button';

const Hero = () => {
  return (
    <div className="flex justify-between items-center p-8 mt-0 pt-0 pr-0 mb-[100px]"> 
      <div className="flex flex-col space-y-6 max-w-xl mt-8 mr-4">
        <h1 className="text-4xl font-montserrat-bold">
          <span className="text-secondary">I-LIGHTS</span> - <span className="text-darkgrey">Эффективные решения</span>
        </h1>
        <p className="text-shortDesc">
          Компания I-lights это современная производственно-проектная организация с многолетним опытом работы в сфере разработки.
        </p>
        <Button text="Подробнее" paddingX="px-[55px]" />
      </div>

      <div className="flex-shrink-0 w-[55%] mr-0"> 
        <Image 
          src='/hero.png' 
          alt="Hero Image" 
          width={1080} 
          height={636} 
          layout="responsive" 
               />
      </div>
    </div>
  );
};

export default Hero;