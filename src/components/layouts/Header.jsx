import InquiryButton from './InquiryButton';
import NavBar from './NavBar';
import NavBrand from './NavBrand';

const Header = () => {
    return (
        <header className="container sticky top-0 mx-auto bg-primary-950 px-4">
            <nav className="flex flex-row items-center justify-between py-10">
                <NavBrand />

                <NavBar />

                <InquiryButton />
            </nav>
        </header>
    );
};

export default Header;
