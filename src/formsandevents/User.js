import React, { Component } from 'react';


class User extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      image: '',
      users: []
    }
  }

  handleInputChange = (event) => {

    if (event.target.name === "image") {
      console.log("files", event.target.files)
      this.setState({
        image:event.target.files && event.target.files[0] && URL.createObjectURL(event.target.files[0]) || ""
      })
    } else {
      this.state.firstName = event.target.value;
      console.log("event.value", event.target.value);
      console.log("event.name", event.target.name);
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  }

  handleButtonClick = () => {
    const { firstName, lastName, email, address, image, users } = this.state;
    const user = {
      firstName,
      lastName,
      email,
      address,
      image
    }
    users.push(user);
    this.setState({
      users: users
    })
  }

  render() {
    const { users } = this.state;
    console.log("state", this.state)
    return (
      <div className="container">
        <form>
          <h2>Working with forms and events</h2>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input onChange={this.handleInputChange} type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input onChange={this.handleInputChange} type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input onChange={this.handleInputChange} type="text" name="email" id="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input onChange={this.handleInputChange} type="text" name="address" id="address" className="form-control" placeholder="Address" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input onChange={this.handleInputChange} type="file" name="image" id="image" className="form-control" placeholder="Upload Image" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button onClick={this.handleButtonClick} type="button" className="btn btn-primary" id="btnSave">Save</button>
              </div>
            </div>
          </div>
        </form>

        <ul>
          {
            users.map((user, index) => {
              return (
              
                  <li key={index}>
                  {user.firstName} {user.lastName}
                  <img src={user.image}/>
                  </li>
              
              )
            })
          }
        </ul>

      </div>
    )
  }
}

export default User;