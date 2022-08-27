import React from "react";
import { useState } from "react";

const Game = ()=>{

    const [count, setcount] = useState(0)

    return(
        <>
        <div className="container ">
        <h2 className="title">Lets Play a Counter Game</h2>
        <h3>Your Count: {count}</h3>
        <div className="center ">
        <button className=" btns" onClick={()=>{setcount(count +1)}} >ADD</button>
        <button className=" btns" onClick={()=>{setcount(count-1)}}>Subtract</button>
        <button className=" btns" onClick={()=>{setcount(0)}}>Reset</button>

        </div>

        </div>

        </>
    );
}
export default Game;