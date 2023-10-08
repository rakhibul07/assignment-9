

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full h-[80vh] ">
  <div id="slide1" className="carousel-item relative  w-full">
  <div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/j48LQc2/birhday.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

      <a href="#slide4" className="btn btn-circle  bg-black text-white border-0 mt-24">❮</a> 

      <a href="#slide2" className="btn btn-circle  bg-black text-white border-0 mt-24">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative  w-full">
   <div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/Rzg0kw7/wedding.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle  bg-black text-white border-0 mt-24">❮</a> 
      <a href="#slide3" className="btn btn-circle  bg-black text-white border-0 mt-24">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative  w-full">
  <div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/vBT8yYM/shower.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle  bg-black text-white border-0 mt-24">❮</a> 
      <a href="#slide4" className="btn btn-circle  bg-black text-white border-0 mt-24">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative  w-full">
  <div className="hero " style={{backgroundImage: 'url(https://i.ibb.co/J5Bvy8v/e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle  bg-black text-white border-0 mt-24">❮</a> 
      <a href="#slide1" className="btn btn-circle  bg-black text-white border-0 mt-24">❯</a>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;