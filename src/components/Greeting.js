import React, { useState } from 'react';
import Output from './Output';

const Greeting = () => {
    const [changeText, setTextChange] = useState(false);

    const changeTextHandler = () => {
        setTextChange(true);
    }
    return (
        <div>
            <h2> Hello World... </h2>
            {!changeText && <Output> It is good to see you !</Output>}
            {changeText && <Output>Changed</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
};

export default Greeting;
