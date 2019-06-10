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
      users: [],
      error: ""
    }
  }

  handleInputChange = (event) => {

    if (event.target.name === "image") {
      console.log("files", event.target.files)
      this.setState({
        image: event.target.files && event.target.files[0] && URL.createObjectURL(event.target.files[0]) || ""
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

  handleSubmitForm = () => {
    this.setState({
      error:""
    })
    const { firstName, lastName, email, address, image, users } = this.state;
    const user = {
      firstName,
      lastName,
      email,
      address,
      image
    }

    for (let key in user) {
      if (!user[key]) {
        this.setState({
          error: "All fields are required"
        })
        return;
      }
    }
    users.push(user);
    this.setState({
      users: users
    })
  }

  deleteUser = (email) => {
    const index = this.state.users.findIndex((user) => {
      return user.email === email
    });
    const newUsers = this.state.users.slice();
    newUsers.splice(index, 1)
    this.setState({
      users: newUsers
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
          {this.state.error && (
            <div className="row">
              <div className="col-6">
                <p className="alert alert-danger">{this.state.error}</p>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button onClick={this.handleSubmitForm} type="button" className="btn btn-primary" id="btnSave">Save</button>
              </div>
            </div>
          </div>
        </form>


        {users.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              users.map((user, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>
                        <img src={user.image} style={{ height: "40px", width: "40px" }} />
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={() => this.deleteUser(user.email)}>Delete</button>
                        <button className="btn btn-primary">Detail</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })
            }
          </table>
        )}
      </div >
    )
  }
}

export default User;