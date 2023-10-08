import { NavLink } from "react-router-dom";

const Links = () => {
    return (
        <div>
             {
                const links = <>

                <li><NavLink className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`} to="/signup">Signup</NavLink></li>
                <li><NavLink className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`} to="/venue">Venue</NavLink></li>
                
                
                </>
             }

        </div>
    );
};

export default Links;