import React, { Component } from 'react'

class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
            [name]: value
        })
    } 

    render() {
        let {username, password} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                <input type="submit" value="Submit" className="auth"/>
            </form>
        );
    }
}

export default LoginForm;