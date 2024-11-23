import React from 'react';
import { Link } from 'react-scroll';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0e254e] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Prawa część - Ikony umiejętności */}
        <div className="order-2 lg:order-1 text-white flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#ffffff] animate__animated animate__fadeIn animate__faster">
            Moje Umiejętności
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-[#d1d1d1] animate__animated animate__fadeIn animate__faster animate__delay-0.5s">
            Specjalizuję się w tworzeniu interaktywnych, nowoczesnych aplikacji internetowych.
            Mam doświadczenie w pracy z językiem JavaScript, biblioteką React, a także w stylowaniu za pomocą Tailwind CSS.
          </p>
          <p className="text-lg sm:text-xl text-[#d1d1d1] animate__animated animate__fadeIn animate__faster animate__delay-1s">
            Moje umiejętności obejmują zarówno frontend, jak i responsywne projektowanie aplikacji.
            Staram się tworzyć aplikacje, które są łatwe w użyciu, wydajne i dobrze zoptymalizowane.
          </p>
          <div className="mt-8">
            {/* Przycisk do przewinięcia do sekcji "Projekty" */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block bg-gradient-to-r from-[#3459ad] to-[#0e254e] text-white py-3 px-8 rounded-full text-lg font-semibold hover:opacity-80 transition-all transform hover:scale-105 animate__animated animate__fadeIn animate__faster animate__delay-1.5s"
            >
              Zobacz Projekty
            </Link>
          </div>
        </div>

        {/* Lewa część - Ikony umiejętności */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-5">
            {/* Ikona React */}
            <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex justify-center items-center shadow-xl">
              <FaReact className="text-white w-16 h-16" />
            </div>
            {/* Ikona JavaScript */}
            <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex justify-center items-center shadow-xl">
              <FaJsSquare className="text-white w-16 h-16" />
            </div>
            {/* Ikona Tailwind CSS */}
            <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex justify-center items-center shadow-xl">
              <SiTailwindcss className="text-white w-16 h-16" />
            </div>
            {/* Ikona HTML */}
            <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex justify-center items-center shadow-xl">
              <FaHtml5 className="text-white w-16 h-16" />
            </div>
            {/* Ikona CSS */}
            <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex justify-center items-center shadow-xl">
              <FaCss3Alt className="text-white w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;