import React, { Component } from 'react'

class ClassTimer extends Component {
    intravel
    constructor(props) {
      super(props)
    
      this.state = {
        timer:0
         
      }
    }
    componentDidMount(){
        this.intravel=setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intravel)

    }

  render() {
    return (
      <div>
        class timer - {this.state.timer}
        <button onClick={()=>clearInterval(this.intravel)}>clear timer</button>
        
      </div>
    )
  }
}

export default ClassTimer
