import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Индивидуальный подход",
      description: "Программа обучения адаптируется под ваш уровень и цели, будь то хобби или спорт."
    },
    {
      icon: "fa-solid fa-chess",
      title: "Современная теория",
      description: "Актуальные дебютные схемы и методы игры, которые используют современные гроссмейстеры."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Психология игры",
      description: "Учимся справляться с эмоциями, держать концентрацию и принимать решения под давлением."
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-gray-950 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">Почему Rechess</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Методика победы
            </h3>
          </div>
          <p className="text-gray-400 font-light text-base max-w-md text-right md:text-left">
            Мы строим обучение на трех китах: техника, психология и постоянная практика.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-sm bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                <i className={`${feature.icon} text-lg text-white group-hover:text-black transition-colors duration-300`}></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;