import React, { Component } from 'react'

export default class button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
     
    

    countInc = () =>{
        this.setState({
            count: this.state.count + 1
        })
    } 

    countDec = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
  render() {
    const {count} = this.state;
    return (
      <div>  
        <h2>Count: {count}</h2>
        <button className="btn btn-primary" onClick={this.countInc}>+</button>
        <button className='btn btn-denger' onClick={this.countDec}>-</button>
      </div>
    )
  }
}
