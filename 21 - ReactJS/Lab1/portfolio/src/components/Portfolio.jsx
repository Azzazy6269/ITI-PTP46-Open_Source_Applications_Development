import React from 'react'

const Portfolio = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">

      <h1 className="text-[70px] ml-5 mb-10 font-serif text-black">
        Portfolio
      </h1>

      <div className="grid grid-cols-3 gap-12 px-[70px] pb-10">

        <div className="h-[220px] bg-[#a7a29a] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            Web Development
          </h2>
        </div>

        <div className="h-[220px] bg-[#474747] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            Mobile Development
          </h2>
        </div>

        <div className="h-[220px] bg-[#a7a29a] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            Data Science
          </h2>
        </div>

        <div className="h-[220px] bg-[#474747] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase text-center leading-[1.4] relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            Machine Learning
          </h2>
        </div>

        <div className="h-[220px] bg-[#a7a29a] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase text-center leading-[1.4] relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            Cloud Computing
          </h2>
        </div>

        <div className="h-[220px] bg-[#474747] rounded-sm shadow-[0_8px_15px_rgba(0,0,0,0.15)] flex justify-center items-center">
          <h2 className="text-white text-[20px] font-normal uppercase relative after:content-[''] after:absolute after:w-[160px] after:h-[2px] after:bg-white/70 after:left-1/2 after:-translate-x-1/2 after:-bottom-5">
            DevOps
          </h2>
        </div>

      </div>
    </div>
  )
}

export default Portfolio