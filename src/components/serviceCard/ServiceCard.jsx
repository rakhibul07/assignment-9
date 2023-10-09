import { MdLocationPin } from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const serviceCard = ({service}) => {
    const {id,name,image,location,price,short_description} = service;
   
    return (
        <div>
        <div className="card bg-pink-200 shadow-xl cursor-pointer transform hover:scale-105 duration-500">
  <figure><img className="h-52 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    
        <p className='text-justify'>{short_description}</p>
     
    
  <div className='flex justify-between items-center text-lg  font-normal'>
      <div className='flex justify-between items-center '>
        <span><MdLocationPin></MdLocationPin></span>
        <h2>{location}</h2>
      </div>
      
      <div className='flex justify-between items-center font-semibold'>
      <span className='font-bold'><BsCurrencyDollar></BsCurrencyDollar></span>
      <h2>{price}</h2>
      </div>

    </div>
    <div className="card-actions justify-center mt-4">
      <Link to={`/services/${id}`}><button className="w-full px-32 py-2 bg-pink-700 text-white font-medium rounded-md ">Details</button></Link>
    </div>
  </div>
         </div>

        </div>
    );
};

export default serviceCard;