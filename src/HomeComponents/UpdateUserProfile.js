import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


class UpdateUserProfile extends React.Component {
    state = {
        username: this.props.username,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        password: this.props.password,
        email: this.props.email,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        id: this.props.user_id
      }
    
      handleSubmit = (e) => {
        console.log("info submitted")
        e.preventDefault()
        this.props.handleUpdateSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }
    
    render(){

        let {username, password, email, address, city, state, zip, first_name, last_name} = this.state

        return (

            <div>
        <h2 id='registerTitleForm'>Update Information</h2>
          <Form
            onSubmit={this.handleSubmit}
            id='registerForm'>
              <Form.Field
                id='form-input'
                control={Input}
                label='Username'
                placeholder='Username'
                name="username" 
                value={username} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='First name'
                placeholder='First name'
                name="first_name" 
                value={first_name}  
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Last name'
                placeholder='Last name'
                name="last_name" 
                value={last_name} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Email'
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder='joe@schmoe.com'
                // error={{
                //   content: 'Please enter a valid email address',
                // pointing: 'below',
                // }}
              />
              <Form.Field
                id='form-input'
                control={TextArea}
                label='Address'
                placeholder='address'
                name="address" 
                value={address} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={TextArea}
                label='City'
                placeholder='city'
                name="city" 
                value={city} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={TextArea}
                label='State'
                placeholder='state'
                name="state" 
                value={state} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={TextArea}
                label='Zip code'
                placeholder='zip code'
                name="zip" 
                value={zip} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Password'
                placeholder='.........'
                type= 'password'
                name="password" 
                value={password} 
                onChange={this.handleChange}
              />
              <Button inverted color='red' type="submit"> Update</Button>
          </Form>
      </div>
          );
        }
}

export default withRouter(UpdateUserProfile);
