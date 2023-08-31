import NavBrand from '../header/NavBrand';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Twitter from './Twitter';

const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="bg-primary-950/70 py-8">
                <div className="container mx-auto grid grid-cols-3 grid-rows-2">
                    <div className="col-start-1 col-end-3">
                        <NavBrand />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                        <Twitter />
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold leading-9 text-secondary-50">
                            Main Office
                        </h2>

                        <p className="text-xl leading-8">
                            On Phillipines 2nd Level Market! Market! Mabini Ave. cor. Mckinley
                            Parkway Fort Bonifacio Taguig
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold leading-9 text-secondary-50">
                            Taguig Office
                        </h2>

                        <p className="text-xl leading-8">
                            on Phillipines 2nd Level Market! Market! Mabini Ave. cor. Mckinley
                            Parkway Fort Bonifacio Taguig
                        </p>
                    </section>

                    <div>
                        <button className="border">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="p-6">Copyright © 2023 BGM Philippines Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
