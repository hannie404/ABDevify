import ServiceSection1 from '../service/sections/ServiceSection1'
import ServiceSection2 from '../service/sections/ServiceSection2'

const Service = () => {
    return (
        <div>

        <section className='container mx-auto py-10 px-7'>
           <ServiceSection1></ServiceSection1>
        </section>

        <section className="container mx-auto py-8">
            
        <ServiceSection2/>
        </section>
        
        </div>
    );
};

export default Service;
