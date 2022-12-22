import React from 'react';

const Hero2 = () => {
  return (
    <div className='my-10'>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full lg:w-1/3">
            <img className='rounded-lg' src="https://www.usnews.com/dims4/USNEWS/b6bc56f/2147483647/crop/2120x1414%2B0%2B0/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F22%2Fc8%2F18f764aa418f9248a8e76369e3fb%2F200720-materialsengineer-stock.jpg" alt="" />
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-400">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <h2 className="text-3xl font-semibold leading-none">Hire Our Best Engineer for you service</h2>
            <p className="mt-4 mb-8 text-sm">Here you can consult our experienced Engineer for your Project</p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-primary">Hire</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;