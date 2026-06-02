// src/lib/services.ts

export const PREMIUM_PACKAGES = [
  {
    id: 'paquete-premium-full',
    name: 'Premium Full',
    description: 'El nivel máximo de distinción personal.',
    features: ['Limpieza con vapor', 'Corte clásico o fade', 'Lavado capilar', 'Masaje relajante', 'Whisky de cortesía'],
    price: '99.90',
    imageSrc: 'https://picsum.photos/seed/premium1/800/600?grayscale',
    isPremium: true
  },
  {
    id: 'paquete-demo-premium',
    name: 'Demo Premium',
    description: 'Una introducción al mundo del cuidado de élite.',
    features: ['Limpieza facial', 'Corte a elección', 'Masaje exprés', 'Whisky de cortesía'],
    price: '79.90',
    imageSrc: 'https://picsum.photos/seed/premium2/800/600?grayscale',
    isPremium: false
  }
]

export const CORE_SERVICES = [
  {
    id: 'corte-fade',
    name: 'Cortes Fade',
    description: 'Mid, Low, High, Comprimidos, Texturizados, Ondulaciones.',
    features: ['Con lavado capilar: S/ 30'],
    price: '25',
    imageSrc: 'https://picsum.photos/seed/core1/800/600?grayscale'
  },
  {
    id: 'corte-moderno',
    name: 'Clásico Moderno',
    description: 'Precisión contemporánea para el día a día.',
    features: ['Con lavado capilar: S/ 30'],
    price: '20',
    imageSrc: 'https://picsum.photos/seed/core2/800/600?grayscale'
  },
  {
    id: 'corte-basico',
    name: 'Clásico Básico',
    description: 'El corte tradicional que nunca pasa de moda.',
    price: '15',
    imageSrc: 'https://picsum.photos/seed/core3/800/600?grayscale'
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza Facial',
    description: 'Tratamiento con vaporizador y toalla caliente.',
    price: '20',
    imageSrc: 'https://picsum.photos/seed/core4/800/600?grayscale'
  },
  {
    id: 'masajes-lavado',
    name: 'Masajes & Lavado',
    description: 'Relajación capilar con productos de primera línea.',
    price: '15',
    imageSrc: 'https://picsum.photos/seed/core5/800/600?grayscale'
  }
]

export const ALL_SERVICES = [...PREMIUM_PACKAGES, ...CORE_SERVICES]
