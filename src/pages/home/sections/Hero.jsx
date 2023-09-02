import { heroImage } from '../../../assets/images';

const Hero = () => {
    return (
        <section className="relative overflow-hidden px-8 py-8 before:absolute before:left-0 before:top-0 before:h-[750px] before:w-[750px] before:-translate-x-[20%] before:content-[url(/src/assets/images/multicircle.png)] after:absolute after:right-0 after:top-0 after:-z-10 after:h-[1399.298px] after:w-[467px] after:-translate-y-[25%] after:rotate-[65.712deg] after:rounded-[233.5px] after:bg-gradient-to-b after:from-[rgba(251,168,28,0.11)] after:to-[rgba(224,86,136,0.06)] after:blur-[150px] after:content-['']">
            <div className="container mx-auto">
                <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_minmax(0,_1fr)]">
                    <div className="rows flex flex-col justify-center gap-4 text-center lg:row-start-1 lg:row-end-2 lg:text-start">
                        <h1 className="whitespace-nowrap text-[34px] font-bold leading-9 lg:text-[80px] lg:leading-[84px]">
                            <span className="text-secondary-50">Code the Next</span>
                            <br />
                            <span className="text-accent-500">Breakthrough!</span>
                        </h1>

                        <p className="text-base leading-6 lg:text-4xl lg:leading-[57px]">
                            Join Our Developer <br /> Dream Team....!
                        </p>
                    </div>

                    <div className="text-center lg:row-start-1 lg:row-end-3">
                        <img src={heroImage} alt="hero-image" />
                    </div>

                    <div className="justify-self-start text-center lg:row-start-2 lg:row-end-3">
                        <button className="rounded-md bg-accent-500 px-8 py-3 font-nunito text-xl font-bold leading-normal text-primary-950 hover:bg-accent-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
