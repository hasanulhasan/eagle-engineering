import React from 'react';

const State = () => {
  return (
    <div className='my-10'>
      <div className='text-center'>
        <p className="text-2xl font-bold text-yellow-300">Insights</p>
        <h1 className="text-5xl font-semibold py-3 ">Our Service Insights</h1>
        <p className='pb-8'>Our Quality services is showing on data.</p>
      </div>
      <div className="stats shadow w-full">

        <div className="stat place-items-center">
          <div className="stat-title">Happy Client</div>
          <div className="stat-value">17,320</div>
          <div className="stat-desc">From January 1995 to February 2022</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Projects</div>
          <div className="stat-value text-warning">3,250</div>
          <div className="stat-desc text-warning">↗︎ 40 (12%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Registered user</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Positive Feedback</div>
          <div className="stat-value text-warning">97.4%</div>
          <div className="stat-desc text-warning">↗︎ 40 (2%)</div>
        </div>

      </div>
    </div>
  );
};

export default State;