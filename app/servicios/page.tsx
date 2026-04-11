import ServicesPageClient from "@/src/components/modules/ServicesPageClient";
import { getServicesByCategory } from "@/src/infrastructure/mdx-repository";

export default function ServicesPage() {
  const categories = getServicesByCategory();

  return <ServicesPageClient categories={categories} />;
}
