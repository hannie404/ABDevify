const Heading = ({ children, className, tag = 'h1', ...props }) => {
    const Element = tag;

    let defaultClassName =
        'text-4xl font-bold leading-normal text-secondary-50 lg:text-[80px] lg:leading-[84px]';
    switch (Element) {
        case 'h2':
            defaultClassName =
                'text-4xl font-bold leading-normal text-secondary-50 lg:text-5xl lg:text-[66px] lg:leading-[70px]';
            break;
        case 'h3':
            defaultClassName =
                'text-2xl font-bold leading-normal text-secondary-50 lg:text-start lg:text-3xl lg:leading-normal';
            break;
        case 'h4':
            defaultClassName =
                'text-1xl font-bold leading-normal text-secondary-50 lg:text-start lg:text-2xl lg:text-[66px] lg:leading-[70px]';
            break;
        case 'h5':
            defaultClassName;
            break;
        default:
    }

    return (
        <>
            <Element className={`${defaultClassName} ${className}`} {...props}>
                {children}
            </Element>
        </>
    );
};

export default Heading;
