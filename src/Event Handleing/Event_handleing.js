import React, { Component } from 'react'

 class Event_handleing extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : " "
      }
    }
    handleOnChange =(e) => {
        
        this.setState (
        {
           changedValue :  e.target.value
           })
    }


  render() {
    return (
      <div>
     <input typeof='text' onChange={this.handleOnChange}></input>
     <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
export default Event_handleing
