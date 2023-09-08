const ServiceSection2 = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="lg:w-[515px] md:w-[270px] w-[255px] pb-3">
                    <p className="text-center font-poppins font-bold leading-tight text-secondary-50 lg:text-6xl md:text-4xl text-3xl">
                        More <span className="text-accent-500">services we</span> offer
                    </p>
                </div>
            </div>

                {/* Card */}
            <div className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-3 md:grid-rows-1  lg:py-20 md:py-10 md:overflow-auto md:flex md:flex-row p-5 gap-5">
                

                <div className="border border-stone-500 lg:h-[397px] lg:w-[386px] md:h-[300px] md:w-[330px] w-[334px] h-[322px] mr-5 rounded-[16px] lg:pt-28 md:pt-10 pt-28 ">
                    <p className="lg:w-[230px] lg:h-[100px] md:w-[170px] w-[187.098px] h-[81px] lg:text-3xl  md:text-2xl text-2xl font-poppins font-bold leading-normal text-secondary-50 px-5">No-Code <span className="text-accent-500">Development</span></p>
                    <p className="lg:w-[333px] lg:h-[108px] md:w-[230px] w-[270px] lg:text-lg md:text-base font-poppins text-sm non-italic font-normal leading-normal px-5">Our team builds a system or application successfully with a code-free development that works in all platform.</p>
                </div>
                

                

                <div className="border border-stone-500 lg:h-[397px] lg:w-[386px] md:h-[300px] md:w-[330px] w-[334px] h-[322px] mr-5 rounded-[16px] lg:pt-28 md:pt-10 pt-28">
                
                    <p className="lg:w-[240px] lg:h-[100px] md:w-[200px] w-[200px] h-[81px] lg:text-3xl  md:text-2xl text-2xl font-poppins font-bold leading-normal text-secondary-50 px-5">UI/UX <span className="text-accent-500">Design</span> Services </p>
                    <p className="lg:w-[333px] lg:h-[108px] md:w-[230px] w-[270px] lg:text-lg md:text-base font-poppins text-sm non-italic font-normal leading-normal px-5">We create interactive visual design using the right cutting-edge technology.</p>
                </div>
                
                
                <div className="border border-stone-500 lg:h-[397px] lg:w-[386px] md:h-[300px] md:w-[330px] w-[334px] h-[322px] mr-5 rounded-[16px] lg:pt-28 md:pt-10 pt-28">
                    <p className="lg:w-[230px] lg:h-[100px] md:w-[170px] w-[187.098px] h-[81px] lg:text-3xl  md:text-2xl text-2xl font-poppins font-bold leading-normal text-secondary-50 px-5"><span className="text-accent-500">Staff</span> Augmentation</p>
                    <p className="lg:w-[333px] lg:h-[108px] md:w-[230px] w-[270px] lg:text-lg md:text-base font-poppins text-sm non-italic font-normal leading-normal px-5">As a service provider, we deploy engineers to complete other business's team and follow their leadership and development process.</p>
                </div>
                       

            </div>
        </>
    );
};

export default ServiceSection2;
