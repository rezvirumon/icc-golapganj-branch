import Banner from "../../components/Banner";
import Packages from "../Packages/Packages";
import About from "../About/About";
import Partners from "./Partners";
import Services from "./Services";
import MostRequested from "../Packages/MostRequested";
import AnnouncementBanner from "../Admin/AnnouncementBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AnnouncementBanner></AnnouncementBanner>
            <About></About>
            <Services></Services>
            <Packages></Packages>
            <MostRequested></MostRequested>
            <Partners></Partners>
        </div>
    );
};

export default Home;