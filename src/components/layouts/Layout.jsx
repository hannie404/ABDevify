import { Outlet } from 'react-router-dom';
import Main from './Main';
import Header from './header/Header';
import Footer from './footer/Footer';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
