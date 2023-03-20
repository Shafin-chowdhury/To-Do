import React, { Component } from 'react'
import Homepage from './Homepage';
import Login from './Login';

 class Conditional_rendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    const {isLoggedIn} = this.state
    let element;
  element = isLoggedIn ? <Homepage/> : <Login/>
  return(
    <div>
        {element}
    </div>
  )
  }
}
export default Conditional_rendering;
