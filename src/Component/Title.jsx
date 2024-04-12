import React from 'react'

const Title = () => {
    console.log("Title render")
  return (
    <div>
        Callback Hook
      
    </div>
  )
}

export default React.memo(Title)
