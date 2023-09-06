import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../home.css';

const sliderArray = new Array(6).fill(undefined);

const Training = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    return (
        <section className="relative bg-[url('/src/assets/images/training.png')] p-6 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-primary-950/95 before:content-[''] lg:p-16">
            <div className="container mx-auto">
                <h2 className="relative text-center text-4xl  font-bold leading-normal md:text-5xl lg:text-[66px] lg:leading-[70px]">
                    <span className="text-secondary-50">Training</span>{' '}
                    <span className="text-accent-500">Experience</span>
                </h2>
                <Swiper
                    className=""
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                    modules={[Navigation, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    grabCursor={true}
                >
                    {sliderArray.map((el, i) => (
                        <SwiperSlide
                            className="container mx-auto flex justify-center pb-20 pt-8 lg:py-16"
                            key={i}
                            tag="article"
                        >
                            <div className="w-full max-w-5xl">
                                <blockquote className="space-y-12 text-secondary-50">
                                    <p className="text-justify text-xs leading-normal lg:text-lg lg:leading-7">
                                        &quot;Working at BGM has been an incredible journey of
                                        growth and innovation. The collaborative and dynamic work
                                        environment here has allowed me to expand my technical
                                        skills while contributing to some truly remarkable web
                                        development projects. The emphasis on creativity and
                                        attention to detail has helped me create websites that not
                                        only look stunning but also provide seamless user
                                        experiences. What truly sets BGM apart is the strong sense
                                        of teamwork and the opportunity to work on diverse projects
                                        for clients across various industries. I&apos;m proud to be
                                        part of a team that consistently delivers excellence in
                                        website development.&quot;
                                    </p>
                                    <footer className="text-center text-sm font-bold lg:text-base">
                                        - Annie
                                    </footer>
                                </blockquote>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="absolute left-[50%] right-auto top-[100%] -translate-x-[50%] -translate-y-[200%] lg:hidden">
                        <em className="font-bold">{`${currentSlide} of ${sliderArray.length}`}</em>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Training;
