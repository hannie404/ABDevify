import React from 'react';
import { Heading } from '../../../components/ui';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { workonsite } from '../../../assets/images';

const WorkArrangement = () => {
    return (
        <section className="container mx-auto space-y-8 py-20 lg:space-y-10">
            <Heading className="px-6 text-center" tag="h2">
                <span className="text-accent-500">WORK</span> ARRANGEMENT
            </Heading>

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
                    <SwiperSlide
                        className="flex aspect-square flex-col rounded-2xl border-2 border-secondary-50/10 p-4"
                        key={i}
                        tag="article"
                    >
                        <img className="mx-auto" src={workonsite} alt="workonsite" />

                        <span className="flex flex-1 items-center justify-center text-center text-2xl font-bold leading-9">
                            Work onsite
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default WorkArrangement;
