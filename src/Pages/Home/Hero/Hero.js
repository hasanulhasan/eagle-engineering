import React from 'react';

const Hero = () => {
  return (
    <div className='my-6'>
      <div className="hero h-96 rounded-lg" style={{ backgroundImage: `url("https://c-s-inc.us/wp-content/uploads/Engineering_Services_Banner.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to<br /><span className='text-warning'> Eagle Engineering</span></h1>
            <p className="mb-5 font-bold">We are providing Various Civil and Constructional Service for you Home and Mini Industry. We are best choice for your service.</p>
            <button className="btn btn-info">Let's Go Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;