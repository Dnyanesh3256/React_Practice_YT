import { useState } from "react";

function Counter(){

    let [count, setCount] = useState(15);

    let incCount = () => {
        if(count >= 30){
            count = 30;
        }else{
            setCount(count + 1);
        }    
    };

    let decCount = () => {
        if(count <= 0){
            count = 0;
        }else{
            setCount(count - 1);
        }
    };

    return(
        <>
            <h2>Counter in React {count}</h2>

            <p>Counter is between 0 to 30</p>

            <button onClick={incCount}>Counter Increase</button>

            <br /> <br />

            <button onClick={decCount}>Counter Decrease</button>
        </>
    )
}

export default Counter