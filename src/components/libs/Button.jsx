function LoadingButton({
    buttonType,
    buttonClassName,
    textClassName,
    text,
    onclick,
    iconWidth,
    iconHeight,
    iconClassName,
    isLoading,
    icon
}) {

    const newBtnClass = isLoading ? `${buttonClassName} opacity-30` : buttonClassName
    return (
        <>
            <button
                type={buttonType}
                className={newBtnClass}
                onClick={onclick}
                disabled={isLoading}
            >
                <span className={textClassName}>{text}</span>
                {isLoading && <img src={icon} alt="icon" width={iconWidth} height={iconHeight} className={iconClassName} />}

            </button>
        </>
    )
}

function IconButton({ buttonType, buttonClassName, text, }) {
    return (
        <>
            <button
                type={buttonType}
                className={` flex items-center bg-slate-500 hover:bg-slate-700 rounded text-white py-2 px-2 ${buttonClassName}`}>

                {text}
            </button>
        </>
    )
}

export { LoadingButton, IconButton }