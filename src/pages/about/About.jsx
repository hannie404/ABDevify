import MeetTheTeam from './section/MeetTheTeam';
import { CompanyOverview, CoreValues, MissionVision, Team } from './section';

const About = () => {
    return (
        <div>
            <CompanyOverview />
            <MissionVision />
            <CoreValues />
            <MeetTheTeam />
            <Team />
        </div>
    );
};

export default About;
