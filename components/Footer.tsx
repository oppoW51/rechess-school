import React from 'react';

const TG_CHANNEL = "https://t.me/rechess_channel";
const TG_CONTACT = "https://t.me/evgeny_rechess";

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 w-auto opacity-80"
              />
            </div>
            <p className="text-gray-500 max-w-sm font-light text-sm leading-relaxed">
              Школа системного обучения шахматам Евгения Решетникова. 
              Мы создаем среду для интеллектуального развития детей и взрослых.
            </p>
          </div>

          {/* Telegram Ecosystem */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Telegram</h4>
            <div className="flex flex-col gap-4">
              <a href={TG_CHANNEL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#229ED9] transition-colors group">
                <i className="fa-brands fa-telegram text-lg w-6 text-center"></i>
                <span className="text-sm">Канал школы</span>
              </a>
              <a href={TG_CONTACT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <i className="fa-regular fa-comment-dots text-lg w-6 text-center"></i>
                <span className="text-sm">Написать тренеру</span>
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Контакты</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@rechess.ru" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <i className="fa-solid fa-envelope text-lg w-6 text-center"></i>
                <span className="text-sm">info@rechess.ru</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Rechess School. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
            <a href="/" className="hover:text-gray-400 transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;