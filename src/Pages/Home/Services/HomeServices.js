import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Singleservice from './Service/Singleservice';

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <div className='text-center'>
        <p className="text-2xl font-bold text-yellow-300">Service</p>
        <h1 className="text-5xl font-semibold py-3 ">Our Service At a Glance</h1>
        <p className='pb-8'>We are providing Various Civil and Constructional Service for you Home and Mini Industry. We are best choice for your service. </p>
      </div>
      <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <Singleservice key={service.service_id} service={service}></Singleservice>)
        }
      </div>
      <div className='flex justify-center my-3'>
        <Link to='services'><button className="btn btn-wide btn-secondary">See all</button></Link>
      </div>
    </div>
  );
};

export default HomeServices;