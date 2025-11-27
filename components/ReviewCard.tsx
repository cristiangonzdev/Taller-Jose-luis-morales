'use client';

import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  comment: string;
  rating: number;
  index: number;
  isVisible: boolean;
}

export default function ReviewCard({
  name,
  comment,
  rating,
  index,
  isVisible
}: ReviewCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-slate-700 mb-4 leading-relaxed italic">
        "{comment}"
      </p>

      <p className="font-semibold text-slate-900">
        {name}
      </p>
    </div>
  );
}
