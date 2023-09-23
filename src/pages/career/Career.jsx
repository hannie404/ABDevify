import { Benefits } from '../home/sections';
import { Careers, JobOpening, WorkArrangement } from './sections';
import Main from '../../components/layouts/Main';

const Career = () => {
    return (
        <Main>
            <div className="yellowBlushLeft">
                <div className="blueBlushRightSmall">
                    <div className="">
                        <Careers />
                    </div>
                    <JobOpening />
                </div>
            </div>
            <div className="yellowBlushRight">
                <div className="radialLeft">
                    <Benefits />
                </div>
                    <WorkArrangement />
            </div>
        </Main>
    );
};

export default Career;
