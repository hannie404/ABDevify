import { heroImage } from '../../../assets/images';
import { HashButton, Heading } from '../../../components/ui';

const Hero = () => {
    return (
        <section className="container mx-auto my-auto px-6 pb-16 pt-4 lg:py-24">
            <div className="grid gap-y-6 md:grid-cols-2 md:grid-rows-[auto_minmax(0,_1fr)] md:gap-6 lg:gap-8">
                <div className="space-y-4 text-center md:row-start-1 md:row-end-2 md:text-start">
                    <Heading className="whitespace-normal">
                        <span className="text-secondary-50">Code the Next</span>
                        <br />
                        <span className="text-accent-500">Breakthrough!</span>
                    </Heading>

                    <p className="text-base leading-6 md:text-3xl lg:text-4xl lg:leading-[57px]">
                        Join Our Developer <br /> Dream Team....!
                    </p>
                </div>

                <div className="text-center md:row-start-1 md:row-end-3">
                    <img src={heroImage} alt="hero-image" />
                </div>

                <div className="justify-self-start text-center lg:row-start-2 lg:row-end-3">
                    <HashButton to="career#job-opening">
                        Learn More
                        <svg
                            className="mb-1 ml-1 inline-block h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </HashButton>
                </div>
            </div>
        </section>
    );
};

export default Hero;
