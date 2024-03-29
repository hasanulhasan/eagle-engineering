import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthProvider/AuthProvider';

const Signup = () => {

  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);
  const [isloading, setIslaoding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setError('');
        setIslaoding(true);
        form.reset();
      })
      .catch(e => {
        console.error(e);
        setError(e.message)
      })
  }

  return (
    <div className='flex justify-center my-5'>

      <div className="flex flex-col max-w-md w-1/2 p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        {
          isloading ?
            <>
              <div className='flex justify-center'>
                <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
              </div>
            </> : <></>
        }
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-400">Sign up here </p>
        </div>
        <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label for="name" className="block mb-2 text-sm">Name</label>
              <input type="name" name="name" id="name" placeholder="Abul Bsar" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label for="name" className="block mb-2 text-sm">PhotoURL</label>
              <input type="name" name="photoUrl" id="photoUrl" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">Password</label>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
            </div>
            <div className='flex justify-end'>
              <p>{error}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign up</button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
              <Link rel="noopener noreferrer" to='/login' className="hover:underline dark:text-violet-400"> Login</Link>.
            </p>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Signup;