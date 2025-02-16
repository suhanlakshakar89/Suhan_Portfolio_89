import React from 'react'

export default function Projects() {
  return (
    <section className="py-6 bg-gray-100"> 

      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      
      </div>  

      <div className='my-4'> 
        <div className='flex justify-between text-xl' > 
          <h1 className='px-3'> 1. E-mail Spam Detection</h1>
          <a 
          href="https://github.com/suhanlakshakar89/Email-spam-detection" target='_blank'
          className='text-blue-500 hover:text-blue-800 font-bold underline font-sans px-3 '> Github </a>
        </div>

        <ul className='pl-8 list-disc list-inside space-y-2 py-2'> 
          <li> Developed an E-Mail Spam Detection Model which detects Spam mail based on written content in mail.</li>
          <li>Used google colab, various libraries like pandas, Numpy, sklearn, matplotlib, diffrent Algorithm of Naive Bayes.</li>
          <li> The best Accuracy we got is 96.8% from model.</li>
        </ul>
      </div> 

      <div className='my-4'> 
        <div className='flex justify-between text-xl' > 
          <h1 className='px-3'> 2. Medical Insurance Cost Prediction</h1>
          <a 
          href="https://github.com/suhanlakshakar89/Medical-Insurance-Cost-Prediction-" target='_blank'
          className='text-blue-500 hover:text-blue-800 font-bold underline font-sans px-3'> Github </a>
        </div> 

        <ul className='pl-8 list-disc list-inside space-y-2 py-2'> 
          <li>A data-driven approach to estimate future healthcare expenses for individuals or groups. Uses factors like age, health status, and medical history to forecast insurance premiums and potential claims.</li>
          <li> Used Jupy notebook, various libraries like pandas, Numpy, sklearn, matplotlib, diffrent Algorithm like linear and logistic Regression</li>
          
        </ul>
      </div> 

      <div className='my-4'> 
        <div className='flex justify-between text-xl' > 
          <h1 className='px-3'> 3. E-Commerce Website </h1>
          <a 
          href="https://github.com/suhanlakshakar89/Bazar_E-Commerce_Shopping" target='_blank'
          className='text-blue-500 hover:text-blue-800 font-bold underline font-sans px-3'> Github </a>
        </div> 

        <ul className='pl-8 list-disc list-inside space-y-2 py-2'> 
          <li>Built a responsive e-commerce website using React to deliver a smooth shopping experience.</li>
          <li>Used React Router to manage navigation between product pages, cart, and checkout and styled the site with Tailwind CSS for a modern, clean look that works great on all devices.</li>
          
        </ul>
      </div>

    </section>
  )
}
