import React from 'react';
import Link from 'next/link';
import Container from '@/app/components/Container';
import SectionTitle from '../components/SectionTitle';

const About = () => {
    return (
        <div>
            <Container>
                <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
                    <Link href="/" className="hover:text-gray-800">
                        Главная
                    </Link>
                    <span className="mx-2">-</span>
                    <Link href="/about" className="hover:text-gray-800">
                        О компании
                    </Link>
                </nav>
                <SectionTitle title='О компании' showIndicator={false} />
            </Container>
        </div>
    );
};

export default About;
