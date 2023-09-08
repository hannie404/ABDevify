import { brush } from '../../../assets/icons';
import { Heading } from '../../../components/ui';

const cardArray = new Array(3).fill(undefined);

const MoreServices = () => {
    console.log(brush);
    return (
        <section className="container mx-auto space-y-20 px-6 py-20">
            <div className="text-center">
                <Heading tag="h2">
                    More <span className="text-accent-500">services</span>
                    <br />
                    <span className="text-accent-500">we</span> offer
                </Heading>
            </div>

            <div className="grid grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-3 lg:gap-4">
                {cardArray.map((el, i) => (
                    <article
                        className={`relative flex aspect-square flex-col justify-center space-y-4 rounded-xl border-2 border-secondary-50/10 p-8 before:absolute before:left-1/2 before:top-0 before:flex before:aspect-square before:w-1/4 before:-translate-x-1/2 before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:bg-[url('/src/assets/icons/service/brush.svg')] before:bg-[length:75%] before:bg-center before:bg-no-repeat before:p-4 before:ring-2 before:ring-secondary-50/10`}
                        key={i}
                    >
                        <Heading tag="h3">
                            No-Code
                            <br />
                            <span className="text-accent-500">Development</span>
                        </Heading>
                        <p className="text-base leading-6 text-secondary-50/70 lg:text-lg">
                            Our team builds a system or application successfully with a code-free
                            development that works in all platform.
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default MoreServices;
