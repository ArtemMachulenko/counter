import React from 'react';
import './CounterConclusion.scss';

export  const CounterConclusion = (props) => {
    const {counter} = props;

    return (
        <span className="counter-conclusion">{counter}</span>
    )
}