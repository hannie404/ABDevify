import { aboutAbdImage } from '../../../assets/images';

const AboutABD = () => {
    return (
        <section className="container mx-auto px-6 py-8">
            <div className="grid grid-rows-[repeat(3,_auto)] md:grid-cols-2 md:grid-rows-[20%_minmax(0,_1fr)] md:gap-4">
                <h2 className="text-center text-4xl font-bold leading-[70px] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end md:text-start md:text-5xl lg:text-[66px]">
                    <span className="text-accent-500">ABOUT</span>{' '}
                    <span className="text-secondary-50">ABD</span>
                </h2>

                <div className=" md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
                    <img className="mx-auto" src={aboutAbdImage} alt="aboutbgmImage" />
                </div>

                <div className="w-full md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:max-w-xl">
                    <p className="text-center text-base leading-6 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:text-start md:text-xl md:leading-8 lg:text-[30px]  lg:leading-[45px]">
                        BGM is an onshore software development company with offices located in
                        Makati, Quezon City, and Cebu City Philippines. We provide high-quality web
                        clients applications using leading-edge technology since 2023.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutABD;
