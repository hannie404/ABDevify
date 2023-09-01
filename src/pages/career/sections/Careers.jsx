import { careersImage } from '../../../assets/images';

const Careers = () => {
    return (
        <>
            <section className="container mx-auto px-4">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="space-y-4 md:basis-3/5">
                        <h1 className="text-center font-poppins text-6xl font-bold tracking-normal text-secondary-50 md:text-start">
                            Careers
                        </h1>

                        <div className="hidden text-2xl leading-10 md:block">
                            <p>
                                You will be familiarized and working in a fast-paced, agile
                                environment. Career advancement will be based on your performance
                                evaluation which covers job-specific, attendance and behavioral
                                criteria.
                            </p>

                            <p>
                                As you step into the next level, you will be introduced to new
                                responsibilities such as handling a team, conducting trainings and
                                engaging in other high-level project management initiatives.
                            </p>
                        </div>
                    </div>

                    <div className="md:basis-2/5">
                        <img
                            className="shadow-secondary-50/50 drop-shadow-lg "
                            src={careersImage}
                            alt=""
                        />
                    </div>

                    <div className="space-y-4 text-2xl md:hidden">
                        <p className="">
                            You will be familiarized and working in a fast-paced, agile environment.
                            Career advancement will be based on your performance evaluation which
                            covers job-specific, attendance and behavioral criteria.
                        </p>

                        <p className="">
                            As you step into the next level, you will be introduced to new
                            responsibilities such as handling a team, conducting trainings and
                            engaging in other high-level project management initiatives.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
