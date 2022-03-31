import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Input} from "./components/Input";

export function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    // const [error, setError] = useState('')
    const error = minValue < 0 || maxValue < 0 || minValue >= maxValue

    let [counter, setCounter] = useState<number | null>(minValue)

    const onIncrease = () => {
        counter !== null && counter < maxValue && setCounter(counter + 1)
    }

    const onReset = () => {
        setCounter(minValue)
    }

    const onSet = () => {
        onReset()
    }

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const onChangeMinValue = (value: number) => {
        setMinValue(value)
    }


    const increaseDisabled = counter === maxValue;
    const resetDisabled = counter === minValue;


    return (
        <div className='App'>
            <Display
                buttons={[{title: 'set', disabled: false, callBack: onSet}]}
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
                error={error}
            >
                {counter === null ? 'Set values then proceed' : counter}
            </Display>
        </div>
    );
}

export default App;
