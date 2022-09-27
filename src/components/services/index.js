import userImage from "../../img/user1.png"
const App = () => {
    const news = [
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            userImg: "user1",
            pic: "news1",
            author: 'Chandler Bing'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            userImg: "user2",
            pic: "news2",
            author: 'Rachel Green'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            userImg: "user3",
            pic: "news3",
            author: 'Monica Geller'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            userImg: "user1",
            pic: "news4",
            author: 'Joey Tribianni'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            userImg: "user2",
            pic: "news5",
            author: 'Pheobe Buffay'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            userImg: "user3",
            pic: "news6",
            author: 'Chandler Bing'
        },

    ]
    return (
        <section className="app-container mx-auto px-10 lg:px-20 xl:px-24">
            <div className="text-black body-font bg-white" id='news'>
                <div className="container px-5 py-24 mx-auto">
                    {/* new code  */}

                    <section class="bg-white py-8">

                        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                                    <div class="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " >
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 latest-news">Latest news</h1>
                                    </div>


                                </div>
                            </nav>
                            {news.map((item) => {
                                return (
                                    <div class="w-full cursor-pointer lg:w-1/3 p-6 flex flex-col sans">
                                        <img class="hover:grow hover:shadow-lg w-10/12 rounded-3xl" width="300" height="209" src={require(`../../img/${item.pic}.png`)} />
                                        <div className="flex sans flex-col w-10/12">
                                            <div class="pt-3 flex items-center space-x-5 my-4 w-10/12">
                                                <p class="text-midnight font-bold">Category</p>
                                                <p class="text-silver">November 22, 2021</p>
                                            </div>
                                            <p class="pt-1 text-black content lg:text-lg">{item.content}focus release.</p>
                                            <div className="flex flex-start mt-5 items-center space-x-3">
                                                <img src={require(`../../img/${item.userImg}.png`)} alt="user-image" />
                                                <p className="sans">{item.author}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}



                        </div>

                    </section>
                    {/*  */}
                    <div className="app-container mx-auto w-full flex justify-center">
                        <button className="sans border-2 border-midnight sm:ml-3 ml-5 focus:outline-none bg-white dark:hover:bg-black transition duration-150 ease-in-out hover:text-white hover:border-white dark:bg-white rounded-full text-midnight font-bold mb-6 md:mb-0 px-8 py-3 lg:w-2/12 max-w-md text-lg">Load more</button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default App;