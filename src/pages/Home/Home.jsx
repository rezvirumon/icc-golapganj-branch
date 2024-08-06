import Banner from "../../components/Banner";

import Packages from "./Packages";
import Partners from "./Partners";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Packages></Packages>
            <Partners></Partners>
          
        </div>
    );
};

export default Home;