// app/page.tsx
import Container from "./components/Container";
import CatalogSection from "./components/sections/mainpage/CatalogSection";
import Hero from "./components/sections/mainpage/Hero";

interface CatalogItem {
  title: string;
  description: string;
}

async function fetchCatalogItems(): Promise<CatalogItem[]> {
  // Здесь можно делать запрос к своему API или базе данных
  // здесь, в кач-ве примера возвращаются фиксир данные
  return [
    {
      title: "Трековые светильники",
      description: "Органично вписываются в интерьеры в стиле хай-тек, лофт",
    },
    { title: "Встраиваемые светильники", description: "Описание 2" },
    { title: "Фигурные светильники", description: "Описание 3" },
    { title: "Светильники Армстронг", description: "Описание 4" },
    { title: "Светильники Армстронг с равномерной засветкой", description: "Описание 5" },
  ];
}

export default async function Home() {
  const items = await fetchCatalogItems(); // Получаем данные на сервере

  return (
    <main>
      <Hero />
      <Container>
        <CatalogSection items={items} /> 
      </Container>
    </main>
  );
}
