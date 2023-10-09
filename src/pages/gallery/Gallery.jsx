

const Gallery = () => {
    return (
        <div>
            <div className="container mx-auto">
    <div className="grid-cols-3 p-10 lg:p-20 space-y-2 bg-pink-100 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full rounded">
            <img src="https://i.ibb.co/7RF70cY/couple-1.jpg"
                alt="image" />
        </div>
        <div className="w-full col-span-2 row-span-2 rounded">
            <img src="https://i.ibb.co/mTTLvtq/birth.jpg"
                alt="image" />
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/fqzC5kY/baby.jpg"
                alt="image" />
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/vYnZKKw/ring2.jpg"
                alt="image" />
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/KWz8MhS/gal-2.jpg"
                alt="image" />
        </div>
        <div className="w-full rounded">
            <img src="https://i.ibb.co/z4n1Qby/ret.jpg"
                alt="image" />
        </div>
    </div>
</div>
        </div>
    );
};

export default Gallery;
