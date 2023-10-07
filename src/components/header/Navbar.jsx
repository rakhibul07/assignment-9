import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const links = <>

                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/signup">Signup</NavLink></li>
                 <li><NavLink to="/login">Login</NavLink></li>
                 

                 </>
const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
  
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl">Surprise</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={logOut} className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <NavLink to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </NavLink>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;