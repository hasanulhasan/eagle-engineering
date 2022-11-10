import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../Contex/PrivateRouter/PrivateRouter";
import AddServices from "../Pages/AddServices/AddServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Main from "../Pages/LayOut/Main";
import Myreview from "../Pages/Myreview/Myreview";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
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
        path: '/myreview',
        element: <PrivateRouter><Myreview></Myreview></PrivateRouter>
      },
      {
        path: '/addservices',
        element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://assignment-11-server-gold-eight.vercel.app/services/${params.id}`)
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