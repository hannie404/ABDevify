import servicesImage2 from '../../../assets/images/rightsideservicespage.png';


const ServiceSection1 = () => {
    return (
        <div className='grid lg:grid-rows-[auto,_minmax(0,_1fr)] md:grid-rows-[auto,_minmax(0,_1fr)]'>
                {/* Header */}
            <div >
                <p className='lg:w-[500px] font-poppins lg:text-4xl	text-secondary-50 font-semibold leading-normal	lg:px-8 md:w-[200px] md:text-2xl md:px-3 text-2xl px-16 pb-4'>Our Services</p>

                <p className='lg:w-[492px] font-poppins lg:text-6xl font-bold leading-tight text-secondary-50 w-[258px] lg:px-7 md:w-[270px] md:text-3xl md:px-3 text-3xl pl-10 pb-1'>Our <span className='text-accent-500'>Strengths</span> and Features</p>

            </div>
                {/* IMAGE */}
            <div className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 justify-center">
                <img src={servicesImage2} className='lg:w-[670px] lg:h-[765px] md:w-[590px] md:h-[505px] w-[312px] h-[295px]' alt="" />
            </div>
            
                {/* Paragraph */}
            <div className=" lg:p-10 md:p-3 lg:justify-center">
                <ol className='list-decimal lg:py-6 md:py-6'>
                    <li className="lg:p-3 md:p-1">
                        <p className='lg:w-[455px] font-poppins lg:text-2xl md:text-base font-normal leading-normal md:w-[340px]'>Provide consultation and offer a good software product to our potential clients to help improve their business processes.</p>
                    </li>
                    <li className="lg:p-3 md:p-1">
                        <p className='lg:w-[455px] font-poppins lg:text-2xl md:text-base font-normal leading-normal md:w-[340px]'>Provide consultation and offer a good software product to our potential clients to help improve their business processes.</p>
                    </li>
                    <li className="lg:p-3 md:p-1">
                        <p className='lg:w-[455px] font-poppins lg:text-2xl md:text-base font-normal leading-normal md:w-[340px]'>Provide consultation and offer a good software product to our potential clients to help improve their business processes.</p>
                    </li>
                </ol>
            </div>
        </div>
    )

}
export default ServiceSection1;