'use client';

import { useEffect, useState } from 'react';
import { Phone, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 bg-[url('/images/taller/fondooscuro.webp')] bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/50 hover:bg-amber-500/30">
            <Star className="h-3 w-3 mr-1 fill-amber-400" />
            Valoración excelente en Google
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Taller Jose Luis Morales
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
            Más de 20 años cuidando de tu vehículo con profesionalidad, cercanía y confianza.
          </p>

          <p className="text-base md:text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Somos un taller mecánico de referencia en la zona, con clientela fija y una valoración excelente en Google.
            Trabajamos con seriedad, explicamos cada reparación y te ofrecemos soluciones honestas para tu coche.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Pedir cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-black font-bold hover:bg-gray-100 hover:text-black text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => window.location.href = 'tel:+34123456789'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-white/20 to-white/60"></div>
    </section>
  );
}
