import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Input} from "./components/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterType, incCounter, setCounter, setDisplaySet, setMaxValue, setMinValue} from "./redux/CounterReducer";

export function App() {
    let {minValue, maxValue, displaySet, counter} =
        useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const error = minValue < 0 || maxValue < 0 || minValue >= maxValue

    const onIncrease = () => {
        counter !== null && counter < maxValue && dispatch(incCounter())
    }

    const onReset = () => {
        dispatch(setCounter(minValue))
    }

    const onSet = () => {
        dispatch(setDisplaySet(!displaySet))
        onReset()
    }

    const onChangeMaxValue = (value: number) => {
        dispatch(setMaxValue(value))
    }

    const onChangeMinValue = (value: number) => {
        dispatch(setMinValue(value))
    }

    const increaseDisabled = counter === maxValue || error;
    const resetDisabled = counter === minValue;

    return (
        <div className={s.wrapApp}>
            {displaySet
                ? <Display buttons={[{title: 'set', disabled: error, callBack: onSet},
                ]} error={error}>
                    <Input value={maxValue} error={error} onChange={onChangeMaxValue}/>
                    <Input value={minValue} error={error} onChange={onChangeMinValue}/>
                </Display>

                : <Display buttons={[
                    {title: 'inc', disabled: increaseDisabled, callBack: onIncrease},
                    {title: 'reset', disabled: resetDisabled, callBack: onReset},
                    {title: 'set', disabled: error, callBack: onSet},
                ]} error={error || counter === maxValue}>
                    {counter}
                </Display>}
        </div>
    );
}

export default App;
