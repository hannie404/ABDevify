import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { cultureFunAndFriendlyImage } from '../../../assets/images';

const Culture = () => {
    return (
        <section className="container mx-auto space-y-4 py-20 lg:space-y-10">
            <h2 className="text-center text-4xl font-bold leading-normal text-secondary-50 md:text-5xl lg:text-[66px] lg:leading-[70px]">
                OUR <span className="text-accent-500">CULTURE</span>
            </h2>

            <Swiper
                className="px-8"
                modules={[Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                spaceBetween="16px"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                grabCursor={true}
            >
                {new Array(3).fill(undefined).map((el, i) => (
                    <SwiperSlide key={i} tag="article">
                        <div className="space-y-6 rounded-md border-2 border-secondary-50/10 p-4">
                            <img
                                className="mx-auto"
                                src={cultureFunAndFriendlyImage}
                                alt="cultureFunAndFriendlyImage"
                            />

                            <h3 className="text-2xl font-bold leading-9">
                                Fun & Friendly <span className="text-accent-500">Environment</span>
                            </h3>

                            <p className="text-justify text-base leading-6">
                                We are more than just your coworkers. Our Team from different levels
                                of the organization: Team Leaders and Engineers are all approachable
                                and engaging. We promote and maintain our camaraderie through our
                                fun-filled company events and engagement activities.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Culture;
