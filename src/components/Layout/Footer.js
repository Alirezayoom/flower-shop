const Footer = () => {
    return (
        <footer className="w-full  border-gray-200 border-y-2 " id="contacts">
            <div className="max-w-[1080px] mx-auto pt-10">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-4">
                    <div className="py-6">
                        <h6 className="font-normal text-xl">GET IN TOUCH</h6>
                        <ul className=" font-normal mt-3 text-gray-500">
                            <li>13th district</li>
                            <li>Herat, Afghanistan</li>
                            <li>Call: +93789908646</li>
                            <li>Email: alirezayoom@gmail.com</li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 py-6">
                        <div className="mb-12">
                            <h6 className="font-normal text-xl">MY ACCOUNT</h6>
                            <ul className=" font-normal mt-3 text-gray-500">
                                <li>My Orders</li>
                                <li>My History</li>
                                <li>My Address</li>
                                <li>My Credit Slips</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-normal text-xl">INFORMATION</h6>
                            <ul className="font-normal mt-3 text-gray-500">
                                <li>Privacy Policy</li>
                                <li>Affilitate</li>
                                <li>Featured Sale</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-6">
                        <h6 className="font-normal text-xl">FOLLOW US</h6>
                        <p>Subscribe now to get 15% off on any product.</p>
                        <form>
                            <input type="email" placeholder="Your email address" />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;