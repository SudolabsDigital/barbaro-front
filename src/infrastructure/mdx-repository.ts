import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Service, ServiceCategory } from '@/src/domain/service';

const SERVICES_PATH = path.join(process.cwd(), 'src/content/services');

export const getServicesByCategory = (): ServiceCategory[] => {
  const fileNames = fs.readdirSync(SERVICES_PATH);
  const allServices: Service[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(SERVICES_PATH, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        price: data.price,
        duration: data.duration,
        category: data.category,
        order: data.order || 0,
        image: data.image,
        features: data.features || [],
        content,
      } as Service;
    });

  const categoriesMap: Record<string, Service[]> = {};
  
  allServices.forEach(service => {
    if (!categoriesMap[service.category]) {
      categoriesMap[service.category] = [];
    }
    categoriesMap[service.category].push(service);
  });

  const categoryDefinitions: Record<string, { title: string; description: string }> = {
    'cabello': { 
      title: 'EL ARTE DEL CABELLO', 
      description: 'Enfocado en la precisión, la técnica y el estilo personalizado de cada cliente.' 
    },
    'barba': { 
      title: 'EL RITUAL DE LA BARBA', 
      description: 'El corazón de Bárbaro. Experiencias tradicionales con toallas calientes y navaja.' 
    },
    'bienestar': { 
      title: 'CUIDADO Y BIENESTAR', 
      description: 'El hombre moderno cuida su piel. Servicios de spa adaptados al público masculino.' 
    },
    'experiencias': { 
      title: 'EXPERIENCIAS BÁRBARO', 
      description: 'Combinaciones premium, ideales para regalar o para días especiales.' 
    }
  };

  return Object.keys(categoriesMap).map(catId => ({
    id: catId,
    title: categoryDefinitions[catId]?.title || catId.toUpperCase(),
    description: categoryDefinitions[catId]?.description || '',
    services: categoriesMap[catId].sort((a, b) => a.order - b.order)
  }));
};
