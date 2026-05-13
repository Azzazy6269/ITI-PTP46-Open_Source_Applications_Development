import React from 'react'

const About = () => {
  return (
    <div id="about" className='bg-white py-20 px-10 min-h-[50vh]'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12'>
        
        <div className='lg:w-1/3'>
          <h1 className='text-4xl font-bold text-gray-800 drop-shadow-md'>
            About Me
          </h1>
        </div>

        <div className='lg:w-2/3 flex flex-col items-start'>
          <p className='text-gray-600 text-lg leading-relaxed'>
            I am a software developer with a passion for creating innovative solutions. 
            I have experience in various programming languages and frameworks, and I am 
            always eager to learn new technologies. My goal is to build applications 
            that make a positive impact on users' lives.
          </p>
          
          <a 
            href="/Mohammed Ibrahim-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 mt-8 px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 no-underline"
            >
            Resume
          </a>
        </div>

      </div>
    </div>
  )
}

export default About