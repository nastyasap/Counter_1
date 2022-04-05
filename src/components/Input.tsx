import {ChangeEvent} from "react";
import s from './Input.module.css'

type InputType = {
    value: number
    error: boolean
    onChange: (value: number) => void
}

export const Input = (props: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.valueAsNumber)
    }

    const inputClassName = `${s.input} ${props.error ? s.error : ''}`

    return <input value={props.value}
                  type='number'
                  onChange={onChangeHandler}
                  className={inputClassName}
    />
}