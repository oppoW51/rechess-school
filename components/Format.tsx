import React from 'react';

const Format: React.FC = () => {
  const items = [
    {
      icon: "fa-solid fa-users",
      title: "Мини-группы",
      text: "Занятия проходят в группах по 4-5 человек. Это оптимальный размер, который позволяет сохранять высокую динамику урока, но при этом преподаватель успевает уделить время каждому ученику лично."
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Активная практика",
      text: "Никаких скучных лекций. Все ученики активно вовлечены в процесс, отвечают на вопросы и решают задачи прямо на уроке."
    },
    {
      icon: "fa-solid fa-house-laptop",
      title: "Удобный онлайн",
      text: "Занятия из дома в комфортной обстановке. Экономия времени на дорогу и возможность заниматься из любой точки мира."
    },
    {
      icon: "fa-solid fa-chess-board",
      title: "Современные инструменты",
      text: "Использование профессиональных шахматных платформ для демонстрации и анализа (Lichess / Chess.com)."
    }
  ];

  return (
    <section className="py-24 bg-gray-950 border-t border-gray-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#229ED9] uppercase mb-3">Как мы занимаемся</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Формат обучения
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 text-[#229ED9] shadow-lg">
                <i className={`${item.icon} text-xl`}></i>
              </div>

              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Format;