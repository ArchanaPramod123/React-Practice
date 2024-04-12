import React,{useState,useEffect,useRef} from 'react'

const HookTimer = () => {
    const [timer,setTimer]=useState(0)
    const interavelRef=useRef()
    useEffect(()=>{
        interavelRef.current =setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return()=>{
            clearInterval(interavelRef.current)

        };
    },[])
    //in this case we can call theintetralen but in the button we can call the interavel becuse it is in the useEffect so we use useRef

  return (
    <div>HookTimer-{timer}
    <button onClick={()=>clearInterval(interavelRef.current)}>clear hook timer</button>
    </div>
  )
}

export default HookTimer