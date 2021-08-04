import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (evt) => {
        // console.log("handleSubmit", this)
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
            <div class="login-form" >
                <form onSubmit={this.handleSubmit}>
                    {/* <h1>{formName}</h1> */}
                    <div className="field">
                        <label htmlFor="username">Username:</label>
                        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <button className="signin-button">Sign in</button>
                </form>
            </div>
        //     <div className="loginForm">
        //     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        //     <Grid.Column style={{ maxWidth: 450 }}>
        //       <Header as='h2' textAlign='center'>
        //         Login to your account
        //       </Header>
        //       <Form size='large' onSubmit={this.handleSubmit}>
        //         <Segment stacked>
        //           <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange}/>
        //           <Form.Input
        //             fluid
        //             icon='lock'
        //             iconPosition='left'
        //             placeholder='Password'
        //             type='password'
        //           />
        
        //           <Button fluid size='large'>
        //             Login
        //           </Button>
        //         </Segment>
        //       </Form>
        //       <Message>
        //         New to us? <a href='#'>Sign Up</a>
        //       </Message>
        //     </Grid.Column>
        //   </Grid>
        //   </div>
        );
    }
}

export default LoginForm;