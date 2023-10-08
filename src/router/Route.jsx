import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import LogIn from "../pages/logIn/LogIn";
import NotFound from "../pages/notFound/NotFound";
import SignUp from "../pages/signUp/SignUp";
import Layout from "../components/layout/Layout";
import Service from "../components/service/Service";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch("/data.json")
               
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader:() =>fetch("/data.json")
            }
        ]
    }
])
export default router;