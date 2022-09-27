import heroImage from "../../img/hero-image.png"
import userImage from "../../img/user1.png"
const Hero = () => {
    return (
        <section class="body-font mt-20" id="hero">
            <div class="px-5 lg:text-center mb-20">
                <p class="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-midnight sans mb-5">Blog</p>
                <h1 class="sm:text-3xl font-medium title-font text-midnight mb-4 lg:mb-40 manrope md:text-6xl ">Thoughts and words</h1>
                <div className="flex items-center justify-between w-full ">
                    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center">
                        <div className="w-full lg:w-3/5 hidden lg:flex justify-between items-center">
                            <div className="w-full flex justify-center  ">
                                <img src={heroImage} className="lg:w-4/5 " alt="hero-image" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mx-auto flex flex-col  lg:p-0 mx-auto">
                            <div className="flex flex-start mt-5 lg:mt-10 items-center sans space-x-3 font-xs">
                                <p className="text-midnight">Category</p>
                                <p className="text-silver">November 22, 2021</p>
                            </div>
                            <p className="flex justify-start items-center text-4xl my-10 subscribe md:text-5xl md:leading-relaxed">
                                Pitch termsheet backing <br />
                                validation focus release.
                            </p>
                            <div className="flex flex-start mt-5 lg:mt-10 items-center space-x-3">
                                <img src={userImage} alt="user-image" />
                                <p className="sans">Chandler Bing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-white border-b-midnight border-b-1 h-10 opacity-70 w-full"></div>

        </section>
    );
}

export default Hero;