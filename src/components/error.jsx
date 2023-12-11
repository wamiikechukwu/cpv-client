export default function Error({ style, message, condition }) {
    return (
        <div>
            {condition && <p className={style}>{message}    </p>}
        </div>
    )
}