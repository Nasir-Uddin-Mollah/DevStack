import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <div className='border-b border-slate-200'>
            <nav className='mx-auto grid min-h-16 max-w-6xl grid-cols-[40px_minmax(0,1fr)_auto] items-center px-3 py-3 sm:flex sm:justify-between sm:px-6 lg:min-h-20 lg:px-8 lg:py-4' aria-label='Main navigation'>
                <button
                    className='flex h-10 w-10 items-center justify-center text-slate-500 md:hidden'
                    type='button'
                    aria-label='Navigation menu'
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <a className='col-start-2 justify-self-center sm:order-first sm:col-auto sm:justify-self-auto' href='/' aria-label='DevStack home'>
                    <img className='h-auto w-[105px] sm:w-[138px]' src={Logo} alt='DevStack' />
                </a>

                <ul className='hidden items-center gap-8 text-sm text-slate-700 md:flex'>
                    <li><a className='font-medium text-pink-600' href='/'>Home</a></li>
                    <li><a className='transition-colors hover:text-pink-600' href='#technologies'>Technologies</a></li>
                    <li><a className='transition-colors hover:text-pink-600' href='#projects'>Projects</a></li>
                    <li><a className='transition-colors hover:text-pink-600' href='#about'>About</a></li>
                    <li><a className='transition-colors hover:text-pink-600' href='#contact'>Contact</a></li>
                </ul>

                <div className='col-start-3 flex items-center gap-2 sm:gap-5'>
                    <button className='text-xs font-medium text-slate-700 transition-colors hover:text-pink-600 sm:text-sm hover:cursor-pointer' type='button'>Sign In</button>
                    <button className='rounded-full bg-pink-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-pink-700 sm:px-5 sm:py-2.5 sm:text-sm hover:cursor-pointer' type='button'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;