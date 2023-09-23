import { annie } from '../../../assets/images'
import { circleIcon } from '../../../assets/icons';

const BePart = () => {
  return (
    <div className="max-w-full py-10 lg:py-16">
            <div className="container mx-auto grid gap-24 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center ">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                        <img
                            src={annie}
                            alt=""
                            className="h-[185px] w-[185px] rounded-full border border-stone-500 backdrop-blur-[14px]"
                        />
                    </div>
                </div>
                {/* <div className="absolute left-0 top-0 w-[300px] lg:top-[-220px] lg:w-[400px]">
                    <img src={circleIcon} alt="" className="w-full" />
                </div> */}

                <div className="col-span-1 font-bold ">
                    <div className="flex justify-center lg:justify-start">
                        <div className="top-[50%] flex  justify-center gap-8 lg:justify-start">
                            <h2 className="text-center text-6xl uppercase leading-normal lg:text-start">
                                Be part{' '}
                                <span className="text-accent-400">
                                    of <br />
                                </span>
                                <span className="text-accent-400">our</span> team...!
                            </h2>
                        </div>
                        <div className="absolute right-0 top-[70%] w-[300px] lg:top-[50%] lg:w-[400px]">
                            <img src={circleIcon} alt="" />
                        </div>
                    </div>

                    <div className="text-md flex items-center justify-center py-16 lg:justify-start">
                        <h2 className="rounded border border-white p-4 px-24 ">
                            Explore Job Opportunities
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BePart;