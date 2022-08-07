const Navbar = () => {
    const links = [
        {name: 'HOME', link: '/'},
        {name: 'SERVICES', link: '/'},
        {name: 'ABOUT', link: '/'},
        {name: 'CONTACT', link: '/'}
    ]

    return (
        <nav className="w-full h-[70px]">
            <div className="max-w-[1200px] h-full  grid grid-cols-3 mx-auto items-center px-4">
                <ul className="flex justify-start">{links.map(link=>(
                    <li className="pr-4" key={link.name}><a className="font-light" href={link.link}>{link.name}</a></li>
                ))}</ul>
                <h3 className="mx-auto font-extrabold font-serif text-xl">Flowers.</h3>
                <h1 className="justify-self-end font-light">STORE</h1>
            </div>
        </nav>
    )
}

export default Navbar;