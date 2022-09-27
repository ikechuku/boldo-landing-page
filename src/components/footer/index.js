import Logo from '../../img/Logo.png'
const Footer = () => {
    return (
        <div className="bg-white-300 pt-20 pb-18 sans ">
            <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4 text-silver">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">

                    <div className="mb-4">
                        <a href="#hero" class="flex title-font font-medium text-midnight  md:mb-0">
                            <img src={Logo} alt='mySvgImage' className='w-24 my-5' />
                        </a>
                    </div>
                    <p className="mb-4">
                        Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                    </p>

                    <p className="text-gray-400 my-10">All rights reserved.</p>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                    <p className="text-black my-4 text-lg font-bold">Landings</p>
                    <ul className="space-y-5 ">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Home{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Product{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Services{" "}
                        </li>

                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                    <p className="text-black my-4 font-bold text-lg">Company</p>
                    <ul className="space-y-5">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Home {" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all flex">
                            Careers <span className='lg:ml-2 rounded-full px-1 lg:px-3 text-center text-xs font-bold pt-1 bg-bermuda text-midnight animate-pulse'>
                                Hiring!
                            </span>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Services{" "}
                        </li>

                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
                    <p className="text-black my-4 font-bold text-lg">Resources</p>
                    <ul className="space-y-5">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Blog{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Products{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            Services{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;