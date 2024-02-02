const Card = ({children, className}) => {
    return (
        <div className={`max-w-sm w-full rounded-lg shadow-md overflow-hidden ${className}`}>
            {children}
        </div>
    )
}

export default Card