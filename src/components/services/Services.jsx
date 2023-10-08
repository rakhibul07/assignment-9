import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ServiceCard from "../serviceCard/ServiceCard";


const Services = () => {
    const {events} = useContext(AuthContext)
    
   
    
    
    return (
        <div>
            <h1 className="text-3xl py-8 text-center font-semibold">Our Services</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                
                events.map((service)=><ServiceCard key={service.id}service={service}></ServiceCard>)
            }
           </div>
          
        </div>
    );
};

export default Services;