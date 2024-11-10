import React from "react";
import Link from "next/link";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  return (
    <div>
      <Container>
        <nav className="text-[#7C7C7C] mt-[17px] mb-[38px]">
          <Link href="/" className="hover:text-gray-800">
            Главная
          </Link>
          <span className="mx-2">-</span>
          <Link href="/services" className="hover:text-gray-800">
            Услуги
          </Link>
        </nav>
        <SectionTitle
          title="Услуги"
          showIndicator={false}
          className="mb-[40px]"
        />
      </Container>
    </div>
  );
};

export default Services;
