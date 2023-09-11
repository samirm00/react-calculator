import { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.css';

import Card from './components/Card';
import Screen from './components/Screen';
import Button from './components/Button';

const App = () => {
    const [value, setValue] = useState('');
    const btnValues = [
        [1, 2, 3, '/'],
        [4, 5, 6, '*'],
        [7, 8, 9, '-'],
        ['.', 0, '=', '+']
    ];

    const clickHandler = (val) => {
        if (val !== '=') {
            setValue((prevValue) => prevValue + val);
        } else {
            try {
                setValue(evaluate(value));
            } catch (err) {
                setValue('0');
            }
        }
    };
    return (
        <Card>
            <Screen value={value} />
            <div className="btn-container">
                {btnValues.map((row, index) => (
                    <div className="row" key={index}>
                        {row.map((btnValue) => (
                            <Button
                                key={btnValue}
                                text={btnValue}
                                style={btnValue === '=' ? 'btn equal' : 'btn'}
                                clickHandler={() => clickHandler(btnValue)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default App;
