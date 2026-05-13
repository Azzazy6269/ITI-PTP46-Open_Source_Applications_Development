import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black py-20 px-10 flex flex-wrap '>
        
        <div id="upper" className='w-full text-center mb-16'>
            <h1 className='text-4xl font-bold text-gray-200 mb-6'>Skills</h1>
            <p className='max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed'>
                Highly motivated Computer and Systems Engineer and software Developer
                with a strong foundation in building scalable, enterprise-grade applications.
            </p>
        </div>

            <div id="lower-left" className='w-full lg:w-1/3 space-y-6'>
            <h2 className='text-sm uppercase tracking-widest text-gray-400 font-bold mb-4'>my focus</h2>
            
            <h3 className='text-xl font-bold text-gray-200'>Back-end</h3>
            <p className='text-gray-400 mb-4'>Node.js, Express.js, Django</p>
            
            <h3 className='text-xl font-bold text-gray-200'>Front-end</h3>
            <p className='text-gray-400'>React.js, HTML, CSS</p>
        </div>

        <div id="lower-right" className='w-full lg:w-2/3 space-y-5 lg:pl-20 mt-10 lg:mt-0'>
            <h3 className='font-bold text-gray-200'>Express.js</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="80" max="100"></progress>
            
            <h3 className='font-bold text-gray-200'>React.js</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="10" max="100"></progress>
            
            <h3 className='font-bold text-gray-200'>Node.js</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="40" max="100"></progress>
            
            <h3 className='font-bold text-gray-200'>MongoDB</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="70" max="100"></progress>
            
            <h3 className='font-bold text-gray-200'>JavaScript</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="90" max="100"></progress>
            
            <h3 className='font-bold text-gray-200'>Django</h3>
            <progress className="progress bg-white text-gray-500 w-full h-2" value="80" max="100"></progress>
        </div>
        
    </div>
  )
}

export default Skills