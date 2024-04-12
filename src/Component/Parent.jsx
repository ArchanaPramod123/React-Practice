import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

const Parent = () => {
    const [age,setAge ]=useState(0)
    const [salary, setSalary]=useState(10000)
    const ageIncrement=useCallback(()=>{
        setAge(age+1)

    },[age])
    const salaryIncrement=useCallback(()=>{
        setSalary(salary+1)
    },[salary])

  return (
    <div>
        <Title></Title>
        <Count text='age' count={age}></Count>
        <Button click={ageIncrement}>Increment Age</Button>
        <Count text='salary' count={salary}></Count>
        <Button click={salaryIncrement}>Increment Salary</Button>
    </div>
  )
}

export default Parent