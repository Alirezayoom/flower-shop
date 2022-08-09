const Card = props => {
    return (
        <div className={` max-w-[500px] max-h-[80%] bg-white rounded-lg mx-auto ${props.className} `}>{props.children}</div>
    )
}

export default Card;