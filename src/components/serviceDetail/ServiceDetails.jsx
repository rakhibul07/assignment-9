import PropTypes from 'prop-types';

const ServiceDetails = ({ service }) => {
    const { name, description, image, date, location, capacity, contact_email, discount, price } = service;

    return (
        <div className='bg-pink-100 px-5 py-4 lg:px-0 lg:py-0'>
            <div className='md:flex justify-center items-center gap-6'>
                <img className='h-[75vh] md:w-1/2' src={image} alt={name} />
                <div className='text-justify px-4 py-4'>
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <p className='text-sm py-4'>{description}</p>
                    <div className=''>
                    <h2>Location: {location}</h2>
                    <h2>Capacity: {capacity}</h2>
                    <h2>Date: {date}</h2>
               
                </div>
                <div className='pt-4'>
                <h2>Cost: ${price}</h2>
                <h3>Discount: {discount}</h3>
                <h2 className=''>E-mail: <span className='hover:underline cursor-pointer'>{contact_email}</span></h2>
                </div>
                </div>
                
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    service: PropTypes.object.isRequired, // Assuming service is always provided
};

export default ServiceDetails;
