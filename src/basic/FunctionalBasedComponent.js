import React from 'react';

const FunctionalBasedComponent = (props) => {
  console.log("props", props)
   return (
     <div>
       <p>This is a Functional Component</p>
       <p>It is stateless component</p>
       <br/>
       FirstName : { ( props.user && props.user.firstName ) ? props.user.firstName : "" }
       <br/>
       LastName : { props.user && props.user.lastName || ""  }
     </div>
   )
}

FunctionalBasedComponent.defaultProps = {
  user:{
    firstName:"Arjun",
    lastName:"Ghimire"
  }
}

export default FunctionalBasedComponent;







