import React from 'react';
import Button from '../../../components/ui/Button';

import { benefitDoctorImage, benefitProgrammerImage } from '../../../assets/images';

const Benefits = () => {
    return (
        <section className="container mx-auto px-8">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,_1fr),_auto] lg:grid-rows-3 lg:gap-8">
                <div className="lg:col-start-1 lg:col-end-2">
                    <h2 className="text-center text-4xl font-bold leading-[70px] text-secondary-50 md:self-end md:text-start md:text-5xl lg:text-[66px] ">
                        Employee Benefits
                    </h2>
                </div>

                <div className="flex h-full flex-row gap-4 p-4 lg:col-start-2 lg:col-end-3 lg:row-span-full">
                    <div className="h-full max-w-[231.816px]">
                        <img
                            className="h-full object-none object-center"
                            src={benefitDoctorImage}
                            alt="benefitDoctorImage"
                        />
                    </div>

                    <div className="h-full max-w-[231.816px]">
                        <img
                            className="h-full object-none object-center"
                            src={benefitProgrammerImage}
                            alt="benefitProgrammerImage"
                        />
                    </div>
                </div>

                <div className="lg:col-start-1 lg:col-end-2">
                    <ol className="list-inside list-decimal text-3xl">
                        <li>HMO (Medical & Dental Coverage)</li>
                        <li>Performance-based Salary Increase</li>
                        <li>Flexible Work Setup</li>
                    </ol>
                </div>

                <div className="lg:col-start-1 lg:col-end-2">
                    <Button>View more benefits</Button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
