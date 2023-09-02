import InquiryButton from './InquiryButton';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import NavBrand from './NavBrand';

const Header = () => {
    return (
        <header className="container sticky top-0 z-10 mx-auto bg-primary-950 px-8 py-6">
            <nav className="flex flex-row items-center justify-between">
                <NavBrand />

                <NavBar />

                <InquiryButton />

                <MenuBar />
            </nav>
        </header>
    );
};

export default Header;
