import { BottomSection } from "./ui/home/BottomSection";
import CTASection from "./ui/home/CTASection";
import { CarouselSection } from "./ui/home/CarouselSection";
import { DoctorSection } from "./ui/home/DoctorSection";
import IngredientsSection from "./ui/home/IngredientsSection";
import { MainSection } from "./ui/home/MainSection";
import { ProductRevealSection } from "./ui/home/ProductRevealSection";
import { WomenSection } from "./ui/home/WomenSection";

export default function Home({ searchParams }) {
  return (
    <>
      <MainSection searchParams={searchParams} />
      <WomenSection />
      <ProductRevealSection />
      <CTASection searchParams={searchParams} />
      <IngredientsSection />
      <DoctorSection searchParams={searchParams} />
      <CarouselSection />
      <BottomSection searchParams={searchParams} />
    </>
  );
}
