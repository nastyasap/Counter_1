import s from './Button.module.css'

export type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button} onClick={props.callBack} disabled={props.disabled}>
            {props.title}
        </button>
    )
}