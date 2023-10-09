import PropTypes from 'prop-types';
import ReviewCard from "./ReviewCard";


const Review = ({services}) => {
   
    
    return (
        <div>
            <h2 className='text-3xl text-pink-600 text-center mt-10 mb-6 font-medium'>Customer's Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 lg:mx-0'>
            {
                services?.map((service)=>  <ReviewCard key={service.id} service={service}></ReviewCard>)
            }
            </div>
          
        </div>
    );
};
Review.propTypes = {
    services:PropTypes.array
}

export default Review;