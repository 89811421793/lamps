"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Paginator from "../components/Paginator";
import CatalogTabs from "../components/CatalogTabs";

type Product = {
  url: string;
  title: string;
  price: number;
  id: string;
  features: Array<{ id: string; text: string }>;
};

const tabs = [
  "Трековые светильники",
  "Встраиваемые светильники",
  "Профильные светильники",
  "Фигурные светильники",
  "Светильники Армстронг",
  "Светильники Армстронг с равномерной засветкой",
];

const products: Product[] = [
  {
    url: "/prod2.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 41500,
    id: "1",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
  {
    url: "/prod1.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 21800,
    id: "2",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
  {
    url: "/prod1.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 37900,
    id: "3",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
  {
    url: "/prod2.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 41500,
    id: "4",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
  {
    url: "/prod1.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 21800,
    id: "5",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
  {
    url: "/prod1.png",
    title: "Дизайнерский светильник изготавливаемый по проекту",
    price: 37900,
    id: "6",
    features: [
      { id: "1", text: "Длинна до 3 метров." },
      { id: "2", text: "Углы поворота между секторами по проекту." },
      { id: "3", text: "Мощность рассчитывается индивидуально." },
    ],
  },
];

const Catalog = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTabClick = (tab: string) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };

  const isUnderConstruction = selectedTab !== tabs[0];

  const getAllProducts = () => {
    const baseProducts = products.map((product) => ({ ...product }));

    const imageMapping = [
      ["/prod2.png", "/prod1.png", "/prod1.png"],
      ["/prod1.png", "/prod1.png", "/prod1.png"],
      ["/prod2.png", "/prod1.png", "/prod2.png"],
      ["/prod1.png", "/prod2.png", "/prod2.png"],
      ["/prod2.png", "/prod1.png", "/prod1.png"],
      ["/prod1.png", "/prod1.png", "/prod2.png"],
      ["/prod2.png", "/prod1.png", "/prod2.png"],
    ];

    const currentImages = imageMapping[currentPage - 1];

    currentImages.forEach((url, index) => {
      if (baseProducts[index + 3]) {
        baseProducts[index + 3].url = url;
      }
    });

    return baseProducts;
  };

  const allProducts = getAllProducts();

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
        <CatalogTabs 
          tabs={tabs} 
          selectedTab={selectedTab} 
          onTabClick={handleTabClick} 
        />
        <div className="flex mb-8">
          <div className="flex-1 mr-[35px] max-w-[300px]">
            <Filter />
          </div>
          <div className="flex-2 w-full">
            <div className="mb-4">
              <SectionTitle
                subtitle="Новинки"
                showIndicator={false}
                className="font-montserrat text-[18px] font-bold leading-[40px]"
              />
              {isUnderConstruction ? (
                <p className="text-center text-500">{`${selectedTab}. Under Construction`}</p>
              ) : (
                <div className="flex space-x-4 gap-4">
                  {products.slice(0, 3).map((product) => (
                    <Card
                      key={product.id}
                      url={product.url}
                      title={product.title}
                      price={product.price}
                      id={product.id}
                      features={product.features}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-8">
              <SectionTitle
                subtitle="Весь каталог"
                showIndicator={false}
                className="font-montserrat text-[18px] font-bold leading-[40px]"
              />
              {isUnderConstruction ? (
                <p className="text-center text-500">{`${selectedTab}. Under Construction`}</p>
              ) : (
                <div className="flex flex-wrap gap-[28px]">
                  {allProducts.map((product) => (
                    <div key={product.id} className="max-w-[283px]">
                      <Card
                        url={product.url}
                        title={product.title}
                        price={product.price}
                        id={product.id}
                        features={product.features}
                      />
                    </div>
                  ))}
                  <div className="flex justify-center mt-8 mb-12 ml-[28%]">
                    <Paginator
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalPages={7}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
