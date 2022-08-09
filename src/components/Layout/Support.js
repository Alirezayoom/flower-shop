import SupportItem from "./SupportItem";

const Support = () => {
    return (
        <section className="max-w-[1080px] mx-auto flex justify-center mg-gray-300 pb-10" id="services">
            <div className="grid sm:grid-cols-3 grid-cols-1">
                <SupportItem   
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>}
                    title="Free Shipping"
                    desc="Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl 
                    kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl "
                />
                <SupportItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>}
                    title="100% Money Back"
                    desc="Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl 
                    kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl "
                />
                <SupportItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>}
                    title="Quality Support"
                    desc="Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl 
                    kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl Lorem expajl kdsfl "
                />
                
            </div>
        </section>
    )
}

export default Support;