const MainNav = () => {
    return (
        <section className="w-full min-h-[80px]  flex justify-center " id="pros">
            <div className="w-[1080px] flex justify-between items-center px-4 font-medium text-gray-500 text-sm">
                <div className="flex justify-start ">
                    <a className="text-black" href="/" >TOP SELLER</a>
                    <p className="mx-4">/</p>
                    <a href="/" >LATEST</a>
                    <p className="mx-4 md:block hidden">/</p>
                    <a href="/" className="md:block hidden" >FEATURED</a>
                    <p className="md:block mx-4  hidden">/</p>
                    <a href="/" className="md:block hidden">ON SALE</a>
                </div>
                <div className="flex">
                    <div className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full mr-2">
                        <svg className="w-4 " xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                        <svg className="w-4 " xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainNav;