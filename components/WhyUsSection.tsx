'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, FileText, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Experiencia y tradición',
    description: 'Llevamos muchos años en el sector, conocemos a nuestros clientes y a sus vehículos. Sabemos lo que funciona a largo plazo.'
  },
  {
    icon: Users,
    title: 'Clientes fieles y satisfechos',
    description: 'Gran parte de nuestro trabajo viene de clientes que repiten y nos recomiendan a familiares y amigos.'
  },
  {
    icon: FileText,
    title: 'Transparencia en los presupuestos',
    description: 'Explicamos las reparaciones con claridad antes de hacerlas, sin sorpresas ni letra pequeña.'
  },
  {
    icon: Wrench,
    title: 'Taller equipado y actualizado',
    description: 'Contamos con herramientas y equipos de diagnosis modernos para trabajar con vehículos actuales y clásicos.'
  }
];

export default function WhyUsSection() {
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
    <section id="por-que-elegirnos" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/images/taller/fonotaller_1.webp')] bg-cover bg-center blur-sm"></div>
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por qué elegir Taller Jose Luis Morales
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto font-semibold">
            Nuestros clientes confían en nosotros desde hace años porque ofrecemos un servicio honesto,
            cercano y orientado a la seguridad de cada vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
