import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className='mt-16 border-t border-slate-100 bg-white'>
            <div className='container mx-auto max-w-6xl px-6 lg:px-8'>
                <div className='grid gap-10 py-12 text-center md:grid-cols-[2fr_1fr_1fr_1fr] md:text-left'>
                    <div className='flex flex-col items-center md:items-start'>
                        <a href='/' aria-label='DevStack home'>
                            <img className='w-24' src={Logo} alt='DevStack' />
                        </a>
                        <p className='mt-3 max-w-xs text-xs leading-5 text-slate-400'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <ul className='mt-4 flex gap-5 text-xs font-medium text-slate-600'>
                            <li><a href='#github' className='hover:text-pink-600'>GitHub</a></li>
                            <li><a href='#twitter' className='hover:text-pink-600'>Twitter</a></li>
                            <li><a href='#linkedin' className='hover:text-pink-600'>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='text-[10px] font-bold tracking-wide text-slate-800'>PRODUCT</h3>
                        <ul className='mt-3 space-y-2 text-xs text-slate-400'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='#technologies'>Technologies</a></li>
                            <li><a href='#projects'>Projects</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='text-[10px] font-bold tracking-wide text-slate-800'>COMPANY</h3>
                        <ul className='mt-3 space-y-2 text-xs text-slate-400'>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li><a href='#careers'>Careers</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='text-[10px] font-bold tracking-wide text-slate-800'>LEGAL</h3>
                        <ul className='mt-3 space-y-2 text-xs text-slate-400'>
                            <li><a href='#privacy-policy'>Privacy Policy</a></li>
                            <li><a href='#terms-of-service'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-3 border-t border-slate-100 py-5 text-[10px] text-slate-400'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <ul className='flex gap-5'>
                        <li><a href='#privacy'>Privacy</a></li>
                        <li><a href='#terms'>Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;