export default function LoadingButton({type, className, text, onclick}) {
    return (
        <>
            <button
                type={type}
                className={Style.submit}
                onClick={() =>{onclick}}>
                <span>{span}</span>
                <img src={circle_icon}></img>

            </button>
            <i src={circle_icon} width={50} height={50}></i>
        </>
    )
}