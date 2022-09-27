import Logo from '../../img/Logo.png'
const Header = () => {
    return (

        <header class="bg-transparent text-midnight body-font header mt-10 lg-mt-18">
            <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#hero" class="flex title-font font-medium bor text-midnight md:mb-0">
                    <img src={Logo} alt='mySvgImage' className='logo' />
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base lg:text-lg font-bold justify-center sans text-midnight tracking-wide">
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer hover:scale-110 ease-in-out" href='#product'>Product</a>
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer hover:scale-110 ease-in-out" href='#services'>Services</a>
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer hover:scale-110 ease-in-out" href='#about'>About</a>

                </nav>
                <button className="transition border rounded-full focus:outline-none duration-150 ease-in-out hover:bg-midnight hover:text-white border-b-2 text-midnight px-8 ">
                    <div class="cursor-pointer text-base lg:text-lg font-bold sans my-2 " >Login</div>
                </button>
            </div>
        </header>
    );
}

export default Header;