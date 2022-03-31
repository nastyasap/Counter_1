import s from './Display.module.css'
import {Button, ButtonPropsType} from "./Button";
import React from "react";

type DisplayPropsType = {
    buttons: Array<ButtonPropsType>
    error: boolean
}

export const Display: React.FC<DisplayPropsType> = ({children, buttons, error}) => {
    const classDisplay = `${s.displayWrapper} ${error ? s.red : ''}`
    return (
        <div className={s.display}>
            <div className={classDisplay}>
                {children}
            </div>
            <div className={s.buttons}>
                {buttons.map(buttonProps => (
                    <Button key={buttonProps.title} {...buttonProps}/>
                ))}
            </div>
        </div>
    )
}