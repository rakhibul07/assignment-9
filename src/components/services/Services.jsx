import PropTypes from 'prop-types';
import ServiceCard from "../serviceCard/ServiceCard";


const Services = ({services}) => {
   
    
   
    
    
    return (
        <div className='px-5 lg:px-0'>
            <h1 className="text-3xl py-8 text-center font-semibold">Our Services</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                
                services?.map((service)=><ServiceCard key={service.id}service={service}></ServiceCard>)
            }
           </div>
          
        </div>
    );
};
Services.propTypes = {
    services:PropTypes.array
}
export default Services;