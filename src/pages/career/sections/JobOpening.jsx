import React from 'react';
import { Heading } from '../../../components/ui';
import { Link } from 'react-router-dom';

const cardArray = new Array(4).fill(undefined);

const JobOpening = () => {
    return (
        <section className="container mx-auto space-y-8 px-6 py-32">
            <div>
                <Heading className="text-center" tag="h2">
                    JOB <span className="text-accent-500">OPENING</span>
                </Heading>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                {cardArray.map((el, i) => (
                    <article
                        className="space-y-4 rounded-xl border-2 border-secondary-50/10 p-4"
                        key={i}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold leading-7 lg:text-3xl">
                                <span className="text-accent-500">Js.</span> Software Engineer
                            </span>
                            <span className="text-xs lg:text-lg">Full time</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link
                                className="text-xs text-accent-500 hover:text-accent-400 lg:text-lg"
                                to="#"
                            >
                                View Details
                            </Link>
                            <time className="text-xs lg:text-lg">9:00am~5:30pm</time>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default JobOpening;
