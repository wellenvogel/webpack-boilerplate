import css from '../style/style.css';
import other from '../style/style.less'
console.log("Hello");

import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState(0);
    const text={
        0:'Off',
        1:'On'
    }
    return <button onClick={() => setState(state===0?1:0)}>{text[state]}</button>;
}

window.onload=()=>{
    render(<App />, document.getElementById("main"));
}
