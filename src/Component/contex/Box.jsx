import React from 'react'
import { useContext } from 'react'
// import {ThemContext} from '/ThemeContext'
 

const Box = () => {
    const theme=useContext(ThemContext)
  return (
    <div>Box</div>
  )
}

export default Box