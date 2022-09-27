import React from 'react';
const App = () => {
    const services = [
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            pic: "",
            author: 'Chandler Bing'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            pic: "",
            author: 'Chandler Bing'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            pic: "",
            author: 'Chandler Bing'
        },
        {
            category: 'category',
            date: 'November 22, 2021',
            content: 'Pitch termsheet backing validation focus release.',
            pic: "",
            author: 'Chandler Bing'
        },

    ]
    return (
        <section className="app-container mx-auto">
            <div className="text-black body-font bg-white" id='services'>
                <div className="container px-5 py-24 mx-auto">
                    <div className=" mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 latest-news">Latest news</h1>

                    </div>
                    <div className="w-full flex flex-wrap borderjustify-center lg:px-20">
                        {services.map((service) => {
                            return (
                                <div className="w-full max-w-lg md:w-1/4 my-10 mx-10 lg:mb-0 mb-8">
                                    <div>
                                        <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" alt='service-image' className="w-full h-44 rounded-xl" />
                                    </div>
                                    <div className="bg-white">

                                        <div className="py-4">
                                            <div className="flex items-center">
                                                <h2 className="text-lg font-semibold capitalize">{service.category}</h2>
                                                <p className="text-xs text-gray-600 pl-5">{service.date}</p>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-2">{service.content}</p>
                                            <div className="flex items-center justify-between py-5">
                                                <h2 className="text-indigo-700 text-xs font-semibold">{service.author}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {/* new code  */}

                    <section class="bg-white py-8">

                        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                                    <a class="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                        Latest news
                                    </a>

                                   
                                </div>
                            </nav>

                            <div class="w-full md:w-1/3  p-6 flex flex-col">
                                <a href="#">
                                    <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                                    <div class="pt-3 flex items-center justify-between">
                                        <p class="">Product Name</p>
                                        <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                        </svg>
                                    </div>
                                    <p class="pt-1 text-gray-900">£9.99</p>
                                </a>
                            </div>

                            <div class="w-full md:w-1/3  p-6 flex flex-col">
                                <a href="#">
                                    <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                                    <div class="pt-3 flex items-center justify-between">
                                        <p class="">Product Name</p>
                                        <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                        </svg>
                                    </div>
                                    <p class="pt-1 text-gray-900">£9.99</p>
                                </a>
                            </div>

                            <div class="w-full md:w-1/3  p-6 flex flex-col">
                                <a href="#">
                                    <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                                    <div class="pt-3 flex items-center justify-between">
                                        <p class="">Product Name</p>
                                        <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                        </svg>
                                    </div>
                                    <p class="pt-1 text-gray-900">£9.99</p>
                                </a>
                            </div>
                            <div class="w-full md:w-1/3  p-6 flex flex-col">
                                <a href="#">
                                    <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                                    <div class="pt-3 flex items-center justify-between">
                                        <p class="">Product Name</p>
                                        <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                        </svg>
                                    </div>
                                    <p class="pt-1 text-gray-900">£9.99</p>
                                </a>
                            </div>

                        </div>

                    </section>
                    {/*  */}
                </div>
            </div>
        </section>
    );
}

export default App;