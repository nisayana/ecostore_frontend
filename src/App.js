import React from 'react';
import HomeContainer from './HomeComponents/HomeContainer';
import './App.css';
import NotFound from './NotFound';
import NavBar from './HomeComponents/NavBar';
import ItemContainer from './ItemComponents/ItemContainer';
import LoginForm from './HomeComponents/LoginForm'
import RegisterForm from './HomeComponents/RegisterForm'
import About from './HomeComponents/About'
import Checkout from './HomeComponents/Checkout'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import PastOrders from './HomeComponents/PastOrders'
import Profile from './HomeComponents/Profile';
import MainContainer from './ItemComponents/MainContainer';



class App extends React.Component {

  state = {
    // id: 0,
    categories: [],
    token: "",
    username: "",
    current_booking: {
      id: 0,
      joiners: []
    },
    past_bookings: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then((arrayOfCategories) => {
      this.setState({
        categories: arrayOfCategories
      })
    })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(this.helpHandleResponse)
    }
  }

  handleLogOut = () => {
    // localStorage.deleteMyBooking("token")
    this.setState({
      id: 0,
      username: "",
      token: "",
      current_booking: {
        id: 0,
        joiners: []
      },
      past_bookings: []
    })
    localStorage.clear();
    // this.props.history("/");
    alert("Log out successful!")
  }  

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.helpHandleResponse)
      this.props.history.push("/")
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.name,
        password: userInfo.password,
        email: userInfo.email
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
    this.props.history.push("/")
  }

  helpHandleResponse = (resp) => {
    // console.log("response", resp)
    if(resp.error){
      console.error(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        // id: resp.user.id,
        token: resp.token,
        username: resp.user.username,
        current_booking: resp.user.current_booking,
        past_bookings: resp.user.past_bookings
      })
      // this.props.history.push("/profile")
    }
  }

  renderProfile = () => {
    if(this.state.token){
      return <Profile 
        username={this.state.username}
        // past_bookings={this.state.past_bookings}
        current_booking={this.state.current_booking}
        handleLogOut={this.handleLogOut}
      />
    } else{
      return <Redirect to="login"/>
    }
  }




  renderForm = (routerProps) => {
    if(this.state.token){
      return <button className='logout' onClick={this.handleLogOut}>Log out</button>
    }
    if(routerProps.location.pathname === "/login"){
      return <LoginForm
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
            />
      
    } else if (routerProps.location.pathname === "/register") {
      return <RegisterForm
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
        />
    } 
  }

  renderSpecificCategory = (routerProps) => {
    // console.log("router props", routerProps)
    let givenId = routerProps.match.params.id 
    // console.log("givenId", givenId)
    let selectedCategory = this.state.categories.find((categoryPojo) => {
      // console.log("categoryPojo", categoryPojo)
      return categoryPojo.id === parseInt(givenId)
    })
    if (selectedCategory) {
        console.log(this)
        return <MainContainer 
        category = {selectedCategory} 
        token = {this.state.token}
        past_bookings = {this.state.past_bookings}
        current_booking = {this.state.current_booking}
        addToMyBookings = {this.addToMyBookings}
        deleteMyBooking = {this.deleteMyBooking}
        />
    } else {
        return <NotFound />
    }
  }



  addToMyBookings = (item_id) => {
    fetch("http://localhost:3000/joiners", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        item_id: item_id,
        order_id: this.state.current_booking.id
      })
    })
    .then(res => res.json())
    .then(newBooking => {
      // debugger
      let copyOfJoinersForCart = [...this.state.current_booking.joiners, newBooking]
      // console.log(copyOfJoinersForCart)
      let copyOfCart = {
        ...this.state.current_booking,
        joiners: copyOfJoinersForCart
      }  
      this.setState({
        current_booking: copyOfCart
      })
    })
  }


  deleteMyBooking = (joiner) => {
    // console.log(joiner)
    fetch(`http://localhost:3000/joiners/${joiner.id}`, {
      method: "DELETE"

    })
    .then(res => res.json())
    .then(deletedItem => {
      console.log(deletedItem)
      let updatedJoinerCart = this.state.current_booking.joiners.filter(item => {
        return item.id !== deletedItem.joiner.id
      })
      let copyOfCart = {
        ...this.state.current_booking,
        joiners: updatedJoinerCart
      }  
      // console.log(updatedJoinerCart)
      this.setState({
        current_booking: copyOfCart
      })
    })
  }



  currentCartIntoPastOrder = () => {
    fetch(`http://localhost:3000/orders/${this.state.current_booking.id}/transform`, {
      method: "PATCH",
      headers: {
        "Authorization": this.state.token
      }
    })
      .then(res => res.json())
      .then((resp) => {
        console.log(resp)
        let copyOfPastOrders = [...this.state.past_bookings, resp.transformed_cart]
        this.setState({
          current_booking: resp.current_cart,
          past_bookings: copyOfPastOrders
        })
      })
  }

  rednerProfile = (routerProps) => {
    if(this.state.token){
      return <Profile
        username={this.state.username}
        current_booking={this.state.current_booking}
        past_bookings={this.state.password}
        id={this.state.id}
        token={this.state.token}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  

  render() {
    const loggedIn = localStorage.token
    console.log("app.js", loggedIn)
    return(
      <div className="App">
        <NavBar
        loggedIn={loggedIn}
        handleLogOut={this.handleLogOut}
        username={this.state.username}
        />
        <Switch>
          <Route path="/" exact render={() => < HomeContainer
            categories={this.state.categories}
          />} />
          <Route path='/categories/:id' exact render={this.renderSpecificCategory} />
          <Route path='/about' component={About}/>
          <Route path='/login' render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
          {/* <Route path="/profile" render={this.renderProfile}/> */}
          <Route path="/checkout">
            <Checkout
            currentCartIntoPastOrder={this.currentCartIntoPastOrder}
            current_booking={this.state.current_booking}
            // past_bookings={this.state.past_bookings}
            />
          </Route>
          <Route path="/profile">
            <Profile
            renderProfile={this.rednerProfile}
            past_bookings={this.state.past_bookings}
            />
          </Route>
          {/* <Route path='/calendar' component={Calendar}/> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
