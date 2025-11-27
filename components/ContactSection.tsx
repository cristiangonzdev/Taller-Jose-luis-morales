'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    matricula: '',
    mensaje: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado. Te responderemos lo antes posible.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Reserva tu cita o consúltanos sin compromiso
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Cuéntanos qué le ocurre a tu vehículo o qué servicio necesitas. Te asesoramos y buscamos
            el mejor momento para atenderte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                ¿Prefieres llamarnos?
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-slate-300 mb-3">
                    Llámanos directamente y te atendemos de inmediato
                  </p>
                  <a
                    href="tel:+34123456789"
                    className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-3"
                  >
                    <Phone className="h-8 w-8" />
                    +34 123 456 789
                  </a>
                </div>

                <Button
                  size="lg"
                  onClick={() => window.location.href = 'tel:+34123456789'}
                  className="bg-amber-500 hover:bg-amber-600 text-white w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar ahora
                </Button>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-sm text-slate-400">
                    Horario de atención telefónica:
                  </p>
                  <p className="text-slate-200 font-medium mt-1">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                  <p className="text-slate-200 font-medium">
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div>
                <Label htmlFor="nombre" className="text-slate-900">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="text-slate-900">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <Label htmlFor="matricula" className="text-slate-900">
                  Matrícula
                </Label>
                <Input
                  id="matricula"
                  name="matricula"
                  type="text"
                  value={formData.matricula}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="1234 ABC"
                />
              </div>

              <div>
                <Label htmlFor="mensaje" className="text-slate-900">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="mt-2 min-h-[120px]"
                  placeholder="Cuéntanos qué necesitas o qué le ocurre a tu vehículo..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar consulta
              </Button>

              <p className="text-sm text-slate-500 text-center">
                Te responderemos lo antes posible para confirmar la cita o resolver tus dudas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
