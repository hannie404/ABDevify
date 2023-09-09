import { ourService } from '../../../assets/images';
import { Heading } from '../../../components/ui';

const OurServices = () => {
    return (
        <section className="container mx-auto px-6 pb-20 pt-10">
            <div className="grid gap-y-6 md:grid-rows-[auto,_minmax(0,_1fr)] lg:grid-cols-[40%,_60%] lg:grid-rows-[auto,_minmax(0,_1fr)] lg:gap-y-8">
                <div className="space-y-4 text-center md:space-y-6 md:text-start">
                    <p className="text-2xl font-bold lg:text-4xl">Our Services</p>

                    <Heading tag="h2" className=" lg:leading-[5.25rem]">
                        Our <span className="text-accent-500">Strengths</span>
                        <br />
                        and Features
                    </Heading>
                </div>

                <div className="justify-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
                    <img className="mx-auto" src={ourService} alt="" />
                </div>

                <div className="px-8">
                    <ol className="list-inside list-decimal space-y-4 leading-6 text-secondary-50/70 lg:space-y-6 lg:text-2xl lg:leading-9">
                        <li className="">
                            <p className="inline">
                                Provide consultation and offer a good software product to our
                                potential clients to help improve their business processes.
                            </p>
                        </li>

                        <li className="">
                            <p className="inline">
                                Continue or re-develop projects that were not finished by other
                                company.
                            </p>
                        </li>

                        <li className="">
                            <p className="inline">Maintain existing system from other parties.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};
export default OurServices;
