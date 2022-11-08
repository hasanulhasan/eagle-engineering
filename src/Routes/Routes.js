import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Main from "../Pages/LayOut/Main";
import Services from "../Pages/Services/Services";
import Login from "../UserOptions/Login";
import Signup from "../UserOptions/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/services',
        element: <Services></Services>
      }
    ]
  }
])

export default router;