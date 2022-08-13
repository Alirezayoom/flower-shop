const Footer = () => {
    return (
        <footer className="w-full  border-gray-200 border-y-2 " id="contacts">
            <div className="max-w-[1080px] mx-auto pt-10">
                <div className="grid lg:grid-cols-10 sm:grid-cols-2 sm:text-left text-center grid-cols-1 mx-4 py-6">
                    <div className="lg:col-span-3 mb-12">
                        <h6 className="font-normal col text-xl">GET IN TOUCH</h6>
                        <ul className=" font-normal mt-3 text-gray-500">
                            <li>13th district</li>
                            <li>Herat, Afghanistan</li>
                            <li>Call: +93789908646</li>
                            <li>Email: alirezayoom@gmail.com</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 mb-12">
                        <h6 className="font-normal text-xl">MY ACCOUNT</h6>
                        <ul className=" font-normal mt-3 text-gray-500">
                            <li><a href="/">My Orders</a></li>
                            <li><a href="/">My History</a></li>
                            <li><a href="/">My Address</a></li>
                            <li><a href="/">My Credit Slips</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 mb-12">
                        <h6 className="font-normal text-xl">INFORMATION</h6>
                        <ul className="font-normal mt-3 text-gray-500">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Affilitate</a></li>
                            <li><a href="/">Featured Sale</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </div>
                

                    <div className="lg:col-span-3 mb-12">
                        <h6 className="font-normal text-xl mb-4">FOLLOW US</h6>
                        <p className="mb-4 text-gray-500">Subscribe now to get 15% off on any product.</p>
                        <form className="border-2 border-gray-200 rounded-full w-max sm:mx-0 mx-auto">
                            <input className="py-2 px-4 outline-none rounded-tl-full rounded-bl-full max-w-[180px]" type="email" placeholder="Your email address" />
                            <button className="bg-gray-200 py-2 px-4 rounded-tr-full rounded-br-full">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;