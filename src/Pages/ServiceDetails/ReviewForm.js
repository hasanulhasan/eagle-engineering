import React from 'react';

const ReviewForm = ({ handleReview }) => {
  return (
    <form className="form-control mt-2 pb-5 w-4/5" onSubmit={handleReview}>
      <h1 className="text-2xl text-info pb-4">Put a Review</h1>
      <input type="text" placeholder="Name" name='name' className="input input-bordered input-info w-full" required />
      <input type="email" placeholder="Email" name='email' className="input input-bordered input-info w-full mt-2" required />
      <input type="text" placeholder="Your review" name='review' className="input input-bordered input-info w-full mt-2" required />
      <div className='mt-4 flex justify-center'>
        <button className="btn btn-wide btn-success btn-outline">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;