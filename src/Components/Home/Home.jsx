import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CatagoryList from "../categoryList/CatagoryList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;