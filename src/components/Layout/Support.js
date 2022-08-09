import SupportItem from "./SupportItem";

const Support = () => {
    return (
        <section className="max-w-[1080px] mx-auto flex justify-center mg-gray-300 pb-10" id="services">
            <div className="grid sm:grid-cols-3 grid-cols-1">
                <SupportItem />
                <SupportItem />
                <SupportItem />
            </div>
        </section>
    )
}

export default Support;