import React, { useState,useEffect } from "react";
export function Counter() {
    const [counter, setCounter] = useState(10);


    useEffect(()=>{console.log('render...');}, [ counter])
    return (
        <>
            <h2>Counter: {counter}</h2>{" "}
            <button
                onClick={() => {
                    setCounter(counter+1);
                }}
            >
                Clickeame
            </button>{" "}

            <button onClick={()=>{setCounter(counter-1)}}>Restar</button>
            <button onClick={()=>{setCounter(100)}}>Reinicio</button>
                <br/><br/>
            <section>
                <input type="text"></input><br/>
                <button>Save</button>
            </section>
        </>
    );
}