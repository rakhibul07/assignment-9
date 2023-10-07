import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import LogIn from "../pages/logIn/LogIn";
import NotFound from "../pages/notFound/NotFound";
import SignUp from "../pages/signUp/SignUp";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
        ]
    }
])
export default router;