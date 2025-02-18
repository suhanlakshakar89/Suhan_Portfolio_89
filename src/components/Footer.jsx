import React from 'react';
import Callimage from '../assets/icons8-call-50.png';
import Mailimage2 from '../assets/icons8-letter.gif';


function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 py-4"> 

      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">

        <img src={Callimage} alt="w-3 h-3 mr-2" />
          <a href="tel:8302181931" className="text-cyan-400 hover:text-blue-600"> 
          Phone : 8302181931
          </a>
          <img src={Mailimage2} alt="MailGif" className='w-5 h-5 mr-2' />
          <a href="mailto:suhanlakshakar3222@gmail.com" className="text-cyan-400 hover:text-blue-600"> 
            Email: suhanlakshakar3222@gmail.com
          </a>
        </div> 

        <div className="flex space-x-4">
          <a
            href="https://github.com/suhanlakshakar89"
            className="text-cyan-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suhan-lakshakar-478a68249/"
            className="text-cyan-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Suhan_89/"
            className="text-cyan-400 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </div>

      </div>

    </footer>
  );
}


export default Footer;