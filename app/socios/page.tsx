import { PartnersPageClient } from "@/src/components/modules/PartnersPageClient";
import { getPartners } from "@/src/infrastructure/mdx-repository";

export const metadata = {
  title: "Nuestros Socios Estratégicos",
  description: "Conoce a las empresas y aliados que confían en Estilo Bárbaro para elevar el estándar de excelencia.",
};

export default function PartnersPage() {
  const partners = getPartners();

  return <PartnersPageClient partners={partners} />;
}
