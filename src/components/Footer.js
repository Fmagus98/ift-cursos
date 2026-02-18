import React from 'react';

const Footer = () => {
    return (
          <footer
        className="bg-gray-900 text-white py-12 px-4"
      >
        <div
          className="container mx-auto text-center"
          >
          <div
            className="flex items-center justify-center gap-2 mb-4"
           >
            <img className="bg-white rounded-full w-16 h-16" src="/ift.png" alt="Ift"></img>
          </div>
          <p
            className="text-gray-400"
              >
            © 2024 Federico Martearena. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
};

export default Footer;