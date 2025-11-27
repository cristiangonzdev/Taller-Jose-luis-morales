'use client';

import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              Taller Jose Luis Morales
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Tu taller de confianza con más de 20 años de experiencia.
              Profesionalidad, cercanía y transparencia en cada servicio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              Ubicación
            </h4>
            <p className="text-slate-400 mb-4">
              Calle del Taller, 123<br />
              28001 Madrid<br />
              España
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver en Google Maps
            </Button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-400" />
              Horario
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex justify-between">
                <span className="font-medium text-white">Lunes - Viernes:</span>
                <span>9:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium text-white">Sábados:</span>
                <span>9:00 - 13:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium text-white">Domingos:</span>
                <span>Cerrado</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-amber-400" />
              Contacto
            </h4>
            <div className="space-y-3 text-slate-400">
              <a
                href="tel:+34123456789"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +34 123 456 789
              </a>
              <a
                href="mailto:info@tallerjoseluismorales.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@tallerjlm.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Taller Jose Luis Morales. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Aviso legal
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
