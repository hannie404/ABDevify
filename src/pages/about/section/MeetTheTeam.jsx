import React from 'react';
import Annie from './Assets/Img/Annie.jpg';
function MeetTheTeam() {
    return (
        <section className="container mx-auto">
            <div className=" flex items-center justify-center">
                <div className="mr-3 text-5xl text-white">Meet</div>
                <div className="mr-3 text-5xl text-white">the</div>
                <div className="text-5xl text-accent-500">Team</div>
            </div>
            <div className="mt-3 flex items-center justify-center rounded-t-lg">
                <button className="rounded-md bg-accent-500 px-8 py-3 font-nunito text-xl font-bold leading-normal text-primary-950 hover:bg-accent-400">
                    Meet the Team
                </button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {new Array(6).fill(undefined).map((el, i) => (
                    <div className=" h-50 basis-3/12 place-items-center rounded-md border border-secondary-50/20 p-5">
                        <article className=" h-[471px] space-y-2 ">
                            <figure className="flex items-center justify-center ">
                                <img
                                    src={Annie}
                                    alt="Annie"
                                    className="h-[234px] rounded-full "
                                />
                            </figure>
                            <div className=" flex items-center justify-center">
                                <div className="mr-3 text-2xl text-white">Annie</div>
                                <div className="text-2xl text-accent-500">Nesh..</div>
                            </div>
                            <p className="flex items-center justify-center">Sr.Software Engineer</p>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MeetTheTeam;
