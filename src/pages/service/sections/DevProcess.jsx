function DevProcess() {
    return (
        <div className="max-w-full py-16">
            <div className="container mx-auto">
                <h2 className=" text-center font-poppins text-[66px] font-bold uppercase text-accent-400">
                    Development <span className="text-white">Process</span>
                </h2>
            </div>

            <div className="container mx-auto mt-[56px] grid lg:grid-cols-3">
                <div className="col-span-1 mx-4 text-primary-500 ">
                    <p className="text-[22px] text-lg font-normal">
                        We make sure to execute proper planning and smart decision-making to deliver
                        the best product to our clients. <br /> <br /> As engineer we will not limit
                        your responsibilities and not just focus on thinking programming solutions,
                        but you are also expected to execute testing or design technical
                        documentations. <br /> <br /> We are an agile environment, we deliver
                        insightful and proper feedback to our engineers and clients in a timely
                        manner. <br />
                        <br /> We encourage teamwork, innovation, process improvement, high-quality
                        output and growth throughout our whole development process.
                    </p>
                </div>
                <div className="col-span-2 mt-8 px-4 text-center text-white md:mt-0 ">
                    <ol className="font-2xl grid list-inside list-decimal gap-8 font-bold lg:grid-cols-3 ">
                        <li className="col-span-2 rounded-full border border-secondary-500 py-6">
                            Market & Research
                        </li>
                        <li className="rounded-full border border-secondary-500 py-6">Planning</li>
                        <li className="rounded-full border border-secondary-500 py-6">
                            System Design
                        </li>
                        <li className="col-span-2 rounded-full border border-secondary-500 py-6">
                            Project Initialization
                        </li>
                        <li className="col-span-2 rounded-full border border-secondary-500 py-6">
                            Development & Testing
                        </li>
                        <li className="rounded-full border border-secondary-500 py-6">
                            Deployment
                        </li>
                        <li className="col-span-1 rounded-full border border-secondary-500 py-6">
                            Maintenance
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default DevProcess;
