import React, { useEffect, useState } from 'react';
import Singleservice from './Service/Singleservice';

const Services = () => {
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
    </div>
  );
};

export default Services;