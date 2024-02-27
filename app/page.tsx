import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Guide />
      <Features />
      <CallToAction />
    </>
  );
}
