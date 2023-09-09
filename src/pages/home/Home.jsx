import { AboutABD, Benefits, ChooseUs, Culture, Hero, Testimonials, Training } from './sections';
import Main from '../../components/layouts/Main';

const Home = () => {
    return (
        <Main>
            <Hero />
            <AboutABD />
            <Culture />
            <ChooseUs />
            <Testimonials />
            <Benefits />
            <Training />
        </Main>
    );
};

export default Home;
