import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="bg-[#0e254e] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Prawa część - Obrazek */}
        <div className="flex justify-center items-center">
          <div className="w-3/4 h-3/4 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-full flex items-center justify-center p-5 shadow-xl">
            <img 
              src="/path/to/your-image.jpg" 
              alt="Profile" 
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Lewa część - Tekst */}
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#ffffff]">
            O mnie
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-[#d1d1d1]">
            Jestem frontend developerem z pasją do tworzenia nowoczesnych stron internetowych.
          </p>
          <p className="text-lg sm:text-xl text-[#d1d1d1]">
            Pracuję z pasją, dbając o szczegóły w każdym projekcie. Moje podejście do pracy
            koncentruje się na jakości, wydajności i użyteczności.
          </p>
          <div className="mt-8">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="inline-block bg-gradient-to-r from-[#3459ad] to-[#0e254e] text-white py-3 px-8 rounded-full text-lg font-semibold hover:opacity-80 transition-all transform hover:scale-105"
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