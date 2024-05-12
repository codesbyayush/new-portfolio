import HeroSection from "@/components/hero-section";
import HeroSvg from "@/components/icons/herosvg";

export default function Home() {
  return (
    <main className="h-full w-full grid xl:grid-cols-custom items-center justify-start gap-16 max-w-6xl mx-auto">
      <HeroSection />
      <HeroSvg />
    </main>
  );
}
