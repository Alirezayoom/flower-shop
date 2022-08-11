import { useState } from "react";
import NavCartButton from "./NavCartButton";

const Navbar = (props) => {
    const [iconIsShow, setIconIsShow] = useState(false);

    const links = [
        {name: 'HOME', link: '#home'},
        {name: 'ABOUT', link: '#about'},
        {name: 'SERVICES', link: '#services'},
        {name: 'CONTACTS', link: '#contacts'}
    ]

    const iconHandler = () => {
        setIconIsShow(!iconIsShow)
    }

    return (
        <nav className="w-full h-[60px] bg-white/95 shadow-md z-40 fixed">
            <div className="max-w-[1080px] h-[60px] relative grid grid-cols-3 mx-auto items-center" >
                
                <div onClick={iconHandler} className="text-2xl font-light ml-4 lg:hidden cursor-pointer w-min">
                    {iconIsShow ? <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div> : <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>}
                </div>
            
                <ul className={`lg:static absolute lg:flex lg:justify-start top-[70px] 
                lg:bg-transparent bg-white lg:w-auto w-full pl-4 z-20
                lg:pb-0 pb-10 lg:shadow-none shadow-md shadow-gray-400
                lg:pt-0 pt-2 ${iconIsShow ? 'bg-white' : 'hidden'}`}
                >{links.map(link=>(
                    <li className="lg:pr-4 mr-2  " key={link.name}><a onClick={iconHandler} className="font-light lg:py-0 py-4 flex justify-center lg:hover:bg-transparent hover:bg-gray-200 " href={link.link}>{link.name}</a></li>
                ))}</ul>

                <h3 className="mx-auto font-extrabold font-serif text-xl">Flowers.</h3>
                
                <h1 className="justify-self-end font-light mr-4"><NavCartButton onShow={props.onShow}/></h1>
            </div>
        </nav>
    )
}

export default Navbar;