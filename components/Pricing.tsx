import React from 'react';
import Button from './Button';

const YANDEX_FORM_LINK = "https://forms.yandex.ru/";

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-gray-950 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 md:p-16 text-center overflow-hidden max-w-4xl mx-auto shadow-2xl">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#229ED9]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#229ED9] uppercase mb-4">Начните обучение</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Подберем формат под ваш уровень
            </h3>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed">
              Мы не используем шаблонные тарифы. Оставьте заявку, тренер оценит ваш уровень игры и определит в подходящую группу или предложит индивидуальный план занятий.
            </p>

            <Button 
              href={YANDEX_FORM_LINK} 
              variant="primary"
              className="px-10 py-4 text-base"
            >
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;