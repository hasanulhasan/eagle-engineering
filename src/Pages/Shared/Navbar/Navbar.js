import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to='/'><img className='mr-2' width="35" height="32" viewBox="0 0 24 24" alt='..' src='https://cdn-icons-png.flaticon.com/512/5463/5463436.png'></img> Eagle Engineering</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
          <li><Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;