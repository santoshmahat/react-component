import React from 'react';
// import FunctionalBasedComponent from './basic/FunctionalBasedComponent';
// import ClassBasedComponent from './basic/ClassBasedComponent';
import User from './formsandevents/User';

const user = {
  firstName:"Santosh",
  lastName:"Mahat"
}

function App() {
  return (
    <div className="container">
      <User />
    </div>
  )
}

export default App;