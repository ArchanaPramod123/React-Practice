import React,{useReducer, useState} from 'react';
import { Reducer } from './Reducerfile/Reducer';



const CountReducer = () => {
    // const [color,setColor]=useState('red')
    // console.log(color);
    const [stage,dispatch] =useReducer(Reducer,{
        value:0,
        color:"red"
    })
  return (
    <div style={{backgroundColor: stage.color}}>
        <button onClick={()=>{dispatch({type:'change-value',payload:1})}}>+</button>
        <h1>count -{stage.value} </h1>
        <button onClick={()=>{dispatch({type:'change-value',payload:-1})}}>-</button>
        <div>
        <button onClick={()=>{dispatch({type:'change-color',payload:'blue'})}}>change to blue</button>
        <button onClick={()=>{dispatch({type:'change-color',payload:'green'})}}>change to green</button>
        </div>
     

    </div>
  )
}

export default CountReducer