import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import SideNav from './sidenav/SideNav';

import { useState } from 'react';
const Layout = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Header setShow={setShow} />
            <Outlet />
            <Footer />
            <SideNav show={show} setShow={setShow} />
        </>
    );
};

export default Layout;
