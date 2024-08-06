import Banner from "../../components/Banner";
import Packages from "../Packages/Packages";
import About from "../About/About";
import Partners from "./Partners";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Packages></Packages>
            <Partners></Partners>
        </div>
    );
};

export default Home;