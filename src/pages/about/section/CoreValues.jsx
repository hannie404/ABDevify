import React from 'react';
import { Heading } from '../../../components/ui';
import { yellowCircle } from '../../../assets/icons';

const cardArray = new Array(5).fill(undefined);

const CoreValues = () => {
    console.log(yellowCircle);
    return (
        <section className="container mx-auto space-y-8 px-6 py-20 lg:space-y-16 lg:px-0">
            <Heading className="text-center" tag="h2">
                OUR <span className="text-accent-500">CORE</span> VALUES
            </Heading>

            <div className="">
                <ul className="grid list-inside list-image-[url('/src/assets/icons/about/yellow-circle.svg')] gap-y-10 marker:text-accent-500 lg:grid-cols-2 lg:justify-items-center lg:gap-y-14">
                    {cardArray.map((el, i) => (
                        <li className="max-w-md">
                            <article className="ml-2 inline space-y-2 text-2xl">
                                <Heading className=" inline" tag="h3">
                                    We strive for excellence
                                </Heading>
                                <p className="ml-8 text-sm leading-5 lg:text-lg lg:leading-7">
                                    We give the best quality and efficiency in all aspects of the
                                    business to reach or exceed the targets and expectations.
                                </p>
                            </article>
                        </li>
                    ))}

                    {/* <div>
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
                    </div> */}
                </ul>
            </div>
        </section>
    );
};

export default CoreValues;
