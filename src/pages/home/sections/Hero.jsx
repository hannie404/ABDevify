import { heroImage } from '../../../assets/images';

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h1 className="text-[34px] font-bold leading-9 lg:text-[80px] lg:leading-[84px]">
                        <span className="text-secondary-50">Code the Next</span>
                        <br />
                        <span className="text-accent-500">Breakthrough!</span>
                    </h1>

                    <p className="text-base leading-6 lg:text-4xl lg:leading-[57px]">
                        Join Our Developer <br /> Dream Team....!
                    </p>
                </div>

                <div className="text-center">
                    <img src={heroImage} alt="hero-image" />
                </div>

                <div className="text-center">
                    <button className="bg-accent-500 px-8 py-3 rounded-md font-nunito text-xl font-bold leading-normal text-primary-950">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
