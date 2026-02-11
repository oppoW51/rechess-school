import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-gray-900 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="w-full max-w-5xl mx-auto">
          
          <div className="text-center mb-8">
             <h2 className="text-2xl md:text-3xl font-bold text-white">Посмотрите интервью</h2>
          </div>

          {/* Video Container: Aspect Ratio 16/9, Rounded, Shadow */}
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-black relative">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://rutube.ru/play/embed/0b6a9e864821e38b6792b26411eb9ccf" 
              title="Видео о школе" 
              frameBorder="0" 
              allow="clipboard-write; autoplay" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;