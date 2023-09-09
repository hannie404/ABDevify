import React from 'react';
import { annie } from '../../../assets/images';
import { Heading } from '../../../components/ui';

function MeetTheTeam() {
    return (
        <section className="container mx-auto space-y-8 px-6 py-16 lg:space-y-16">
            <div className="">
                <Heading className="text-center" tag="h2">
                    Meet The <span className="text-accent-500">Team</span>
                </Heading>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {new Array(6).fill(undefined).map((el, i) => (
                    <article className="aspect-[3/3.5] rounded-2xl border-2  border-secondary-50/10">
                        <div className="p-8">
                            <img className="mx-auto" src={annie} alt="Annie" />
                        </div>

                        <div className="flex flex-col items-center justify-center lg:space-y-4">
                            <span className="line-clamp-1 truncate text-2xl font-semibold leading-normal text-secondary-50 lg:text-start lg:text-3xl lg:leading-normal">
                                Annie Neshreen
                            </span>

                            <span className="block text-xl font-medium">Sr.Software Engineer</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default MeetTheTeam;
