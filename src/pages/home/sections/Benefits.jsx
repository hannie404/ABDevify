import React from 'react';
import Button from '../../../components/ui/Button';

import { benefitDoctorImage, benefitProgrammerImage } from '../../../assets/images';

const Benefits = () => {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid gap-6 md:grid-cols-2 md:grid-rows-[20%,_auto,_minmax(0,_1fr)] md:gap-8 lg:grid-cols-[minmax(0,_1fr),_40%] lg:gap-10">
                <div className="self-end md:col-start-1 md:col-end-2">
                    <h2 className="text-center text-4xl font-bold leading-[70px] text-secondary-50 md:self-end md:text-start md:text-5xl lg:text-[66px] ">
                        Employees Benefits
                    </h2>
                </div>

                <div className="flex min-h-[35rem] flex-row gap-4 p-4 md:col-start-2 md:col-end-3 md:row-span-full">
                    <div className="flex-1">
                        <img
                            className="h-full w-full rounded-full rounded-bl-none object-cover object-center"
                            src={benefitDoctorImage}
                            alt="benefitDoctorImage"
                        />
                    </div>

                    <div className="flex-1">
                        <img
                            className="h-full w-full rounded-full rounded-tr-none object-cover object-center"
                            src={benefitProgrammerImage}
                            alt="benefitProgrammerImage"
                        />
                    </div>
                </div>

                <div className="md:col-start-1 md:col-end-2">
                    <ol className="list-inside list-decimal space-y-6 md:space-y-8 md:text-xl lg:space-y-10 lg:text-3xl">
                        <li>HMO (Medical & Dental Coverage)</li>
                        <li>Performance-based Salary Increase</li>
                        <li>Flexible Work Setup</li>
                    </ol>
                </div>

                <div className="text-center md:col-start-1 md:col-end-2 md:text-start">
                    <Button>View more benefits</Button>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
