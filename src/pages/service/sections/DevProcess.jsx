import { Heading } from '../../../components/ui';

function DevProcess() {
    return (
        <section className="container mx-auto space-y-8 px-6 py-20 lg:space-y-16">
            <div className="">
                <Heading className="text-center" tag="h2">
                    <span className="text-accent-500">DEVELOPMENT</span> PROCESS
                </Heading>
            </div>

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
                <ol className="flex flex-1 list-inside list-decimal flex-wrap gap-4 self-start text-xs font-semibold  lg:order-2 lg:text-2xl">
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        <span>Market & Research</span>
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        Planning
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        System Design
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        Project Initialization
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        Development & Testing
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        Deployment
                    </li>
                    <li className="rounded-full px-4 py-2.5 ring-2 ring-secondary-50/10 lg:px-6 lg:py-5">
                        Maintenance
                    </li>
                </ol>

                <div className="flex-1 space-y-4 text-center text-xs leading-5 text-secondary-50/70 lg:order-1 lg:space-y-8 lg:text-left lg:text-2xl">
                    <p className="">
                        We make sure to execute proper planning and smart decision-making to deliver
                        the best product to our clients.
                    </p>
                    <p className="">
                        As engineer we will not limit your responsibilities and not just focus on
                        thinking programming solutions, but you are also expected to execute testing
                        or design technical documentations.
                    </p>
                    <p className="">
                        We are an agile environment, we deliver insightful and proper feedback to
                        our engineers and clients in a timely manner.
                    </p>
                    <p className="">
                        We encourage teamwork, innovation, process improvement, high-quality output
                        and growth throughout our whole development process.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DevProcess;
