import Container from "./components/Container";
import { CatalogSection, CatalogProvider } from "./components/sections/mainpage/CatalogSection";
import { ServicesSection, ServicesProvider } from "./components/sections/mainpage/ServicesSection";
import Hero from "./components/sections/mainpage/Hero";
import Latest from "./components/sections/mainpage/Latest";


type CatalogItem = {
  title: string;
  description: string;
};

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

async function fetchCatalogItems(): Promise<CatalogItem[]> {
  return [
    {
      title: "Трековые светильники",
      description: "Органично вписываются в интерьеры в стиле хай-тек, лофт",
    },
    { title: "Встраиваемые светильники", description: "Описание 2" },
    { title: "Фигурные светильники", description: "Описание 3" },
    { title: "Светильники Армстронг", description: "Описание 4" },
    {
      title: "Светильники Армстронг с равномерной засветкой",
      description: "Описание 5",
    },
  ];
}

async function fetchServiceItems(): Promise<ServiceItem[]> {
  return [
    {
      title: "Изготовление счетильников для торгового и общественного освещения",
      description: "Мы ценим Ваше время, поэтому, коротко о главном. Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
      icon: "/service1.svg",
    },
    {
      title: "Поставки дизайнерского света от ведущих европейских производителей",
      description: "Описание услуги 2",
      icon: "/service2.svg",
    },
    {
      title: "Проектирование, светотехнические расчеты и разработка концепции освещения",
      description: "Описание услуги 3",
      icon: "/service3.svg",
    },
    {
      title: "Модернизация светильников",
      description: "Описание услуги 4",
      icon: "/service4.svg",
    },
    {
      title: "Ремонт светодиодных светильников",
      description: "Описание услуги 5",
      icon: "/service5.svg",
    },
  ];
}

export default async function Home() {
  const items = await fetchCatalogItems(); // Получаем данные на сервере
  const serviceItems = await fetchServiceItems();

  return (
    <main>
      <Hero />
      <Container>
        <CatalogProvider>
          <CatalogSection items={items} />
        </CatalogProvider>
        <ServicesProvider>
        <ServicesSection items={serviceItems} />
        </ServicesProvider>
        <Latest/>
      </Container>
    </main>
  );
}
