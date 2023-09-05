import { Hero, Testimonials } from './sections';
import AboutABD from './sections/AboutABD';
import ChooseUs from './sections/ChooseUs';
import Training from './sections/Training';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutABD />
            <Testimonials />
            <ChooseUs />
            <Training />
        </>
    );
};

export default Home;
