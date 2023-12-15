export default function LoadingButton({
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

    const newBtnClass = isLoading? `${buttonClassName} opacity-30` : buttonClassName
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