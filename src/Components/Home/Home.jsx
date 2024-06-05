import Banner from "../Banner/Banner";
import Catogories from "../Catogories/Catogories";
import Features from "../Features/Features";

const Home = () => (
    <div className="my-10 max-w-[900px] mx-auto">
        <Banner></Banner>
        <Catogories></Catogories>
        <Features></Features>
    </div>
);

export default Home;