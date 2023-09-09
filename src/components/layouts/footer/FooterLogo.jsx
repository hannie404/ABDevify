import { Link } from 'react-router-dom';
import { abdevifyTextImage } from '../../../assets/images';

const FooterLogo = () => {
    return (
        <Link className=" text-center" to="/">
            <img className="w-60" src={abdevifyTextImage} alt="abdevify-logo-footer" />
        </Link>
    );
};

export default FooterLogo;
