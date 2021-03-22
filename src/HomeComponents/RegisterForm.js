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
      <div className='loginForm'>
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" autoComplete="off" 
          name="name" 
          value={name} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">Email:</label>
        <input type="text" autoComplete="off" 
          name="email" 
          value={email} 
          onChange={this.handleChange}
          />


        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" 
          name="password" 
          value={password} 
          onChange={this.handleChange}
        />
        <input className= 'registerFormSubmit' type="submit" value="Submit"/>
      </form>
      </div>
    );
  }

}

export default RegisterForm;