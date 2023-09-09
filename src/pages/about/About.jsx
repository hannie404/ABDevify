import Main from '../../components/layouts/Main';
import { CompanyOverview, CoreValues, MissionVision, MeetTheTeam } from './section';

const About = () => {
    return (
        <Main>
            <CompanyOverview />
            <MissionVision />
            <CoreValues />
            <MeetTheTeam />
        </Main>
    );
};

export default About;
