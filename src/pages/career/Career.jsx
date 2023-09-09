import { Benefits } from '../home/sections';
import { Careers, JobOpening, WorkArrangement } from './sections';
import Main from '../../components/layouts/Main';

const Career = () => {
    return (
        <Main>
            <Careers />
            <JobOpening />
            <Benefits />
            <WorkArrangement />
        </Main>
    );
};

export default Career;
