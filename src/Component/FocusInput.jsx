import React,{useRef,useEffect} from 'react'

const FocusInput = () => {
    const focus=useRef(null)
    useEffect(()=>{
        focus.current.focus()


    },[focus])
  return (
    <div>
        <input ref={focus} type="text" />
    </div>
  )
}

export default FocusInput