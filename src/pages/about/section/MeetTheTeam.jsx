import React from 'react';
import Annie from './Assets/Img/Annie.jpg';
function MeetTheTeam() {
    return (
        <section className="container mx-auto py-16">
            <div className=" text-center text-[34px] font-bold lg:text-[60px]">
                <h1 className="text-secondary-50">
                    Meet the <span className="text-accent-500">Team</span>
                </h1>
            </div>
            <div className="grid grid-rows-6 gap-x-10 gap-y-7 px-10 py-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-7 lg:gap-y-7 lg:px-60">
                {new Array(6).fill(undefined).map((el, i) => (
                    <div className=" h-50 basis-3/12 place-items-center rounded-md border border-secondary-50/20 p-10 ">
                        <article className=" h-[320px] space-y-2 lg:h-[300px]">
                            <figure className="flex items-center justify-center ">
                                <img src={Annie} alt="Annie" className="h-[190px] rounded-full " />
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
