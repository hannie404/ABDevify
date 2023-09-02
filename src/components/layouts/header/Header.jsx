import InquiryButton from './InquiryButton';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import NavBrand from './NavBrand';

const Header = () => {
    return (
        <header className=" sticky top-0 z-10 bg-primary-950 px-8 py-6">
            <div className="container mx-auto">
                <nav className="flex flex-row items-center justify-between">
                    <NavBrand />
                    <NavBar />
                    <InquiryButton />
                    <MenuBar />
                </nav>
            </div>
        </header>
    );
};

export default Header;
