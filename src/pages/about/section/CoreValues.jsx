import React from 'react';

const CoreValues = () => {
    return (
        <section className="container mx-auto max-w-full bg-[#1E1E20]/60 px-4 py-14 lg:px-44 lg:pt-32 lg:text-left">
            <h1 className="px-20 text-center text-[34px] font-bold  text-accent-500 lg:text-[80px]">
                OUR <span className="text-secondary-50">CORE</span> VALUES
            </h1>
            <div className="py-14 pl-8 leading-6 lg:py-28">
                <ul className="grid list-inside list-disc gap-y-10 px-5 md:list-inside md:px-20 lg:grid-cols-2 lg:gap-x-60 lg:gap-y-20">
                    <div>
                        <li className="text-[18px] text-accent-500 lg:text-[32px]">
                            <span className="font-bold text-secondary-50">
                                We strive for excellence
                            </span>
                        </li>
                        <p className="txt-[10px] pl-6 pt-3 lg:text-[18px]">
                            {' '}
                            We give the best quality and efficiency in all aspects of the business
                            to reach or exceed the targets and expectations.
                        </p>
                    </div>

                    <div>
                        <li className="text-[18px] text-accent-500 lg:text-[32px]">
                            <span className="font-bold text-secondary-50">We are committed</span>
                        </li>
                        <p className="txt-[10px] pl-6 pt-3 lg:text-[18px]">
                            {' '}
                            We promise good delivery from start to finish and maintain a high level
                            of reliability and accountability.
                        </p>
                    </div>

                    <div>
                        <li className="text-[18px] text-accent-500 lg:text-[32px]">
                            {' '}
                            <span className="font-bold text-secondary-50">We are flexible</span>
                        </li>
                        <p className="txt-[10px] pl-6 pt-3 lg:text-[18px]">
                            We view a situation, problem or opportunity from multiple perspectives
                            and develop alternative solutions to project issues.
                        </p>
                    </div>

                    <div>
                        <li className="text-[18px] text-accent-500 lg:text-[32px]">
                            {' '}
                            <span className="font-bold text-secondary-50">We have integrity</span>
                        </li>
                        <p className="txt-[10px] pl-6 pt-3 lg:text-[18px]">
                            We give the best quality and efficiency in all aspects of the business
                            to reach or exceed the targets and expectations.
                        </p>
                    </div>

                    <div>
                        <li className="text-[18px] text-accent-500 lg:text-[32px]">
                            <span className="font-bold text-secondary-50">We are innovative</span>
                        </li>
                        <p className="txt-[10px] pl-6 pt-3 lg:text-[18px]">
                            We will continue to find ways to always adapt to the never-ending
                            changes in the technology, hence, bringing fresh concepts and new
                            solutions that will add tremendous value to the business.
                        </p>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default CoreValues;
