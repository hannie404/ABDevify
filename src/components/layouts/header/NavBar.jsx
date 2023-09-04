import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const handleIsActive = ({ isActive }) => (isActive ? 'text-accent-500' : '');
    return (
        <>
            <div className="hidden space-x-10 font-nunito text-xl text-secondary-50/70 md:block">
                <NavLink className={handleIsActive} to="/">
                    Home
                </NavLink>

                <NavLink className={handleIsActive} to="service">
                    Service
                </NavLink>

                <NavLink className={handleIsActive} to="career">
                    Career
                </NavLink>

                <NavLink className={handleIsActive} to="about">
                    About us
                </NavLink>
            </div>
        </>
    );
};

export default NavBar;
