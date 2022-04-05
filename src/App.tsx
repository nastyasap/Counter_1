import React, {useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Input} from "./components/Input";

export function App() {
    const [minValue, setMinValue] = useState(Number(localStorage.getItem('minValue')) || 0)
    const [maxValue, setMaxValue] = useState(Number(localStorage.getItem('maxValue')) || 5)

    let [counter, setCounter] = useState<number | null>(localStorage.getItem('minValue') ? minValue : null)
    const error = minValue < 0 || maxValue < 0 || minValue >= maxValue

    const onIncrease = () => {
        counter !== null && counter < maxValue && setCounter(counter + 1)
    }

    const onReset = () => {
        setCounter(minValue)
    }

    const onSet = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        onReset()
    }

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const onChangeMinValue = (value: number) => {
        setMinValue(value)
    }

    const increaseDisabled = counter === maxValue || error;
    const resetDisabled = counter === minValue;

    return (
        <div className={s.wrapApp}>
            <Display
                buttons={[{title: 'set', disabled: error, callBack: onSet}]}
                error={error}
            >
                <Input value={maxValue} error={error} onChange={onChangeMaxValue}/>
                <Input value={minValue} error={error} onChange={onChangeMinValue}/>
            </Display>

            <Display
                buttons={[
                    {title: 'inc', disabled: increaseDisabled, callBack: onIncrease},
                    {title: 'reset', disabled: resetDisabled, callBack: onReset}
                ]}
                error={error || counter === maxValue}
            >
                {counter === null ? 'Set values then proceed' : error ? 'Incorrect values!' : counter}

            </Display>
        </div>
    );
}

export default App;
