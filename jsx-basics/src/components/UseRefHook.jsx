import { useState, useRef } from "react";

// Day 4 : useRef Hook 
function UseRefHook(){
    const [count, setCount] = useState(0)
let buttonRef = useRef();
    function changeColor(){
        buttonRef.current.style.backgroundColor = "blue"
    }
    function handleCount(){
        setCount(prev => prev + 1)
    }
return(
    <div>
        <h3>React hooks : useRef</h3>
        <div>
            <button 
            ref = {buttonRef} onClick={handleCount} >
                Increment</button>
                <br />
                <br />
            <button onClick={changeColor}>Change button's colour</button>
<br />
            <h3>Count : {count}</h3>
        </div>
    </div>
)
}

export default UseRefHook;