import React from 'react';
import swal from 'sweetalert';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
  useTitle('Add Service')

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.serviceTitle.value;
    const img = form.photoURL.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;
    console.log(title, img, rating, price, description);

    const serviceInfo = {
      title,
      img,
      rating,
      price,
      description
    }

    fetch('http://localhost:5001/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          form.reset();
          swal("Succeed!", "You have added a Service!", "success");
        }
      })
      .catch(err => console.error(err))

  }

  return (
    <div className='flex justify-center'>
      <div className='w-1/2'>
        <form className="card-body outline-double outline-3 outline-offset-2 rounded-lg my-4 " onSubmit={handleSubmit}>
          <h1 className='text-center text-3xl py-2 font-semibold'>Add Services</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Service Title</span>
            </label>
            <input type="text" placeholder="Service Title" name="serviceTitle" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Rating</span>
            </label>
            <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Price</span>
            </label>
            <input type="text" placeholder="Price" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Description</span>
            </label>
            <input type="text" placeholder="Description" name="description" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-secondary btn-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;