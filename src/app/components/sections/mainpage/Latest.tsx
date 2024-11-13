import React from "react";
import SectionTitle from "../../SectionTitle";
import Card from "../../Card";
import Button from "../../Button";
import ScrollableList from "../../ScrollableList";
import Link from "next/link";

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
      url: "/prod1.png",
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
      url: "/prod1.png",
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
      <Link href='/catalog'>
        <Button
          text="Перейти в каталог"
          href="/catalog"
          isLink={false}
          paddingX="px-[36px]"
        />
        </Link>
      </div>
      
      <ScrollableList />
      <div className="flex justify-center items-start mt-10 w-full space-x-40 ">
        {/* Левый блок */}
        <div className="relative flex flex-col items-start max-w-[100%]">
          <img
            src="/qustionmark.svg"
            alt=""
            className="absolute -top-8 -left-24 z-10"
          />
          <h2 className="text-darkgrey font-montserrat text-2xl font-extrabold max-w-[100%] mt-[33px] mr-[38px]">
            Остались вопросы и нужна{" "}
            <span className="block">консультация?</span>
          </h2>
        </div>
        {/* Правый блок с формой */}
        <form className="flex flex-col max-w-[357px] w-full">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя*"
            className="border-b border-[#EFEFEF] mb-4 py-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail*"
            className="border-b border-[#EFEFEF] mb-4 py-2 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Сообщение"
            className="border-b border-[#EFEFEF] mb-10 py-2 focus:outline-none"
            rows={1}
          />
          <div className="flex justify-end">
            <Button text="Отправить" paddingX="px-[66px]" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Latest;
