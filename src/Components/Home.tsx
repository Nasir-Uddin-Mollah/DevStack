import BannerStack from '../assets/banner-stack.png';

const Home = () => {
    return (
        <>
            <div className='container mx-auto grid max-w-6xl items-center gap-8 px-6 py-5 mt-10 md:mt-0 md:grid-cols-2 md:gap-4 md:py-8 lg:min-h-[294px] lg:px-8'>
                <div className='text-center md:pl-0 md:text-left'>
                    <h1 id='hero-heading' className='text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl'>
                        Build Your Ideal<br />
                        <span className='bg-gradient-to-r from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent'>Development Stack</span>
                    </h1>
                    <p className='mx-auto mt-5 max-w-[430px] text-sm leading-5 text-slate-500 md:mx-0 md:text-[15px]'>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className='mt-8 flex justify-center gap-2 md:justify-start'>
                        <button className='btn rounded-md bg-gradient-to-r from-orange-500 via-pink-600 to-violet-600 px-3 py-2 text-xs font-semibold text-white'>Explore Technologies</button>
                        <button className='btn rounded-md border border-slate-200 bg-white px-8 py-2 text-xs font-medium text-slate-600'>Learn More</button>
                    </div>
                </div>
                <div>
                    <img src={BannerStack} alt='DevStack' />
                </div>
            </div>
        </>
    );
};

export default Home;