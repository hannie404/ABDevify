const Button = ({ children, className, disabled = false, ...props }) => {
    return (
        <button
            className={`${className} 
            ${
                disabled ? 'bg-accent-600' : 'bg-accent-500 hover:bg-accent-300'
            } rounded-md  px-9 py-2 font-nunito text-xl font-bold leading-normal text-primary-950 `}
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
