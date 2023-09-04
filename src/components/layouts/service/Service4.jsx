import sass1 from '/src/assets/images/sass.png';
import tailwind from '/src/assets/images/tailwind.png';
import php from '/src/assets/images/php.png';
import react from '/src/assets/images/react.png';
import laravel from '/src/assets/images/laravel.png';
import node from '/src/assets/images/node.png';
import sql from '/src/assets/images/mysql.png';
import nuxt from '/src/assets/images/nuxtjs.png';
import vue from '/src/assets/images/vue.png';
import python from '/src/assets/images/python.png';
import dockers from '/src/assets/images/docker.png';

function Service4() {
    return (
        <>
            <div className=" max-w-full bg-[#1E1E20]/60 py-16">
                <div className="container mx-auto w-full text-center">
                    <h2 className="text-[66px] font-bold text-accent-400">
                        TECHNOLOGIES <span className="text-white">WE ARE </span>USING
                    </h2>
                    <p>
                        We always make sure to be on trend when it comes to new technologies. <br />
                        Our employees are open to share and collaborate!
                    </p>
                </div>
            </div>
            <div className="w-full  bg-[#1E1E20]/100 ">
                <div className="bg container mx-auto grid grid-cols-5 items-center gap-[45px] px-8 ">
                    <img src={sass1} alt="" className="w-full" />
                    <img src={tailwind} alt="" className="w-full" />
                    <img src={php} alt="" className="w-full rounded-full" />
                    <img src={react} alt="" className="w-full" />
                    <img src={laravel} alt="" className="w-full" />
                </div>
                <div className="bg container mx-auto grid grid-cols-6 items-center gap-[45px] ">
                    <img src={node} alt="" className="w-full" />
                    <img src={sql} alt="" className="w-full" />
                    <img src={nuxt} alt="" className="w-full " />
                    <img src={vue} alt="" className="w-full" />
                    <img src={dockers} alt="" className="w-full" />
                    <img src={python} alt="" className="w-full" />
                </div>
            </div>
        </>
    );
}

export default Service4;
