import React, { Component } from 'react';

class RegisterForm extends Component {

  state = {
    name: "",
    password: "",
    email: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, password, email} = this.state

    return (
      <div id='log-in-form'>
        <form onSubmit={this.handleSubmit}>
          {/* <h1>Sign up</h1> */}
          <div className="field">
          <label htmlFor="name">Name:</label>
          <input type="text" autoComplete="off" 
            name="name" 
            value={name} 
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input type="text" autoComplete="off" 
            name="email" 
            value={email} 
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="password" autoComplete="off" 
            name="password" 
            value={password} 
            onChange={this.handleChange}
          />
        </div>
        <button className="signin-button">Sign up</button>
      </form>
      </div>
    );
  }
}

export default RegisterForm;