import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [value,setValue]=useState(0)
    useEffect(()=>{
        console.log("mound")
        // console.log("update");
        return()=>{
            console.log("unmound")
        }
    },[])
    useEffect(()=>{
        console.log("updatye")
        return()=>{
            console.log("unmound")
        }
    },[value])
  return (
    <div>
        <button onClick={()=>setValue(value+1)}>+</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value-1)}>-</button>
    </div>
  )
}

export default LifeCycle