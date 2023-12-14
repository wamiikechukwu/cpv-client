export function InputError({ style, message, condition }) {
    return (
        <div>
            {condition && <p className={style}>{message}    </p>}
        </div>
    )
}

export function Notification({ style, heading, message }) {
    return (
        <>
            {message && <div className={style}>
                {heading && <p className="text-2xl">{heading}</p>}
                <h3 className='font-mono pt-2'>{message}</h3>
            </div>}
        </>
    )
}