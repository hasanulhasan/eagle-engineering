import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import ReviewInfo from './ReviewInfo';
import swal from 'sweetalert';
import useTitle from '../../Hooks/useTitle';

const Myreview = () => {
  useTitle('My review')
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-gold-eight.vercel.app/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you want to delete forever?')
    if (proceed) {
      fetch(`https://assignment-11-server-gold-eight.vercel.app/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          swal("Succeed!", "You have deleted review!", "success");
          const remaining = reviews.filter(rev => rev._id !== id);
          setReviews(remaining);
        })
    }
  }

  return (
    <div>
      <div className="overflow-x-auto">
        {
          reviews.length === 0 ?
            <>
              <h1 className='text-center text-4xl py-2 my-2 font-semibold'>You have no review</h1>
            </> :
            <>
              <h1 className='text-center text-4xl py-2 my-2 font-semibold'>You have total {reviews.length} reviews</h1>
            </>
        }
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
              reviews?.map(r => <ReviewInfo key={r._id} r={r} handleDelete={handleDelete}></ReviewInfo>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;