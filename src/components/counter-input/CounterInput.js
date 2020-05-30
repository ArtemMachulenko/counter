import React from 'react';
import './CounterInput.scss';

export const CounterInput = (props) => {
    const {inputValue, onInputChange} = props;

    return (
        <input type="number" value={inputValue} onChange={onInputChange} placeholder="Value" />
    );
}