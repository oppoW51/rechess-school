import React, { useState, useEffect } from 'react';
import Button from './Button';

// Global Constants
const YANDEX_FORM_LINK = "https://forms.yandex.ru/"; 
const TG_CHANNEL = "https://t.me/rechess_channel"; 
const TG_CONTACT = "https://t.me/evgeny_rechess"; 

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Navigation Order: Coach -> Methodology -> Classes -> Contacts
  const navLinks = [
    { name: 'О тренере', href: '#coach' },
    { name: 'Методика', href: '#methodology' },
    { name: 'Группы', href: '#classes' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-gray-950/90 backdrop-blur-md border-gray-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
          <img 
            src="/logo.png" 
            alt="Rechess Logo" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6 border-r border-gray-800 pr-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Telegram Ecosystem Icons (Desktop) */}
          <div className="flex items-center gap-4">
            <a href={TG_CHANNEL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#229ED9] transition-colors flex items-center gap-2" title="Канал школы">
              <i className="fa-brands fa-telegram text-lg"></i>
              <span className="text-xs font-medium hidden xl:block">Канал школы</span>
            </a>
            <a href={TG_CONTACT} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" title="Написать тренеру">
              <i className="fa-regular fa-comment-dots text-lg"></i>
              <span className="text-xs font-medium hidden xl:block">Написать тренеру</span>
            </a>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block pl-6">
          <Button href={YANDEX_FORM_LINK} variant="primary" className="py-2 px-5 text-xs font-bold uppercase tracking-wide">
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-200 py-3 border-b border-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex gap-6 py-4 justify-center">
             <a href={TG_CHANNEL} className="text-gray-400 hover:text-[#229ED9] flex flex-col items-center gap-1">
                <i className="fa-brands fa-telegram text-2xl"></i>
                <span className="text-[10px] uppercase">Канал школы</span>
             </a>
             <a href={TG_CONTACT} className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
                <i className="fa-regular fa-comment-dots text-2xl"></i>
                <span className="text-[10px] uppercase">Написать тренеру</span>
             </a>
          </div>

          <Button href={YANDEX_FORM_LINK} fullWidth className="mt-2">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;