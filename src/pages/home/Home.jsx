

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";


const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
           <Services services={services}></Services>
           
        </div>
    );
};

export default Home;