import { aboutAbdImage } from '../../../assets/images';
import { Heading } from '../../../components/ui';

const AboutABD = () => {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid grid-rows-[repeat(3,_auto)] md:grid-cols-2 md:grid-rows-[20%_minmax(0,_1fr)] md:gap-4">
                <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end">
                    <Heading className="text-center lg:text-start" tag="h2">
                        <span className="text-accent-500">ABOUT</span> <span>ABD</span>
                    </Heading>
                </div>

                <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
                    <img className="mx-auto" src={aboutAbdImage} alt="aboutbgmImage" />
                </div>
                <div className="w-full md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:max-w-xl">
                    <p className="text-center text-base leading-6 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:text-start md:text-xl md:leading-8 lg:text-2xl  lg:leading-[44px]">
                        BGM is an onshore software development company with offices located in
                        Makati, Quezon City, and Cebu City Philippines. We provide high-quality web
                        clients applications using leading-edge technology since 2023.
                        {/* hi */}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutABD;
