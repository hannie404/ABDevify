import { Bars3Icon } from '@heroicons/react/24/outline';

const MenuBar = ({ setShow }) => {
    return (
        <div className="block md:hidden">
            <Bars3Icon
                className="h-10 w-10 text-secondary-50/50"
                onClick={() => setShow((prev) => !prev)}
            />
        </div>
    );
};

export default MenuBar;
