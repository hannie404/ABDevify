import avatar1 from '/src/assets/images/avatar1.png';
import avatar2 from '/src/assets/images/avatar2.png';
import avatar3 from '/src/assets/images/avatar3.png';
import avatar4 from '/src/assets/images/avatar4.png';
import avatar5 from '/src/assets/images/avatar5.png';
import avatar6 from '/src/assets/images/avatar6.png';
import circle from '/src/assets/images/circle.png';
import circle2 from '/src/assets/images/circle2.png';

function Service5() {
    return (
        <div className="max-w-full py-10 lg:py-16">
            <div className="container mx-auto grid gap-24 lg:grid-cols-2">
                <div className="col-span-1 ">
                    <div className="flex w-full justify-between">
                        <img src={avatar1} alt="" className="h-[185px] w-[185px] rounded-full" />
                        <img src={avatar2} alt="" className="h-[185px] w-[185px] rounded-full" />
                        <img src={avatar3} alt="" className="h-[185px] w-[185px] rounded-full" />
                    </div>
                    <div className="mt-16 flex w-full justify-between">
                        <img src={avatar4} alt="" className="h-[185px] w-[185px] rounded-full" />
                        <img src={avatar5} alt="" className="h-[185px] w-[185px] rounded-full" />
                        <img src={avatar6} alt="" className="h-[185px] w-[185px] rounded-full" />
                    </div>
                    <div className="absolute left-0 top-0 w-[300px] lg:top-[-220px] lg:w-[400px]">
                        <img src={circle2} alt="" className="w-full" />
                    </div>
                </div>
                <div className="col-span-1 flex justify-center py-24 font-bold ">
                    <div className="top-[50%] flex  w-[461px] flex-col justify-center gap-8">
                        <h2 className="text-6xl leading-normal">
                            BE PART <span className="text-accent-400">OF OUR</span> TEAM...!
                        </h2>
                        <div className="text-md flex h-[58px] w-[383px] items-center justify-center border border-secondary-500 ">
                            <h2>Explore Job Opportunities</h2>
                        </div>
                        <div className="absolute right-0 top-[70%] w-[300px] lg:top-[50%] lg:w-[400px]">
                            <img src={circle} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service5;
