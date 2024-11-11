import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0e254e] text-white py-4">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center space-y-2">
        {/* Logo i informacje */}
        <p className="text-sm font-semibold">Mateusz Wójcik</p>
        <p className="text-xs">Frontend Developer | React | JavaScript | Tailwind CSS</p>
        
        {/* Ikony social media */}
        <div className="flex space-x-4 mt-2">
          <a
            href="https://github.com/mateuszwj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl transition duration-300 hover:text-[#3459ad]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mateuszwj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl transition duration-300 hover:text-[#3459ad]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/mateuszwj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl transition duration-300 hover:text-[#3459ad]"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Linki do projektów lub kontakt */}
        <div className="flex space-x-4 mt-2">
          <a
            href="#projects"
            className="text-sm hover:text-[#3459ad] transition duration-300"
          >
            Moje Projekty
          </a>
          <a
            href="mailto:mateusz@example.com"
            className="text-sm hover:text-[#3459ad] transition duration-300"
          >
            Kontakt
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs mt-2">
          <p>&copy; {new Date().getFullYear()} Mateusz Wójcik. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;