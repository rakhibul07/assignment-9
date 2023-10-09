

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import Review from "../../components/review/Review";
import Contact from "../../components/contact/Contact";


const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
           <Services services={services}></Services>
           <Review services={services}></Review>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;