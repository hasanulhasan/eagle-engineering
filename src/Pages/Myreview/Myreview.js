import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import ReviewInfo from './ReviewInfo';

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // const { service_name, name, email, review } = useLoaderData();

  console.log(reviews[0], reviews[1]);

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className='text-center text-4xl py-2 my-2 font-semibold'>You have total {reviews.length} reviews</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Your Review</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              reviews.map(r => <ReviewInfo key={r._id} r={r}></ReviewInfo>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;