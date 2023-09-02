import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../home.css';

import { testimonialImage } from '../../../assets/images';

const Testimonials = () => {
    return (
        <>
            <Swiper
                tag="section"
                className="relative container mx-auto "
                modules={[Navigation, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                breakpoints={{}}
                grabCursor={true}
            >
                {new Array(6).fill(undefined).map((el, i) => (
                    <SwiperSlide
                        key={i}
                        className="container mx-auto flex justify-center px-6 py-20 lg:py-10"
                        tag="article"
                    >
                        <div className="flex w-full max-w-5xl flex-col gap-8 rounded-lg px-4 py-6 ring-2 ring-secondary-50/10 lg:flex-row lg:p-8 lg:py-16">
                            <div className="basis-auto text-center">
                                <img
                                    className="mx-auto lg:-translate-y-[25%]"
                                    src={testimonialImage}
                                    alt="testimonialImage"
                                />
                            </div>

                            <blockquote className="basis-5/6 space-y-12">
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

                                <footer className="text-end text-sm font-bold lg:text-base">
                                    - Annie, Sr Software Engineer
                                </footer>
                            </blockquote>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonials;
