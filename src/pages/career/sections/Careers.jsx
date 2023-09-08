import { careers } from '../../../assets/images';
import { Heading } from '../../../components/ui';

const Careers = () => {
    return (
        <>
            <section className="container mx-auto px-6 pb-20 pt-10">
                <div className="grid space-y-6 lg:grid-cols-2 lg:grid-rows-[20%,_minmax(0,_1fr)] lg:gap-y-8 lg:space-y-0">
                    <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:self-end">
                        <Heading className="text-center lg:text-start" tag="h2">
                            Careers
                        </Heading>
                    </div>

                    <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:self-center">
                        <img className="w-full" src={careers} alt="careers" />
                    </div>

                    <div className="space-y-6 text-xs leading-5 text-secondary-50/70 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:text-2xl lg:leading-9">
                        <p>
                            You will be familiarized and working in a fast-paced, agile environment.
                            Career advancement will be based on your performance evaluation which
                            covers job-specific, attendance and behavioral criteria.
                        </p>
                        <p>
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
