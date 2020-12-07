import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';
import { Form, Button } from 'semantic-ui-react';


class ReviewForm extends Component {

    state={
      review: ""
    }
  
    handleChange = (event) => {
      let {name, value} = event.target
      this.setState({
          [name]: value,
      })
  }
  
  
    handleSubmit=(evt)=>{
      evt.preventDefault()
      this.props.createReview(this.state)
      this.setState({
        review: ""
      })
    }
  
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} hidden={localStorage.token ? false : true}>
          <TextareaAutosize
            className="comment-form-input"
            label='Leave a review here:'
            placeholder="Write your thoughts"
            name="review"
            value={this.state.review}
            onChange={this.handleChange}
          />
          <br/>
          <Button className="create-review-button" type='submit'>Submit</Button>
        </Form>
      );
    }
  
  }
  
  export default ReviewForm;