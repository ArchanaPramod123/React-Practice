import React, { useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import Mon from './Moon'
import { myContext } from '../Contextfile/Context'

const Sun = () => {
    const {state,setState} =useContext(myContext)
  return (
    <>
    <div>Sun {state}</div>
    <button  onClick={()=>setState(state+1)}>change</button>
    <Link to='/earth'>Go to Earth</Link>
    </>
  )
}

export default Sun