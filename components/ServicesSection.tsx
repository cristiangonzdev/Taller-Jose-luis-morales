'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Droplet, Activity, Disc, CircleDot, Navigation } from 'lucide-react';


const services = [
  {
    title: 'Cambio de aceite',
    description: 'Realizamos cambios de aceite y filtros siguiendo las especificaciones del fabricante para alargar la vida útil del motor y mantener el coche en perfecto estado.',
    icon: Droplet,
    image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Diagnóstico de motores',
    description: 'Disponemos de maquinaria de diagnosis para detectar averías electrónicas y mecánicas de forma rápida y precisa, evitando sustos y reparaciones innecesarias.',
    icon: Activity,
    image: 'https://images.pexels.com/photos/4315570/pexels-photo-4315570.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Frenos',
    description: 'Revisamos y sustituimos pastillas, discos y líquido de frenos para garantizar tu seguridad y la de los tuyos en cada trayecto.',
    icon: Disc,
    image: '/images/taller/seccion_frenos.webp'
  },
  {
    title: 'Neumáticos',
    description: 'Asesoramos en la elección de neumáticos y realizamos montaje, equilibrado y revisión del desgaste para un agarre óptimo en todo momento.',
    icon: CircleDot,
    image: '/images/taller/servicio-neumaticos.webp'
  },
  {
    title: 'Suspensión y dirección',
    description: 'Solucionamos ruidos, vibraciones y problemas de estabilidad revisando la suspensión y la dirección para que tu conducción sea cómoda y segura.',
    icon: Navigation,
    image: 'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function ServicesSection() {
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
    <section id="servicios" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/images/taller/seccionservicios.webp')] bg-cover bg-center"></div>
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto font-semibold">
            Ofrecemos una amplia gama de servicios mecánicos con la garantía de años de experiencia y atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
