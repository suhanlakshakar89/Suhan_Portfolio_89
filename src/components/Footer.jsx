import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 py-4"> 

      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center"> 
        <div className='flex items-center gap-4'> 
        <a href="tel:8302181931" className="text-cyan-400 hover:text-blue-600" target='_blank'>
          Phone : 8302181931</a>
        <a href="mailto:suhanlakshakar3222@gmail.com" className="text-cyan-400 hover:text-blue-600 cursor-pointer" target='_blank'> Email: suhanlakshakar3222@gmail.com</a> 
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
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
            LeedCode
          </a> 


        </div>
      </div> 
      
    </footer>
  );
}

export default Footer;
