import React from 'react';
import picture from '../../../assets/images/hero-2.png';

const Team = () => {
    return (
        <div>
            <section>
                <h1 className="px-16 text-center text-[34px] font-bold text-secondary-50">
                    BE PART <span className="text-accent-500">OF OUR</span> TEAM...!
                </h1>
                <div className="grid grid-cols-3 gap-x-10 gap-y-10 py-10 ">
                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>

                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>

                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>

                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>

                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>

                    <div>
                        <img src={picture} alt="" className="rounded-full" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
