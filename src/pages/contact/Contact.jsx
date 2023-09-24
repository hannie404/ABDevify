import Main from '../../components/layouts/Main';
import { ContactForm } from './sections';
// import './contact.css';

const Contact = () => {
    return (
        <Main>
            <div className="yellowBlushLeft">
                <div className="radialRight">
                    <ContactForm />
                </div>
            </div>
        </Main>
    );
};

export default Contact;
