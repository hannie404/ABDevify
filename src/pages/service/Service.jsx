import { DevProcess, MoreServices, OurServices, Technologies } from './sections';
import Main from '../../components/layouts/Main';

const Service = () => {
    return (
        <Main>
            <OurServices />
            <MoreServices />
            <DevProcess />
            <Technologies />
        </Main>
    );
};

export default Service;
