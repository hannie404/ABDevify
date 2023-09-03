import { Hero, Testimonials } from './sections';
import AboutABD from './sections/AboutABD';
import Training from './sections/Training';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutABD />
            <Testimonials />
            <Training />
        </>
    );
};

export default Home;
