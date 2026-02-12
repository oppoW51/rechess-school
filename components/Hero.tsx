import React from 'react';
import Button from './Button';

const YANDEX_FORM_LINK = "https://forms.yandex.ru/";
const TG_CHANNEL = "https://t.me/rechess_school";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-950">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Special Offer Badge */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-gradient-to-r from-amber-900/40 to-amber-800/20 border border-amber-700/50 text-amber-100 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:border-amber-600/60 transition-colors cursor-default">
            <i className="fa-solid fa-star text-amber-400 text-[10px]"></i>
            Пробное занятие — бесплатно!
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto">
          Системное обучение шахматам <br className="hidden md:block"/>
          <span className="text-gray-400">для детей и взрослых</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Школа Евгения Решетникова. Учим думать, планировать и побеждать через глубокое понимание игры, а не заучивание схем.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <Button href={YANDEX_FORM_LINK} className="min-w-[240px] text-base">
            Записаться на пробное
          </Button>
          
          <a 
            href={TG_CHANNEL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-colors gap-2 min-w-[240px]"
          >
            <i className="fa-brands fa-telegram text-lg text-[#229ED9]"></i>
            Канал школы
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500">
           <div className="text-center group">
             <div className="text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">10+</div>
             <div className="text-xs uppercase tracking-wider mt-1">Лет опыта</div>
           </div>
           <div className="text-center group">
             <div className="text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">Online</div>
             <div className="text-xs uppercase tracking-wider mt-1">Формат</div>
           </div>
           <div className="text-center group">
             <div className="text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">Авторская</div>
             <div className="text-xs uppercase tracking-wider mt-1">Программа</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;