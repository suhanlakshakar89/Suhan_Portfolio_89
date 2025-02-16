import React from 'react';

function NavBar() {
  return (
    <nav className="shadow-lg text-white bg-gray-900">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Flowa</div>
          <ul className="hidden md:flex space-x-10">
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
