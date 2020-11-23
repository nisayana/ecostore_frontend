import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Form, Icon } from 'semantic-ui-react';


class CommentForm extends Component {

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
      this.props.createComment(this.state)
      this.setState({
        comment: ""
      })
    }
  
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} hidden={localStorage.token ? false : true}>
          <TextareaAutosize
            className="comment-form-input"
            label='Leave a review here:'
            placeholder="Write your thoughts"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <br/>
          <Button className="create-review-button" type='submit'>Submit</Button>
        </Form>
      );
    }
  
  }
  
  export default ReviewForm;