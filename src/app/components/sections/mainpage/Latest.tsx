import React from "react";
import SectionTitle from "../../SectionTitle";
import Card from "../../Card";
import Button from "../../Button";
import ScrollableList from "../../ScrollableList";
type CardProps = {
  url: string;
  title: string;
  price: number;
  id: string;
  features?: { id: string; text: string }[];
};
const getCards = async (): Promise<CardProps[]> => {
  // Получаем данные с сервера
  return [
    {
      url: "/prod1.png",
      title: "Дизайнерский светильник изготавливаемый по проекту",
      price: 21300,
      id: "1",
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
      id: "2",
      features: [
        { id: "1", text: "Длинна до 3 метров." },
        { id: "2", text: "Углы поворота между секторами по проекту." },
        { id: "3", text: "Мощность рассчитывается индивидуально." },
      ],
    },
    {
      url: "/prod3.png",
      title: "Дизайнерский светильник изготавливаемый по проекту",
      price: 21800,
      id: "3",
      features: [
        { id: "1", text: "Длинна до 3 метров." },
        { id: "2", text: "Углы поворота между секторами по проекту." },
        { id: "3", text: "Мощность рассчитывается индивидуально." },
      ],
    },
    {
      url: "/prod4.png",
      title: "Дизайнерский светильник изготавливаемый по проекту",
      price: 37900,
      id: "4",
      features: [
        { id: "1", text: "Длинна до 3 метров." },
        { id: "2", text: "Углы поворота между секторами по проекту." },
        { id: "3", text: "Мощность рассчитывается индивидуально." },
      ],
    },
  ];
};
const Latest = async () => {
  const cards = await getCards(); // Получаем карточки асинхронно
  return (
    <section className="mb-[50px]">
      <SectionTitle title="Новинки" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[80px]">
        {cards.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            title={card.title}
            price={card.price}
            id={card.id}
            features={card.features}
          />
        ))}
      </div>
      <div className="flex justify-center mb-[40px]">
        <Button
          text="Перейти в каталог"
          href="/catalog"
          isLink={true}
          paddingX="px-[36px]"
        />
      </div>
      <ScrollableList /> 
    </section>
  );
};
export default Latest;
