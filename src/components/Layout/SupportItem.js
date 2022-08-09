const SupportItem = props => {
    return (
        <div className="max-w-[400px] text-center pt-32 pb-10">
            <div className="rounded-full w-24 h-24 flex justify-center items-center bg-gray-100 text-gray-500 mx-auto">{props.icon}</div>
            <div className="pt-6">
                <h2 className="font-normal text-xl">{props.title}</h2>
                <p className="text-sm font-normal mt-4 text-gray-500 px-4">{props.desc}</p>
            </div>
        </div>
    )
}

export default SupportItem;