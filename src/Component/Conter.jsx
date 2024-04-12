import React, { useState ,useMemo} from 'react'

const Conter = () => {
    const [countOne,setCountOne]=useState(0)
    const [countTwo,setCountTwo]=useState(0)
    const incrementCountOne =()=>{
        setCountOne(countOne+1)
    }
    const incrementCountTwo =()=>{
        setCountTwo(countTwo+1)
    }
    const countEven=useMemo(()=>{
        let i
        while (i<200000000000000) i++
        return countOne % 2 ===0
    },[countOne])
    
  return (
    <div>
        <div>
            <button onClick={incrementCountOne}>count one - {countOne}</button>
            <span >{countEven ? "even":"odd"}</span>
        </div>
        <div>
            <button onClick={incrementCountTwo}>count one - {countTwo}</button>
        </div>

    </div>
  )
}

export default Conter