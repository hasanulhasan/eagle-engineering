import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { title, price, rating, description, img, _id } = useLoaderData();
  return (
    <div>
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="grid flex-grow h-full w-3/5 card bg-base-300 rounded-box place-items-center">

          <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
            <h2 className="text-5xl my-5 p-10">{title}</h2>
            <figure><img src={img} alt=".." className='h-96 rounded-lg' /></figure>
            <div className="p-10 my-5">
              <p className="text-2xl text-warning">Price ${price}</p>
              <p className="text-2xl text-info pb-5">Rating: {rating}</p><hr />
              <div className="rating pt-2">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className="text-xl mt-2">{description}</p>
            </div>
          </div>

        </div>
        <div className="divider lg:divider-horizontal">>></div>
        <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </div >
  );
};

export default ServiceDetails;