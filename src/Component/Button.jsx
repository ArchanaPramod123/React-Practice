import React from 'react'

const Button = ({click,children}) => {
    console.log('Rendering button - ', children)

  return (
    
        <button onClick={click}>
            {children}
        </button>

  )
}

export default React.memo(Button)