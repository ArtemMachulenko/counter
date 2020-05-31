import React from 'react';
import { CounterButton } from "../counter-button/CounterButton";
import { CounterConclusion } from "../counter-conclusion/CounterConclusion";
import { CounterInput } from "../counter-input/CounterInput";
import './Counter.scss';

export const Counter = () => {
    const buttons = ['Add value','+1', '-1', '+100', '-100', 'Reset'];
    const [counter, setCounter] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('');

    const onInputChange = (e) => {
        let value = +e.target.value;
        setInputValue(value > 0? value: '');
    }

    const onButtonClick = (buttonName) => {
        const actions = {
            '+1': () => {
                let value = +counter;
                setCounter(value += 1);
            },
            '-1': () => {
                let value = +counter;
                if (!value) return;
                setCounter(value -= 1);
            },
            '+100': () => {
                let value = +counter;
                setCounter(value += 100);
            },
            '-100': () => {
                let value = +counter;
                if (value -100 < 0) return;
                setCounter(value -= 100);
            },
            'Add value': () => {
                if (!inputValue) return;
                let value = +counter;
                setCounter(value += inputValue);
                // setInputValue(''); //очистить поле после добавления значения
            },
            'Reset': () => {
                let value = +counter;
                if (!value) return;
                setCounter(0);
            },
        };

        actions[buttonName]();
    }

    return (
        <div className="counter-wrapper">
            <fieldset>
                <legend className="counter-title">Counter</legend>
                <p>
                    <CounterConclusion counter={counter} />
                </p>
                <p>
                    <CounterInput inputValue={inputValue} onInputChange={onInputChange} />
                </p>
                {
                    buttons.map((button,index) => {
                        return (
                            <p key={index}>
                                <CounterButton onButtonClick={() => {onButtonClick(button)}}>{button}</CounterButton>
                            </p>
                        );
                    })
                }
            </fieldset>
        </div>
    );
}

// export const Counter = () => {
//     const [counter, setCounter] = React.useState(0);
//     const [inputValue, setInputValue] = React.useState('');
//
//     const onInputChange = (e) => {
//         let value = +e.target.value;
//         setInputValue(value > 0? value: '');
//     }
//
//     const onButtonClick = (e) => {
//         const actions = {
//             addOne: () => {
//                 let value = +counter;
//                 setCounter(value += 1);
//             },
//             subtractOne: () => {
//                 let value = +counter;
//                 if (!value) return;
//                 setCounter(value -= 1);
//             },
//             addHundred: () => {
//                 let value = +counter;
//                 setCounter(value += 100);
//             },
//             subtracHundred: () => {
//                 let value = +counter;
//                 if (value -100 < 0) return;
//                 setCounter(value -= 100);
//             },
//             addValue: () => {
//                 if (!inputValue) return;
//                 let value = +counter;
//                 setCounter(value += inputValue);
//                 // setInputValue(''); //очистить поле после добавления значения
//             },
//             reset: () => {
//                 let value = +counter;
//                 if (!value) return;
//                 setCounter(0);
//             },
//         };
//
//         actions[e.target.id]();
//     }
//
//     return (
//         <div className="counter-wrapper">
//             <fieldset>
//                 <legend className="counter-title">Counter</legend>
//                 <p>
//                     <CounterConclusion counter={counter} />
//                 </p>
//                 <p>
//                     <CounterButton id="addOne" title="+1" onButtonClick={onButtonClick} />
//                     <CounterButton id="subtractOne" title="-1"onButtonClick={onButtonClick} />
//                 </p>
//                 <p>
//                     <CounterButton id="addHundred" title="+100" onButtonClick={onButtonClick} />
//                     <CounterButton id="subtracHundred" title="-100" onButtonClick={onButtonClick} />
//                 </p>
//                 <p>
//                     <CounterInput inputValue={inputValue} onInputChange={onInputChange} />
//                     <CounterButton id="addValue" title="Add value" onButtonClick={onButtonClick} />
//                 </p>
//                 <p>
//                     <CounterButton id="reset" title="Reset" onButtonClick={onButtonClick} />
//                 </p>
//             </fieldset>
//         </div>
//     );
// }
