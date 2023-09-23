import Main from '../../components/layouts/Main';
import { CompanyOverview, CoreValues, MissionVision, MeetTheTeam } from './section';

const About = () => {
    return (
        <Main>
            <div className="yellowBlushLeft">
                <div className="blueBlushRight">
                    <div className="radialLeft">
                        <CompanyOverview />
                    </div>
                    <MissionVision />
                </div>
            </div>
            <div className="yellowBlushLeft">
                <div className="radialRight">
                    <CoreValues />
                </div>
                <div className="blueBlushRightSmall">
                    <MeetTheTeam />
                </div>
            </div>
        </Main>
    );
};

export default About;
