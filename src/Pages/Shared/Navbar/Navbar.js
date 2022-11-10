import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    console.log('logout clicked');
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to='/'><img className='mr-2' width="35" height="32" viewBox="0 0 24 24" alt='..' src='https://cdn-icons-png.flaticon.com/512/5463/5463436.png'></img> Eagle Engineering</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>{user?.displayName}</li>
          <li>{user?.email}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
          {
            user?.uid ?
              <>
                <li><Link to='/myreview'>My Review</Link></li>
                <li><Link to='/addservices'>Add Service</Link></li>
              </> :
              <></>
          }
          <li><Link to='/services'>Services</Link></li>
          {/* <li><Link to='/signup'>Sign up</Link></li> */}
          {/* <li><button onClick={handleLogout} className="btn btn-outline btn-warning">LogOut</button></li> */}
          {/* <li><Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link></li> */}

          {
            user?.uid ?
              <>
                <li><button onClick={handleLogout} className="btn btn-outline btn-warning">LogOut</button></li>
              </>
              :
              <>
                <li><Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link></li>
                {/* <li><Link to='/signup'><button className="btn btn-outline btn-warning">SignUp</button></Link></li> */}
              </>
          }

        </ul>
      </div>
    </div>
  );
};

export default Navbar;