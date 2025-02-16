import React from 'react';
import { Link } from 'react-router-dom';


function Section() {
  return (
    <section id="portfolio" className=" bg-slate-700">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-.5 py-1">Portfolio</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="m-5 p-5">
            <div>
              <h1 className="flex justify-center font-sans text-4xl font-bold text-yellow-300 py-3">
                Hello!
              </h1>
              <h3 className="text-white font-sans text-3xl font-bold">
                I'm a Professional Web Designer &
              </h3>
              <h3 className="text-yellow-300 font-sans text-3xl font-bold">
                Software Developer
              </h3>
              <div className='py-4'>
                <h3 className='text-2xl text-white font-sans'>Skills</h3>
                <ul className=" list-disc list-inside font-semibold text-emerald-300 pl-6 space-y-2">
                <li>
                  <span className="font-bold text-white">Language:</span> Python, Java, SQL, C, JS</li>
                <li>
                  <span className="font-bold text-white">Framework:</span> Pandas, Numpy, Matplotlib, Scikit-learn</li>
                <li>
                  <span className="font-bold text-white">Tools:</span> Excel, PowerPoint, MySQL, Canva, Arduino, OverLeaf LaTeX</li>
                <li>
                  <span className="font-bold text-white">Platform:</span> Jupyter Notebook, Visual Studio Code, IntelliJ IDEA</li>
                <li>
                  <span className="font-bold text-white">Soft Skills:</span> Machine Learning, DSA, Frontend Dev, Rapport Building, People Management,</li>
                <li>
                  <span className="font-bold text-white">Libraries:</span> React, Tailwind, Bootstrap</li>
              </ul>
               
              </div>

              

            </div>

            {/* View Projects Pages */}
            {/* <Link to="/projects"> */}
            <a href="/Projects" target='_blank'>
              <button className="bg-blue-500 text-white font-sans text-xl rounded-lg p-2 m-3 hover:bg-blue-700 my-6 shadow-lg" formTarget='_blank'>
                View Projects
              </button>
            </a>
            {/* </Link> */}

            {/*  Doenload CV  */}
            <button className="bg-green-400 text-white font-sans text-xl rounded-lg p-2 m-3 hover:bg-green-600 my-6 shadow-lg">
              Download Cv
            </button>

            {/* Hire me opition  */}
            <button className="bg-purple-500 text-white font-sans text-xl rounded-lg p-2 m-3 hover:bg-purple-700 my-6 shadow-lg">
              Hire me
            </button>


          </div>

          <div className="rounded-lg overflow-hidden ">
            <img
              src="/src/assets/Suhan_Flat_1-photoroom.png"
              alt="Project 1"
              className="object-cover h-96"
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


