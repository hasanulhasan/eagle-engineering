import React from 'react';

const ReviewInfo = ({ r }) => {
  const { service_name, name, review } = r;
  return (
    <tr>
      <th>{service_name}</th>
      <td>{review}</td>
      <td><button className="btn btn-square btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button></td>
      <td><button className="btn">Edit</button></td>
    </tr>
  );
};

export default ReviewInfo;