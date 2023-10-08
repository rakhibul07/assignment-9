import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div>
          <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Layout;