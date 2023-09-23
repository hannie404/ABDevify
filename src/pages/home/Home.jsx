import { AboutABD, Benefits, ChooseUs, Culture, Hero, Testimonials, Training } from './sections';
import Main from '../../components/layouts/Main';
import MeetTheTeam from './sections/MeetTheTeam';
import BePart from './sections/BePart';

const Home = () => {
    return (
        <Main>
            <div className="yellowBlushRight">
                <div className="blueBlushLeft">
                    <div className="radialLeft">
                        <Hero />
                    </div>
                    <div className="radialRight">
                        <AboutABD />
                    </div>
                </div>
            </div>
            <div className="yellowBlushLeft">
                <div className="blueBlushRight">
                    <div className="radialLeft">
                        <Culture />
                    </div>
                    <Testimonials />
                </div>
            </div>
            <div className="yellowBlushRight">
                <div className="blueBlushLeft">
                    <div className="radialLeft">
                        <ChooseUs />
                    </div>
                    <div className="radialRight">                    
                        <Benefits />
                    </div>
                </div>
            </div>
            <Training />
            <div className="yellowBlushLeft">
                <div className="blueBlushRightSmall">
                    <div className="radialLeftSmall">
                        <MeetTheTeam />
                        <BePart />
                    </div>
                </div>
            </div>
        </Main>
    )
};

export default Home;
