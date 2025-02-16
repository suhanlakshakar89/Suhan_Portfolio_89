import React, { useState, useEffect } from 'react';

function portfolio_2() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg text-white bg-gray-900 dark:bg-gray-800">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">Flowa</div>
            <ul className="hidden md:flex space-x-10">
              <li><a href="#home" className="hover:text-blue-500">HOME</a></li>
              <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
              <li><a href="#services" className="hover:text-blue-500">SERVICES</a></li>
              <li><a href="#resume" className="hover:text-blue-500">RESUME</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500">PORTFOLIO</a></li>
              <li><a href="#blog" className="hover:text-blue-500">BLOG</a></li>
              <li><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-6 bg-slate-700 dark:bg-gray-800">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Portfolio</h2>
          <div className="flex justify-between">
            <div className="m-5 p-5">
              <div>
                <h1 className="flex justify-center font-sans text-2xl font-bold text-yellow-300 py-3">Hello!</h1>
                <h3 className="text-white font-sans text-3xl font-bold">I'm Professional Web Designer &</h3>
                <h3 className="text-yellow-300 font-sans text-3xl font-bold">Wordpress Developer</h3>
                <p className="text-white max-w-lg my-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, vel qui optio nesciunt fugit recusandae. Ad, nihil veritatis. Sapiente placeat impedit quidem harum! Atque, tenetur?
                </p>
              </div>
              <button className="bg-purple-500 text-white font-sans text-xl rounded-lg p-2 m-3 hover:bg-purple-700 my-6 shadow-lg">Hire me</button>
              <button className="bg-green-400 text-white font-sans text-xl rounded-lg p-2 m-3 hover:bg-green-600 my-6 shadow-lg">Download CV</button>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/src/assets/Suhan_Flat_1-photoroom.png" alt="Project 1" className="object-cover h-96" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Suhan Lakshakar</h3>
                <p className="text-gray-600 dark:text-gray-300">IT Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p className="text-white">Email: example@example.com</p>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </footer>
    </div>
  );
}

export default portfolio_2;