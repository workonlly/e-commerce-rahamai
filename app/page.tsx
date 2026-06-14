import Image from "next/image";
import Hero from "./components/main";
import ImageGallery from "./components/data";
import WhoWeAre from "./components/who";
import TrendingSlider from "./components/sale";
import CategorySection from "./components/section";

import Faq from "./components/faqe";

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingSlider />
      <CategorySection />
      <ImageGallery />
      <WhoWeAre />
     
      <Faq />
    </>
  );
}
