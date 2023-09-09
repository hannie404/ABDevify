import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
const SideNav = ({ show, setShow }) => {
    const handleIsActive = ({ isActive }) => (isActive ? 'text-accent-500' : '');
    return createPortal(
        <div
            className={`bottom-0 left-0 right-0 top-0 z-10 bg-primary-950 ${
                show ? 'fixed' : 'hidden'
            }`}
            show={show}
        >
            <nav>
                <ul className="flex min-h-screen flex-col items-center justify-start gap-y-6 p-20 text-3xl font-semibold">
                    <NavLink
                        to="/"
                        className={handleIsActive}
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="service"
                        className={handleIsActive}
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Service
                    </NavLink>

                    <NavLink
                        to="career"
                        className={handleIsActive}
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Career
                    </NavLink>

                    <NavLink
                        to="about"
                        className={handleIsActive}
                        onClick={() => setShow((prev) => !prev)}
                    >
                        About us
                    </NavLink>

                    <NavLink
                        to="contact"
                        className={handleIsActive}
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Contact us
                    </NavLink>
                </ul>
            </nav>

            <button className="absolute right-7 top-7" type="button" onClick={() => setShow(false)}>
                <svg
                    className="h-12 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>,
        document.getElementById('sidenav')
    );
};

export default SideNav;
