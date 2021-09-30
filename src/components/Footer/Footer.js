import React from "react";
export default () => {
    return (
        <footer className="mt-12 border-t pt-3 bg-linear-pink-invert pb-4">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 className="text-2xl font-black">Build. Review. Ship.</h1>
                    <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                        <h2 className=" md:mr-6 pb-4 md:py-0">
                            <a hre="#">
                                Download Now
                            </a>
                        </h2>
                        <h2 className="">
                            <a href="#">
                                License
                            </a>
                        </h2>
                    </div>
                    <div className="my-6 text-base text-color f-f-l">
                        <ul className="md:flex items-center">
                            <li className="">
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li className=" md:mr-6  pt-4 lg:py-0">
                                <a href="#">
                                    Features
                                </a>
                            </li>
                            <li className=" md:mr-6  pt-4 lg:py-0">
                                <a href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className=" md:mr-6  pt-4 lg:py-0">
                                <a href="#">
                                    Careers
                                </a>
                            </li>
                            <li className=" md:mr-6  pt-4 lg:py-0">
                                <a href="#">
                                    Help
                                </a>
                            </li>
                            <li className=" pt-4 lg:py-0">
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm text-color">
                        <p> © 2020 Prodify. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}