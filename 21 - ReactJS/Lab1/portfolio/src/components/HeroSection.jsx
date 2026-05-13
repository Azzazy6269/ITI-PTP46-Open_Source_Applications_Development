import React from 'react'
//import profile from '../..//profile.jpg'
const HeroSection = () => {
  const aboutSection = document.getElementById('about');
  const handleGetStartedClick = () => {
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
  <div className="hero bg-black text-white min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-40">
    <img
      src="/profile_photo_croped.jpeg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Mohammed Ibrahim</h1>
      <p className="py-6">
        Software Developer.
      </p>
      <button className="btn btn-outline " onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroSection