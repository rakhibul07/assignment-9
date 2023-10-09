import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ReviewCard = ({service}) => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    const {review,rating,profile_pic,date,reviewer,fade} = service
    return (
        <>
          
            <div className="flex flex-col gap-4 bg-pink-200 p-4 rounded-md shadow-md cursor-pointer transform hover:scale-105 duration-500" data-aos={fade}>
                
                <div className="flex justify justify-between">
                    <div className="flex justify-between items-center gap-4">
                    <div className="avatar">
                 <div className="w-10 rounded-full ring-1 ring-pink-400 transform hover:scale-105 duration-500">
                 <img src={profile_pic} />
                         </div>
                      </div>
                        <span className='font-medium'>{reviewer}</span>
                    </div>
                    <div className=" flex justify-between items-center text-pink-600 gap-2">
                        <AiFillStar></AiFillStar>
                       <span className='font-semibold'>{rating}</span>
                    </div>
                </div>

                <div className='text-sm text-justify' >
                    {review}
                </div>

                <div className="flex justify-between">
                    <span>{date}</span>
                    
                </div>
            </div>

        
           
          
        </>
    );
};
ReviewCard.propTypes = {
    service:PropTypes.object
}
export default ReviewCard;