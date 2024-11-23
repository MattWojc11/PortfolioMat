import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="bg-[#0e254e] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Prawa część - Obrazek */}
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 bg-[#3459ad] rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/new-profile.jpg" 
              alt="Profile" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Lewa część - Tekst */}
        <div className="text-white flex flex-col justify-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            O mnie
          </h2>
          <p className="text-lg sm:text-xl text-[#d1d1d1] leading-relaxed">
            Cześć! Jestem frontend developerem z pasją do tworzenia nowoczesnych, interaktywnych aplikacji internetowych. Moje projekty łączą estetykę i funkcjonalność, aby zapewnić użytkownikom wyjątkowe doświadczenia.
          </p>
          <p className="text-lg sm:text-xl text-[#d1d1d1] leading-relaxed">
            W mojej pracy cenię kreatywność i dbałość o szczegóły. Zawsze szukam nowych wyzwań, aby doskonalić swoje umiejętności i tworzyć rozwiązania, które są nie tylko użyteczne, ale także wizualnie atrakcyjne.
          </p>
          <div className="mt-8">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="inline-block bg-[#3459ad] text-white py-3 px-8 rounded-full text-lg font-semibold hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg"
            >
              Zobacz Umiejętności
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;