import React from 'react';
import './CounterButton.scss';

export  const CounterButton = (props) => {
    const {onButtonClick=null, children} = props;

    return (
        <button onClick={onButtonClick}>{children}</button>
    )
}


// export  const CounterButton = (props) => {
//     const {title='Not title', onButtonClick=null, id='Not id'} = props;
//
//     return (
//         <button id={id} onClick={onButtonClick}>{title}</button>
//     )
// }
