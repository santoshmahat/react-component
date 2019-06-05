import React from 'react';


class ClassBasedComponent extends React.Component {
 
   constructor(){
     super();
     this.state  = {
        visible:false
     }
   }

   onClickHandler = () => {
      this.setState({visible:!this.state.visible})
   }

  render(){
    console.log("class props", this.props)
    console.log("state", this.state.visible)
    return (
      <div>
        <p>This is a Class Based Component</p>
        <p>It is stateful Component</p>
        <br/>
        First Name : { this.props.user.firstName }
        Last Name : { this.props.user.lastName }
        <br/>
        <button type="btn btn-primary" onClick={this.onClickHandler}>Toggle</button>
        <br/>
        {this.state.visible ? "I m visible" : ''}
      </div>
    )
  }
  
}
export default ClassBasedComponent;