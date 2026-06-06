import Image from "next/image";
import Hero from "./components/main";
import ImageGallery from "./components/data";
import WhoWeAre from "./components/who";

import Faq from "./components/faqe";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageGallery />
      <WhoWeAre />
     
      <Faq />
    </>
  );
}
