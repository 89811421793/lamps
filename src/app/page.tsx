import Container from "./components/Container";
import CatalogSection from "./components/sections/mainpage/CatalogSection";
import Hero from "./components/sections/mainpage/Hero";


export default function Home() {
  return (
    <main>
     <Hero/>
     <Container>
     <CatalogSection />
     </Container>
    </main>
  );
}
