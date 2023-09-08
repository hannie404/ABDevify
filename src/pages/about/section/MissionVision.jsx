import React from 'react';
import pic1 from '../section/Assets/Img/Polygon 4.png';
import pic2 from '../section/Assets/Img/Polygon 5.png';

const MissionVision = () => {
    return (
        <section className="container mx-auto grid max-w-full grid-rows-2 px-16 py-10 md:grid-rows-1 lg:grid-cols-2 lg:py-20 lg:pt-10">
            <div className="text-center lg:mt-4 lg:px-11 lg:text-left">
                <h1 className="text-[34px] font-bold text-secondary-50 lg:text-[80px]">MISSION</h1>
                <p className="text-[12px] md:text-[16px] lg:text-[30px]">
                    To provide cost-effective and high-quality IT solutions that best define the
                    requirements of our clients while ensuring that we continue to provide career
                    and skill advancement opportunities to our employees.
                </p>
            </div>
            <div className="relative py-6 md:py-16 lg:left-12 lg:py-2">
                <img
                    src={pic1}
                    alt="first picture"
                    className="z-8 relative bottom-14 left-[110px] h-[160px] w-[160px] md:left-[410px] md:h-[260px] md:w-[300px] lg:absolute lg:left-[200px] lg:top-[40px] lg:h-[500px] lg:w-[500px]"
                />
                <img
                    src={pic2}
                    alt="second picture"
                    className="z-8 absolute right-[80px] top-[20px] h-[180px] w-[190px] md:absolute md:right-[290px] md:top-[90px] md:h-[290px] md:w-[370px] lg:absolute lg:right-[370px] lg:top-[205px] lg:h-[560px] lg:w-[560px]"
                />
            </div>
            <div className="text-center lg:px-11 lg:pb-[90px] lg:text-left">
                <h1 className="text-[34px] font-bold text-secondary-50 lg:text-[80px]">VISION</h1>
                <p className="text-[12px] md:text-[16px] lg:text-[30px]">
                    To be the most trusted offshore IT company that markets one-stop software
                    development services globally and provides more job opportunities to Filipino
                    people.
                </p>
            </div>
        </section>
    );
};

export default MissionVision;
