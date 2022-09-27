export default function Index() {
    return (
        <div className="w-full p-5 text-white bg-midnight lg:rounded-xl lg:w-10/12 mx-auto">
            <div className="w-full relative flex items-center justify-center">
                <div className="bg-opacity-80 md:my-6 lg:py-6 py-5 w-full md:mx-24  md:px-4 flex flex-col items-center justify-center relative z-40">
                    <p className="text-2xl text-center text-white mt-6 subscribe md:text-3xl xl:text-5xl  md:leading-loose">
                        An enterprise template to ramp
                    </p>
                    <p className="text-2xl text-centertext-white mt-6 subscribe md:text-3xl xl:text-5xl md:leading-loose">
                        up your company website
                    </p>

                </div>
            </div>
            <div className="mb-10 flex flex-wrap space-x-2 items-center justify-center">
                <input type="text" name="subscribe" placeholder="Your email address" id="subscribe" className="rounded-full focus:outline-none text-black py-3 sm:px-2 px-4 md:px-10 lg:w-4/12 max-w-md mb-6 md:mb-0" />
                <button className="sm:ml-3 ml-5 focus:outline-none bg-bermuda dark:hover:bg-lemon transition duration-150 ease-in-out hover:bg-lemon dark:bg-lemon rounded-full text-midnight font-bold mb-6 md:mb-0 px-8 py-3 lg:w-2/12 max-w-md ">Start now</button>

            </div>
        </div>
    );
}
