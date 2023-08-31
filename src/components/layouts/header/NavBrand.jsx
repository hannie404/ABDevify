import { Link } from 'react-router-dom';

const NavBrand = () => {
    return (
        <>
            <Link className="block text-center" to="/">
                <span className="block font-montserrat text-3xl font-bold leading-none text-secondary-50">
                    ABD
                </span>

                <span className="font-moondance text-[23.02px] text-lg font-thin leading-none text-accent-500">
                    phillipines
                </span>
            </Link>
        </>
    );
};

export default NavBrand;
