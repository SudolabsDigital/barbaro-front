export interface Service {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  order: number;
  image?: string;
  features?: string[];
  content?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}
