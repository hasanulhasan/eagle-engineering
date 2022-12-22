import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewDetails from './ReviewDetails';
import ReviewForm from './ReviewForm';

const ServiceDetails = () => {
  useTitle('Details')
  const { user } = useContext(AuthContext);
  const { title, price, rating, description, img, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    const reviewInfo = {
      serviceId: _id,
      service_name: title,
      price: price,
      rating: rating,
      pic: user.photoURL,
      name,
      email,
      review
    }
    //for review posting
    fetch('https://assignment-11-server-gold-eight.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          setRefresh(refresh);
          form.reset();
          alert('your review added')
        }
      })
      .catch(err => console.error(err))
  }

  //for review showing
  useEffect(() => {
    fetch(`https://assignment-11-server-gold-eight.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
        setRefresh(!refresh);
      })
  }, [_id, refresh])


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
        <div className="divider lg:divider-horizontal font-extrabold"></div>
        <div className="grid flex-grow h-full w-2/5 card bg-base-300 rounded-box place-items-center">
          {/* this is right side part */}
          {/* user review */}
          {
            reviews.map(rev => <ReviewDetails key={rev._id} rev={rev} setReviews={setReviews}></ReviewDetails>)
          }
          {/* input user review  start*/}
          {
            user?.uid ?
              <>
                <ReviewForm handleReview={handleReview}></ReviewForm>
              </> :
              <>
                <h1 className='py-6'>To put Review you must <Link to='/login' className='text-white'>Login</Link> first. </h1>
              </>
          }
        </div>
      </div>
    </div >
  );
};

export default ServiceDetails;