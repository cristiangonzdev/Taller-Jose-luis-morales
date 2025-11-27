'use client';

import { useEffect, useRef, useState } from 'react';
import ReviewCard from '@/components/ReviewCard';

const reviews = [
  {
    name: 'María G.',
    comment: 'Taller de confianza. Siempre me explican todo antes de reparar y cumplen los plazos.',
    rating: 5
  },
  {
    name: 'Carlos R.',
    comment: 'Llevo años trayendo aquí mis coches. Trato cercano, precios justos y ningún susto.',
    rating: 5
  },
  {
    name: 'Lucía P.',
    comment: 'Me ayudaron con una avería complicada y todo fue transparente desde el principio. Muy recomendables.',
    rating: 5
  },
  {
    name: 'Javier M.',
    comment: 'Buen servicio, rápidos y profesionales. Da gusto encontrar talleres así.',
    rating: 5
  }
];

export default function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="opiniones" className="py-20 bg-slate-900 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Opiniones de nuestros clientes
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            La mejor garantía son las reseñas de quienes ya confían en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              {...review}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
