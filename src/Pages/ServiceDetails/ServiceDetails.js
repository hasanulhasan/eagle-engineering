import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { title, price, rating, description, img, _id } = useLoaderData();
  return (
    <div>
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="grid flex-grow h-full w-3/5 card bg-base-300 rounded-box place-items-center">
          {/* this is left side part */}

          <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
            <h2 className="text-5xl my-5 p-4">{title}</h2>
            <figure><img src={img} alt=".." className='h-80 rounded-lg' /></figure>
            <div className="p-2 my-5">
              <p className="text-2xl text-warning">Price ${price}</p>
              <p className="text-2xl text-info pb-4">Rating: {rating}</p><hr />
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
        <div className="divider lg:divider-horizontal font-extrabold">>></div>

        <div className="grid flex-grow h-full w-2/5 card bg-base-300 rounded-box place-items-center">
          {/* this is right side part */}
          {/* user review */}

          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
            </div>
          </div>
          {/* user review end*/}
          {/* user input review */}
          <div className="form-control mt-2 pb-5 w-4/5">
            <h1 className="text-2xl text-info pb-4">Put a Review</h1>
            <label className="input-group input-group-vertical">
              <span>Your Email</span>
              <input type="text" placeholder="info@site.com" className="input input-bordered" />
            </label>
            <label className="input-group input-group-vertical mt-2">
              <span>Your Review</span>
              <input type="text" placeholder="abc.." className="input input-bordered" />
            </label>
          </div>
          {/* user input review finish*/}

        </div>
      </div>
    </div >
  );
};

export default ServiceDetails;