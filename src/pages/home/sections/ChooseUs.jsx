import React from 'react';

const ChooseUs = () => {
    return (
        <section className="container mx-auto space-y-4 px-8 py-16 md:space-y-8 lg:space-y-16">
            <h2 className="text-center text-4xl font-bold leading-normal text-secondary-50 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end md:text-5xl lg:text-[66px] lg:leading-[70px]">
                WHY <span className="text-accent-500">YOU SHOULD</span> CHOOSE US
            </h2>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-16">
                {new Array(4).fill(undefined).map((el, i) => (
                    <article className="space-y-6 text-center md:px-8 lg:px-16" key={i}>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-900/70">
                            <span className="font-bold">{`0${i + 1}`}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-secondary-50 md:text-xl lg:text-2xl lg:leading-normal">
                            Good <span className="text-accent-500">Compensation</span> and Benefits
                        </h3>

                        <p className="font-nunito text-xl">
                            We recognize your efforts through performance-based incentives and
                            salary increase. We are also committed to continuously improve the
                            benefits package that you deserve.
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ChooseUs;
