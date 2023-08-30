import { NavLink } from 'react-router-dom';

const InquiryButton = () => {
    const handleIsActive = ({ isActive }) =>
        isActive
            ? 'ring-accent-500/50 rounded-sm px-7 py-2 font-nunito text-accent-500 ring-2 lg:px-14 shadow-sm shadow-accent-300'
            : 'ring-secondary-50/50 rounded-sm px-7 py-2 font-nunito text-secondary-50 ring-2 lg:px-14';
    return (
        <>
            <NavLink className={handleIsActive} to="contact">
                Inquiry
            </NavLink>
        </>
    );
};

export default InquiryButton;
