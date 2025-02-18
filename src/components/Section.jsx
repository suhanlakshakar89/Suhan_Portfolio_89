
import React from 'react';
// import { Link } from 'react-router-dom'; 
import SuhanImage from '../assets/Suhan_Flat_1-photoroom.png';

function Section() {
  return (
    <section id="portfolio" className="bg-slate-700">

      <div className="mx-auto px-4 py-3">
        <h2 className="text-3xl font-bold text-center mb-4">Portfolio</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="m-5 p-5">
            <h1 className="text-4xl font-bold text-yellow-300 py-3 text-center md:text-left">
              Hello!
            </h1>
            <h3 className="text-white text-3xl font-bold text-center md:text-left">
              I'm a Professional Web Designer &
            </h3>
            <h3 className="text-yellow-300 text-3xl font-bold text-center md:text-left">
              Software Developer
            </h3>
            <div className="py-4">
              <h3 className="text-2xl text-white">Skills</h3>
              <ul className="list-disc list-inside font-semibold text-emerald-300 pl-6 space-y-2">
                <li><span className="font-bold text-white">Language:</span> Python, Java, SQL, C, JS</li>
                <li><span className="font-bold text-white">Framework:</span> Pandas, Numpy, Matplotlib, Scikit-learn</li>
                <li><span className="font-bold text-white">Tools:</span> Excel, PowerPoint, MySQL, Canva, Arduino, Git, GitHub, OverLeaf LaTeX</li>
                <li><span className="font-bold text-white">Platform:</span> Jupyter Notebook, Visual Studio Code, IntelliJ IDEA</li>
                <li><span className="font-bold text-white">Soft Skills:</span> Machine Learning, DSA, Frontend Dev, Rapport Building, People Management</li>
                <li><span className="font-bold text-white">Libraries:</span> React, Tailwind, Bootstrap</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* <Link to="/projects"> */} 
              <a href="/Projects" target='_blank'>
              <button className="bg-blue-500 text-white text-xl rounded-lg p-2 hover:bg-blue-700 shadow-lg w-full md:w-auto">
                  View Projects
              </button>
                </a>
              {/* </Link> */}

              <button className="bg-green-400 text-white text-xl rounded-lg p-2 hover:bg-green-600 shadow-lg w-full md:w-auto">
                Download CV
              </button>

              <button className="bg-purple-500 text-white text-xl rounded-lg p-2 hover:bg-purple-700 shadow-lg w-full md:w-auto">
                Hire me
              </button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mt-8 md:mt-0">
            <img
              src={SuhanImage}
              alt="Suhan Lakshakar"
              className="object-cover h-96 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">Suhan Lakshakar</h3>
              <p className="text-white">IT Engineer</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Section;