import heroImage from "../../img/hero-image.png"
const Hero = () => {
    return (
        <section class="body-font mt-20" id="hero">
            <div class="text-center mb-20">
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blog</p>
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 lg:mb-20 manrope md:text-3xl ">Thoughts and words</h1>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                        <div className="w-full lg:w-3/5 hidden lg:flex justify-center items-center">
                            <div className="w-full lg:w-3/5 border">
                                <img src={heroImage} alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="border flex justify-center items-center text-xl mt-6 subscribe md:text-3xl xl:text-4xl md:leading-loose">
                                Pitch termsheet backing

                            </p>
                            <p className="border flex justify-center items-center text-xl mt-6 subscribe md:text-3xl xl:text-3xl md:leading-loose">
                                validation focus release.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;