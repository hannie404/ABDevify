import { DevProcess, MoreServices, OurServices, Technologies } from './sections';
import Main from '../../components/layouts/Main';

const Service = () => {
    return (
        <Main>
            <div className="yellowBlushRight">
                <div className="blueBlushLeftBig">
                    <div className="radialLeft">
                        <OurServices />
                    </div>
                <MoreServices />
                </div>
            </div>
            <div className="yellowBlushLeft">
                <div className="blueBlushRight">
                <DevProcess />
                <Technologies />
                </div>
            </div>
        </Main>
    );
};

export default Service;
