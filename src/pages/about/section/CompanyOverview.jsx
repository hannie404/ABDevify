import React from 'react';
import { Heading } from '../../../components/ui';

const CompanyOverview = () => {
    return (
        <section>
            <div className="container mx-auto px-6 pb-12 pt-6">
                <Heading className="text-center" tag="h1">
                    About Us
                </Heading>
            </div>

            <div className=" bg-[#1e1e20e6]/70">
                <section className="container mx-auto space-y-8 px-6 py-8 lg:space-y-12 lg:py-12">
                    <Heading className="text-center lg:text-start" tag="h2">
                        <span className="text-accent-500">COMPANY</span> OVERVIEW
                    </Heading>
                    <div className="space-y-6 text-center text-xs leading-5 text-secondary-50/70 lg:space-y-8 lg:text-start lg:text-2xl lg:leading-9">
                        <p>
                            PGM Philipines Inc. is a leading global outsourcing company that
                            specializes in providing a wide range of high-quality and cost-effective
                            outsourcing services to businesses across various industries.
                            Established in May 27, 2023.
                        </p>
                        <p>
                            PGM Philipines Inc. has built a reputation for excellence, innovation,
                            and reliability, serving as a trusted partner for companies seeking to
                            optimize their operations and enhance their competitive edge.
                        </p>
                        <p>
                            We train and support our employees to achieve their highest level of
                            performance so we can fulfill our mission to provide high quality
                            software development services to our clients that will make their
                            business processes easier and more efficient.
                        </p>
                        <p>
                            Our goal is to continue being a management that keeps the business grow
                            and continuously maintains and improves the quality of lives of our
                            employees and clients.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CompanyOverview;
