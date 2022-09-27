import Logo from '../../img/Logo.png'
const Header = () => {
    return (

        <header class="bg-transparent text-midnight body-font header">
            <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#hero" class="flex title-font font-medium bor text-midnight  md:mb-0">
                    <img src={Logo} alt='mySvgImage' className='logo' />
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer" href='#product'>Product</a>
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer" href='#services'>Services</a>
                    <a class="mr-5 md:mr-10 hover:text-green-100 cursor-pointer" href='#about'>About</a>
                </nav>
                <button className="transition border rounded-full focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 text-midnight px-8 py-2 text-sm">Login</button>
            </div>
        </header>
    );
}

export default Header;