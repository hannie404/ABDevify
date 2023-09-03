import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../home.css';

import { testimonialImage } from '../../../assets/images';

const Training = () => {
    return (
        <section className="relative mx-auto bg-[url('/src/assets/images/training.png')] p-6 lg:p-8 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-primary-950/95 before:content-['']">
            <h2 className="relative text-center text-4xl font-bold leading-7 md:text-5xl lg:text-[66px] lg:leading-[70px]">
                <span className="text-secondary-50">Training</span>{' '}
                <span className="text-accent-500">Experience</span>
            </h2>

            <Swiper
                className="container mx-auto"
                modules={[Navigation, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                breakpoints={{}}
                grabCursor={true}
            >
                {new Array(6).fill(undefined).map((el, i) => (
                    <SwiperSlide
                        className="container mx-auto flex justify-center lg:py-8 py-6"
                        key={i}
                        tag="article"
                    >
                        <div className="w-full max-w-5xl">
                            <blockquote className="space-y-12">
                                <p className="text-justify text-xs leading-normal lg:text-base lg:leading-6">
                                    &quot;Working at BGM has been an incredible journey of growth
                                    and innovation. The collaborative and dynamic work environment
                                    here has allowed me to expand my technical skills while
                                    contributing to some truly remarkable web development projects.
                                    The emphasis on creativity and attention to detail has helped me
                                    create websites that not only look stunning but also provide
                                    seamless user experiences. What truly sets BGM apart is the
                                    strong sense of teamwork and the opportunity to work on diverse
                                    projects for clients across various industries. I&apos;m proud
                                    to be part of a team that consistently delivers excellence in
                                    website development.&quot;
                                </p>

                                <footer className="text-center text-sm font-bold lg:text-base">
                                    - Annie
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Training;
