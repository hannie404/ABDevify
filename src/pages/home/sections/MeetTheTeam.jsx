import React from 'react';
import { annie } from '../../../assets/images';
import { Heading } from '../../../components/ui';

const MeetTheTeam = () => {
  return (
      <div className="max-w-full py-10 lg:py-16">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="col-span-1 font-bold ">
              <div className="flex justify-center lg:justify-start">
                  <div className="top-[50%] flex justify-center gap-8 lg:justify-start">
                      <h2 className="text-center text-6xl uppercase leading-normal lg:text-start">
                          Meet the{' '}
                          <br />
                          <span className="text-accent-400">Team</span>
                      </h2>
                  </div>
              </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <article className="p-8 rounded-2xl border-2 border-secondary-50/10">
                <div className="p-8">
                    <img className="mx-auto" src={annie} alt="Annie" />
                </div>
                    <div className="flex flex-col items-center justify-center lg:space-y-4">
                        <span className="line-clamp-1 truncate text-2xl font-semibold leading-normal text-secondary-50 lg:text-start lg:text-2xl lg:leading-normal">
                            Royce <span className='text-accent-400'>Tecson</span>
                        </span>
                    <span className="block text-xl">Sr.Software Engineer</span>
                </div>
            </article>
            <article className="p-8 rounded-2xl border-2  border-secondary-50/10">
                <div className="p-8">
                    <img className="mx-auto" src={annie} alt="Annie" />
                </div>
                    <div className="flex flex-col items-center justify-center lg:space-y-4">
                        <span className="line-clamp-1 truncate text-2xl font-semibold leading-normal text-secondary-50 lg:text-start lg:text-2xl lg:leading-normal">
                            Aveunalliv <span className='text-accent-400'>Dasalla</span>
                        </span>
                    <span className="block text-xl">Sr.Software Engineer</span>
                </div>
            </article>
          </div>
        </div>
      </div>
    );
};

export default MeetTheTeam;