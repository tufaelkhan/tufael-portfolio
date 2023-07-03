import Banner from "./Banner";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Project></Project>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;