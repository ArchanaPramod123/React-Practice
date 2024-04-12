import React from 'react'

const Count = ({text,count}) => {
    console.log({text},"is rendering to",{count})
  return (
    <div>{text} - {count}</div>
  )
}

export default React.memo(Count)