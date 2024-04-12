import React, { useState,Suspense } from 'react'
// import CodeLoder from './Loder/CodeLoder'

const Load=React.lazy(()=>{
    return import('./Loder/CodeLoder')
})

const Lazy = () => {
    const [state,setState]=useState(false)
  return (
    <div>
        <p>settings</p>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
            {state &&
             <Load/>
             }
       
        </Suspense>
        <button onClick={()=>{setState(true)}}></button>
    </div>
  )
}

export default Lazy