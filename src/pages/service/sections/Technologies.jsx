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
import frame from '/src/assets/images/frame.png';
import frame2 from '/src/assets/images/frame2.png';

function Technologies() {
    return (
        <>
            <div className=" max-w-full bg-[#1E1E20]/60 py-16">
                <div className="container mx-auto w-full text-center">
                    <h2 className="text-[66px] font-bold leading-[70px] text-accent-400">
                        TECHNOLOGIES <span className="text-white">WE ARE </span>USING
                    </h2>
                    <p className="pt-[45px] text-[22px] font-normal leading-8">
                        We always make sure to be on trend when it comes to new technologies. <br />
                        Our employees are open to share and collaborate!
                    </p>
                </div>
            </div>
            <div className=" w-full bg-[#1E1E20]/100 py-16 ">
                <div className="container mx-auto flex justify-center px-4 ">
                    <img src={frame} alt="" />
                </div>
                <div className="container mx-auto flex justify-center px-4 ">
                    <img src={frame2} alt="" />
                </div>
            </div>
        </>
    );
}

export default Technologies;
