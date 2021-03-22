import React, { Component } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (evt) => {
        console.log("handleSubmit", this)
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
        // console.log("Login", this)
        // let {formName} = this.props
        let {username, password} = this.state

        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    {/* <h1>{formName}</h1> */}
                    <label htmlFor="username">Username:</label>
                    <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" className="auth"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;