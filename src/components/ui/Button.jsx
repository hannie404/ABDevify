const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`${className} rounded-md bg-accent-500 px-9 py-2 font-nunito text-xl font-bold leading-normal text-primary-950 hover:bg-accent-300`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
