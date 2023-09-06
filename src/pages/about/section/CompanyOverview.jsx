import React from 'react';

const CompanyOverview = () => {
    return (
        <div>
            <p className="py-10 text-center text-[34px] font-bold text-secondary-50 lg:text-[80px]">
                About Us
            </p>
            <section className="container mx-auto max-w-full bg-[#1E1E20]/60 px-4 py-14 text-center lg:px-10">
                <div className="md:ml-15 md:mr-15 t grid gap-4 px-5 text-center md:text-center lg:gap-y-20 lg:text-left lg:leading-6">
                    <h1 className="text-[34px] font-bold lg:pl-[69px] lg:text-[80px]">
                        <span className="text-accent-500">COMPANY</span>{' '}
                        <span className="text-secondary-50">OVERVIEW</span>
                    </h1>
                    <h2 className=" text-[12px] leading-6 sm:leading-[57px] md:px-20 md:text-[20px] md:leading-8 lg:text-left lg:text-[32px]">
                        <p>
                            PGM Philipines Inc. is a leading global outsourcing company that
                            specializes in providing a wide range of high-quality and cost-effective
                            outsourcing services to businesses across various industries.
                            Established in May 27, 2023.
                        </p>
                        <br />
                        <p>
                            PGM Philipines Inc. has built a reputation for excellence, innovation,
                            and reliability, serving as a trusted partner for companies seeking to
                            optimize their operations and enhance their competitive edge.
                        </p>
                        <br />
                        <p>
                            We train and support our employees to achieve their highest level of
                            performance so we can fulfill our mission to provide high quality
                            software development services to our clients that will make their
                            business processes easier and more efficient.
                        </p>
                        <br />
                        <p>
                            Our goal is to continue being a management that keeps the business grow
                            and continuously maintains and improves the quality of lives of our
                            employees and clients.
                        </p>
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default CompanyOverview;
