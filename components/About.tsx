import React from 'react';

const About: React.FC = () => {
  const credentials = [
    "Педагогический подход к каждому ученику",
    "Акцент на понимании логики игры",
    "Подробный разбор ваших партий",
    "Системная подготовка к турнирам"
  ];

  return (
    <section id="coach" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side - Styled like a portrait */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto border border-gray-800 bg-gray-800">
               <img 
                src="/coach.jpg" 
                alt="Евгений Александрович Решетников" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent p-6 pt-20">
                 <h3 className="text-white text-xl font-bold">Евгений Решетников</h3>
                 <p className="text-gray-300 text-sm">Основатель и главный тренер</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#229ED9] uppercase mb-4">О преподавателе</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Шахматы — это не магия, <br />
              <span className="text-gray-400">а дисциплина ума</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
              <p>
                Здравствуйте! Меня зовут Решетников Евгений Александрович. Я создал школу Rechess, чтобы поделиться своим опытом и любовью к этой древней игре.
              </p>
              <p>
                В своей работе я не обещаю «волшебных таблеток» или мгновенного результата. Шахматы требуют усердия. Моя задача как тренера — сделать этот процесс понятным, структурированным и увлекательным.
              </p>
              <p>
                Мы не просто заучиваем дебюты. Мы учимся анализировать позицию, строить планы и брать ответственность за свои решения — навыки, которые важны не только за доской, но и в жизни.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-[#229ED9] text-sm"></i>
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;