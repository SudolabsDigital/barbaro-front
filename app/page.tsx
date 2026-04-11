import Hero from "@/src/components/modules/Hero";
import ServicesSection from "@/src/components/modules/ServicesSection";
import AboutSection from "@/src/components/modules/AboutSection";
import ContactSection from "@/src/components/modules/ContactSection";
import { getServicesByCategory } from "@/src/infrastructure/mdx-repository";

export default function Home() {
  const categories = getServicesByCategory();

  return (
    <main className="flex-1">
      <Hero />
      {categories.length > 0 && <ServicesSection categories={categories} />}
      <AboutSection />
      <ContactSection />
    </main>
  );
}
