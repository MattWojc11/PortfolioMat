import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0e254e] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Moje Projekty</h2>
        <p className="text-lg sm:text-xl text-[#d1d1d1] mt-4">Zapoznaj się z moimi najnowszymi realizacjami.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {/* Projekt 1 */}
        <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-lg shadow-xl overflow-hidden flex flex-col">
          <img 
            src="/assets/ss1.png" 
            alt="Projekt 1" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg transform transition-transform hover:scale-105"
          />
          <h3 className="text-2xl font-bold text-white mb-2">Projekt 1</h3>
          <p className="text-[#d1d1d1] mb-4">Krótki opis projektu, np. aplikacja do zarządzania zadaniami, która pomaga w planowaniu i organizacji pracy.</p>
          <div className="mt-auto flex space-x-4">
            <a 
              href="https://project1-url.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Zobacz projekt
            </a>
            <a 
              href="https://github.com/project1-repo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Projekt 2 */}
        <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-lg shadow-xl overflow-hidden flex flex-col">
          <img 
            src="/assets/ss2.png" 
            alt="Projekt 2" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg transform transition-transform hover:scale-105"
          />
          <h3 className="text-2xl font-bold text-white mb-2">Projekt 2</h3>
          <p className="text-[#d1d1d1] mb-4">Krótki opis projektu, np. responsywna strona internetowa zaprojektowana z użyciem Tailwind CSS.</p>
          <div className="mt-auto flex space-x-4">
            <a 
              href="https://project2-url.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Zobacz projekt
            </a>
            <a 
              href="https://github.com/project2-repo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Projekt 3 */}
        <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-lg shadow-xl overflow-hidden flex flex-col">
          <img 
            src="tu sciezka pliku" 
            alt="Projekt 3" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg transform transition-transform hover:scale-105"
          />
          <h3 className="text-2xl font-bold text-white mb-2">Projekt 3</h3>
          <p className="text-[#d1d1d1] mb-4">Krótki opis projektu, np. narzędzie analityczne do wizualizacji danych w czasie rzeczywistym.</p>
          <div className="mt-auto flex space-x-4">
            <a 
              href="https://project3-url.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Zobacz projekt
            </a>
            <a 
              href="https://github.com/project3-repo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Projekt 4 */}
        <div className="p-6 bg-gradient-to-r from-[#3459ad] to-[#0e254e] rounded-lg shadow-xl overflow-hidden flex flex-col">
          <img 
            src="tu sciezka pliku" 
            alt="Projekt 4" 
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg transform transition-transform hover:scale-105"
          />
          <h3 className="text-2xl font-bold text-white mb-2">Projekt 4</h3>
          <p className="text-[#d1d1d1] mb-4">Krótki opis projektu, np. aplikacja mobilna z natywnym wsparciem dla systemów iOS i Android.</p>
          <div className="mt-auto flex space-x-4">
            <a 
              href="https://project4-url.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Zobacz projekt
            </a>
            <a 
              href="https://github.com/project4-repo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#ffffff] text-[#0e254e] py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;