
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Packages from "../pages/Packages/Packages";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Customers from "../pages/Customers/Customers";
import Login from "../pages/Validation/Login";
import CreateNew from "../pages/Validation/CreateNew";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/packages',
                element: <Packages></Packages>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/customers',
                element: <Customers></Customers>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/create',
                element: <CreateNew></CreateNew>
            },
 
        ]
    },
]);

export default router;
