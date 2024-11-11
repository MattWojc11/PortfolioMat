import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-fixed bg-center text-white flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}>
      {/* Ciemny niebieski gradient tła (#0e254e i #3459ad) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e254e] via-[#3459ad] to-[#0e254e] opacity-90"></div>
      
      <div className="z-10 text-center px-6">
        {/* Tytuł (Imię i Nazwisko) z animacją */}
        <h1 className="text-7xl font-extrabold leading-tight text-[#0b1e3c] animate__animated animate__fadeIn animate__faster animate__delay-0.5s">
          Mateusz Wójcik
        </h1>
        
        {/* Rola zawodowa (Frontend Developer) z animacją */}
        <p className="text-2xl sm:text-3xl animate__animated animate__fadeIn animate__faster animate__delay-1s text-[#0b1e3c]">
          Frontend Developer
        </p>

        {/* Technologie (React | JavaScript | Tailwind CSS) z animacją */}
        <p className="text-2xl sm:text-3xl animate__animated animate__fadeIn animate__faster animate__delay-1.5s text-[#0b1e3c]">
          React | JavaScript | Tailwind CSS
        </p>
        
        {/* Przycisk "Poznaj mnie" z animacją */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="mt-10 inline-block py-4 px-10 bg-gradient-to-r from-[#3459ad] to-[#0e254e] text-white rounded-full text-lg font-semibold cursor-pointer hover:opacity-80 transition-all transform hover:scale-105 animate__animated animate__fadeIn animate__faster animate__delay-2s"
        >
          Poznaj mnie
        </Link>
      </div>
    </header>
  );
};

export default Header;