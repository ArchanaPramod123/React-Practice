import React,{useContext} from 'react'
import { myContext } from '../Contextfile/Context'

const Earth = () => {
    const {state} = useContext(myContext)
  return (
    <>
    <div>Earth {state}  </div>
    
    </>
  )
}

export default Earth