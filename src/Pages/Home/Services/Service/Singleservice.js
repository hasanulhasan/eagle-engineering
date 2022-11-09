import React from 'react';

const Singleservice = ({ service }) => {
  console.log(service);
  const { title, price, rating, description, img } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt=".." className='h-72' /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <p>Rating: {rating}</p>
        <p>{description}</p>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-warning btn-outline">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Singleservice;