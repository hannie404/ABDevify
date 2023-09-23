import { Heading } from '../../../components/ui';
import {
    docker,
    laravel,
    mysql,
    node,
    nuxtjs,
    php,
    python,
    react,
    sass,
    tailwind,
    vue,
} from '../../../assets/images';

function Technologies() {
    return (
        <>
            <section className="container mx-auto space-y-4 px-6 py-20 lg:space-y-16">
                <Heading className="text-center" tag="h2">
                    <span className="text-accent-500">TECHNOLOGIES</span> WE ARE{' '}
                    <span className="text-accent-500">USING</span>
                </Heading>

                <p className="text-center text-xs leading-5 text-secondary-50/70 lg:text-2xl lg:leading-8">
                    We always make sure to be on trend when it comes to new technologies. Our
                    employees are open to share and collaborate!
                </p>

                <div className="flex flex-wrap items-start justify-center gap-10">
                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={docker} alt="docker" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={laravel} alt="laravel" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={mysql} alt="mysql" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={node} alt="node" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={nuxtjs} alt="nuxtjs" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={php} alt="php" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={python} alt="python" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={react} alt="react" />
                    </div>

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={sass} alt="sass" />
                    </div>

                    {/* <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={tailwind} alt="tailwind" />
                    </div> */}

                    <div className="flex items-center lg:h-20">
                        <img className="h-10 lg:h-20" src={vue} alt="vue" />
                    </div>
                </div>
            </section>

            <div className=" w-full bg-[#1E1E20]/100 py-16 "></div>
        </>
    );
}

export default Technologies;
