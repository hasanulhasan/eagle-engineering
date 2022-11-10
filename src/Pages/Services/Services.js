import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
  useTitle('Services')
  const [services, setServices] = useState([]);
  const [isloading, setIslaoding] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/servicesall')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setIslaoding(false)
      })
  }, [])

  return (
    <div>
      {
        isloading ?
          <>
            <div className='flex justify-center'>
              <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            </div>
          </> : <></>
      }
      <h1 className='text-center text-4xl py-2 my-2 font-semibold'>Here you can see all Services</h1>
      <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;