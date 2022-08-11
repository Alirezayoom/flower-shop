import flower from '../../assets/home.jpg'

const Header = () => {
    return (
        <header className="w-full h-[720px] bg-gray-200 flex justify-center  " id="home">
                <div>
                    
                    <img src={flower} alt="flower" className='object-cover w-full h-full relative'/>
                    <div className='bg-black absolute w-full h-[720px] top-0 left-0 opacity-40' />
                </div>
                
                <div className='absolute items-center top-[19rem] text-center '>
                    <h1 className='font-serif text-6xl mb-4 text-white'>Floral Dreamin</h1>
                    <p className='text-light text-white text-lg'>your styles, your dreams, our designs</p>
                    <a href="#pros" className='flex border w-44 text-white hover:bg-white hover:text-black px-4 py-2 items-center justify-center mx-auto mt-10'>
                        <p>SHOP NOW</p>
                        <span className='ml-2'>
                            <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>    
                        </span>
                    </a>
                </div>
            
        </header>
    )
}

export default Header;