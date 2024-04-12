import React, { Component } from 'react'

class ClassFile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello  world"
      }
      console.log("const called")
    }
    componentDidMount(){
        console.log("mound is called")
    }
    componentDidUpdate(){
        console.log("update called")
    }
    componentWillUnmount(){
        console.log("unmound will call")
    }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=>this.setState({message:"updated message"})}>updatae message</button>
        
      </div>
    )
  }
}

export default ClassFile
