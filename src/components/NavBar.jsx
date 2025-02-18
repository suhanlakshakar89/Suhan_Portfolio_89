
import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg text-white bg-gray-900">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Flowa</div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <ul className={`md:flex md:space-x-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li>
              <a href="#home" className="hover:text-blue-500">HOME</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">ABOUT</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">SERVICES</a>
            </li>
            <li>
              <a href="#resume" className="hover:text-blue-500">RESUME</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-500">PORTFOLIO</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-500">BLOG</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">CONTACT</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
}

export default NavBar;
