import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero min-h-16 bg-base-200 my-10 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://challenges.robotevents.com/uploads/0000795_original.jpg" alt='..' className="max-w-sm rounded-lg shadow-2xl" />
        <div className='w-3/5'>
          <h1 className="text-5xl font-bold">We are dedicated to you!</h1>
          <p className="py-6">Eagle Engineering Services Ltd. launched late in 1995 by Engr. Abu Mohammed Masud, without any Financial investment and without any employee on the payroll. It initiated with a very small geotechnical laboratory setup in a rented garage. In early 1992, Beximco Engineering Ltd awarded a small contract of bored pile work for Rangunia– Hathazaree electrical transmission line at Chittagong. That was the beginning and later in the following years IES did many small diameter bored pile construction projects and completed successfully. Few of them are mentioned here- UGC building, laundry building of Hotel Sonergaon, Parishankhyan Bhaban at Agargaon, Twin tower, Concord Grand at Shantinagar, Concord Regency at Panthapath, Golf Heights at Banani, ShundarbanTechnopark at Darussalam etc and many other small building projects. </p>
          <Link to='services'><button className="btn btn-warning">Let's Go Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;