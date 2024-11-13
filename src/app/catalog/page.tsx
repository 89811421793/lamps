import Link from 'next/link';
import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const Catalog = () => {
    return (
        <div>
            <Container>
             <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/catalog" className="hover:text-gray-800">
            Каталог
          </Link>
        </nav>
        <SectionTitle
          title="Каталог"
          showIndicator={false}
          className="mb-[40px]"
        />
        </Container>
        </div>
    );
};

export default Catalog;