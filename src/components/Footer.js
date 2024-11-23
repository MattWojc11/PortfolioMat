import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0e254e] to-[#3459ad] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Górna sekcja */}
        <div className="text-center space-y-4">
          {/* Logo i krótki opis */}
          <h1 className="text-lg font-extrabold">Mateusz Wójcik</h1>
          <p className="text-sm text-[#d1d1d1]">
            Frontend Developer | React | JavaScript | Tailwind CSS
          </p>

          {/* Ikony Social Media */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mateuszwj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ffffff] transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mateuszwj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ffffff] transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/mateuszwj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ffffff] transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Linki nawigacyjne */}
        <div className="flex justify-center space-x-6 mt-6 text-sm">
          <a
            href="#projects"
            className="hover:text-[#ffffff] text-[#d1d1d1] transition-transform transform hover:scale-105"
          >
            Moje Projekty
          </a>
          <a
            href="mailto:mateusz@example.com"
            className="hover:text-[#ffffff] text-[#d1d1d1] transition-transform transform hover:scale-105"
          >
            Kontakt
          </a>
        </div>

        {/* Dolna sekcja */}
        <div className="mt-6 text-center text-xs text-[#d1d1d1]">
          <p>&copy; {new Date().getFullYear()} Mateusz Wójcik. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;