import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-16 bg-base-200 my-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://challenges.robotevents.com/uploads/0000795_original.jpg" alt='..' className="max-w-sm rounded-lg shadow-2xl" />
        <div className='w-3/5'>
          <h1 className="text-5xl font-bold">Welcome to Eagle Engineering Ltd.</h1>
          <p className="py-6">We are providing Various Civil and Constructional Service for you Home and Mini Industry. We are best choice for your service. </p>
          <button className="btn btn-primary">Let's Go Services</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;