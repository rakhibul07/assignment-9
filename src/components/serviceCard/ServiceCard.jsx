

const serviceCard = ({service}) => {
    const {name,image,location} = service;
   
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-48 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="w-full px-10 py-2 bg-blue-800 text-white font-medium">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default serviceCard;