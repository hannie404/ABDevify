import { careersImage } from '../../../assets/images';

const Careers = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="text-secondary-50/70">
                        <h1 className="font font-poppins text-4xl font-bold text-secondary-50">
                            Careers
                        </h1>
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

                    <div className="">
                        <img src={careersImage} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
