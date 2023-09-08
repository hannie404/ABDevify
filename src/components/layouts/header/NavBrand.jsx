import { Link } from 'react-router-dom';
import { squirelImage, abdevifyTextImage } from '../../../assets/images';

const NavBrand = () => {
    return (
        <>
            <Link className="flex w-28 flex-row items-center gap-4 md:w-36" to="/">
                <img className="h-14" src={squirelImage} alt="abdevify-logo-header" />
                <img className="" src={abdevifyTextImage} alt="abdevify-logo-header" />
            </Link>
        </>
    );
};

export default NavBrand;
