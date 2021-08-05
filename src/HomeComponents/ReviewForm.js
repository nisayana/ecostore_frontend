import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'semantic-ui-react'

class ReviewForm extends React.Component {

    state = {
        content: "",
        rating: ""
    }

    handleReviewForm = (evt) => {
        evt.preventDefault()
        // console.log("handle review form", this.props)
        if (this.props.token) {
            console.log(this.props)
            fetch(`http://localhost:3000/reviews`, {
                method: "POST",
                headers: {
                    'Content-type': 'Application/json',
                    'authorization': this.props.token
                },
                body: JSON.stringify({
                    item_id: this.props.item.id,
                    content: this.state.content,
                    rating: this.state.rating
                })
            })
            .then(res => res.json())
            .then((newReview) => {
                this.props.addReviewToState(newReview)
            })
        } else {
            this.props.history.push("/login")
        }
        this.setState({
            content: "",
            rating: ""
        })
    }

    handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="review-form">
                <h3>Reviews:</h3>
                <form onSubmit={this.handleReviewForm}>  
                        <Form>
                        <Form.TextArea label='Share with us' 
                            placeholder="Leave a review" 
                            name="content" 
                            id='leaveReviewForm'
                            value={this.state.content} onChange={this.handleChange} />
                        </Form>
                    <input id="createReviewButton" type="submit" value="Submit"/>
                </form>  
            </div>
        )
    }
}

export default withRouter(ReviewForm);