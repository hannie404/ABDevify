import NavBrand from '../header/NavBrand';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Twitter from './Twitter';

const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="bg-primary-950/50 py-8">
                <div className="grid-rows-[auto_repeat(2, minmax(0, 1fr))_auto] md:grid-rows-[auto_minmax(0, 1fr)] container mx-auto grid grid-cols-[minmax(0,_1fr)_auto] gap-4 px-4 md:grid-cols-3">
                    <div className="col-start-1 col-end-2 justify-self-start md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                        <NavBrand />
                    </div>

                    <div className="col-start-2 col-end-3 row-start-1 row-end-4 flex flex-col gap-8 self-center justify-self-center md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 md:flex-row">
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                        <Twitter />
                    </div>

                    <section className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                        <h2 className="text-base font-bold leading-9 text-secondary-50 md:text-2xl">
                            Main Office
                        </h2>

                        <p className="text-sm leading-6 md:text-xl md:leading-8">
                            On Phillipines 2nd Level Market! Market! Mabini Ave. cor. Mckinley
                            Parkway Fort Bonifacio Taguig
                        </p>
                    </section>

                    <section className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
                        <h2 className="text-base font-bold leading-9 text-secondary-50 md:text-2xl">
                            Taguig Office
                        </h2>

                        <p className="text-sm leading-6 md:text-xl md:leading-8">
                            on Phillipines 2nd Level Market! Market! Mabini Ave. cor. Mckinley
                            Parkway Fort Bonifacio Taguig
                        </p>
                    </section>

                    <div className="col-start-1 col-end-3 text-center md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:self-center">
                        <button className="rounded-sm border px-7 py-2 font-nunito text-secondary-50 shadow-sm shadow-secondary-300 ring-2 ring-secondary-500/50 lg:px-14">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-4 text-center">
                <p className="p-6">Copyright © 2023 BGM Philippines Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
