import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        < >
          <Navbar></Navbar>
          <div className="bg-pink-100 lg:px-10 ">
            <Outlet></Outlet>
          </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default Layout;