import React from 'react';
import NotFound from './NotFound';

import About from './HomeComponents/About';
import Checkout from './HomeComponents/Checkout';
import HomeContainer from './HomeComponents/HomeContainer';
import LoginForm from './HomeComponents/LoginForm';
import NavBar from './HomeComponents/NavBar';
import PastOrders from './HomeComponents/PastOrders';
import Profile from './HomeComponents/Profile';
import UpdateUserProfile from './HomeComponents/UpdateUserProfile';
import RegisterForm from './HomeComponents/RegisterForm';
import Search from './HomeComponents/Search';

import ItemContainer from './ItemComponents/ItemContainer';
import MainContainer from './ItemComponents/MainContainer';

import {Switch, Route, withRouter, Redirect, NavLink} from 'react-router-dom';
import './App.css';
import ItemFullCard from './ItemComponents/ItemFullCard';


class App extends React.Component {

  state = {
    id: 0,
    categories: [],
    items: [],
    token: "",
    username: "",
    first_name: "",
    last_name: "",
    address: "",
    current_booking: {
      id: 0,
      joiners: []
    },
    past_bookings: [],
    searchTerm: ""
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then((arrayOfCategories) => {
      let arrayOfItems = []
      arrayOfCategories.map(singleCategory => {
        arrayOfItems = [...singleCategory.items, ...arrayOfItems]
      })
      console.log(arrayOfItems)
      this.setState({
        categories: arrayOfCategories,
        items: arrayOfItems
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
    } else {
      return <Redirect to="/login"/>
    }
  }

  handleLogOut = () => {
    // localStorage.deleteMyBooking("token")
    this.setState({
      id: 0,
      username: "",
      first_name: "",
      last_name: "",
      address: "",
      email: "",
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
    console.log("Login form has been submitted", userInfo)
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
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
        email: userInfo.email
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
    this.props.history.push("/")
  }

  helpHandleResponse = (resp) => {
    if(resp.error){
      console.error(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        ...resp.user,
        token: resp.token
      })
    }
  }


  renderForm = (routerProps) => {
    // if(this.state.token){
    //   return <button className='logout' onClick={this.handleLogOut}>Log out</button>
    // }
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
    let givenId = routerProps.match.params.id 
    let selectedCategory = this.state.categories.find((categoryPojo) => {
      return categoryPojo.id === parseInt(givenId)
    })
    if (selectedCategory) {
        let filteredArray = selectedCategory.items.filter((item) => {
          return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return <MainContainer
        items={filteredArray} 
        category = {selectedCategory} 
        token = {this.state.token}
        past_bookings = {this.state.past_bookings}
        current_booking = {this.state.current_booking}
        addToMyBookings = {this.addToMyBookings}
        deleteMyBooking = {this.deleteMyBooking}
        increaseItem = {this.increaseItem}
        decreaseItem = {this.decreaseItem}
        />
    } else {
        return <NotFound />
    }
  }


  renderSpecificItem = (routerProps) => {
    let givenId = routerProps.match.params.id 
    let selectedItem = this.state.items.find((itemPojo) => {
      return itemPojo.id === parseInt(givenId)
    })
    if (selectedItem) {
      console.log(selectedItem)
      return <ItemFullCard
      selectedItem={selectedItem}
      token = {this.state.token}
      past_bookings = {this.state.past_bookings}
      current_booking = {this.state.current_booking}
      addToMyBookings = {this.addToMyBookings}
      deleteMyBooking = {this.deleteMyBooking}
      increaseItem = {this.increaseItem}
      decreaseItem = {this.decreaseItem}
      addReviewToState = {this.addReviewToState}
      // Do I need reviews here???
      reviews = {this.state.reviews}
      user_id = {this.state.id}
      username={this.state.username}
      />
    } else {
        return <NotFound />
    }
  }

  addToMyBookings = (item_id, name) => {
    // console.log(name)
    // console.log(this.state.current_booking.joiners)
    // check to see this.state.current_booking.joiners has an item with the same item_id as parameter 236
    // if the joiners array has an item with the same item_id as a parameter, run increase method function
    const foundItem = this.state.current_booking.joiners.find((cartItem) => {
      return cartItem.item_name === name
    })    
    if (foundItem) {
      this.increaseItem(foundItem)
    } else {
    fetch("http://localhost:3000/joiners", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        item_id: item_id,
        order_id: this.state.current_booking.id,
        quantity: 1
      })
    })
    .then(res => res.json())
    .then(newBooking => {
      let copyOfJoinersForCart = [...this.state.current_booking.joiners, newBooking]
      let copyOfCart = {
        ...this.state.current_booking,
        joiners: copyOfJoinersForCart
      }  
      this.setState({
        current_booking: copyOfCart
        })
      })
    }
  }

  increaseItem = (increasedItem) => {
    console.log(increasedItem)
    if (localStorage.token) {
    let increasedJoinerItem = this.state.current_booking.joiners.map(joiner => {
      if (increasedItem.id === joiner.id) {
        joiner.quantity++
      }
      return joiner
    })
    fetch(`http://localhost:3000/joiners/${increasedItem.id}`, {
      
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        quantity: increasedItem.quantity
      })
    })
    .then(res => res.json())
    .then((updatedSingleItem) => {
      this.setState({
        joiners: increasedJoinerItem
      })
    })
  } else {
      this.props.history.push("/login")
    }
  }

  decreaseItem = (decreasedItem) => {
    let decreasedJoinerItem = this.state.current_booking.joiners.map(joiner => {
      if (decreasedItem.id === joiner.id) {
        joiner.quantity--
      }
      return joiner
    })
    fetch(`http://localhost:3000/joiners/${decreasedItem.id}`, {
      
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        quantity: decreasedItem.quantity
      })
    })
    .then(res => res.json())
    .then((updatedSingleItem) => {
      this.setState({
        joiners: decreasedJoinerItem,
      })
    })
  }

  get itemsAmount() {
    return this.state.current_booking.joiners.reduce((acc, prev) => prev.quantity + acc, 0)
  }


  deleteMyBooking = (joiner) => {
    fetch(`http://localhost:3000/joiners/${joiner.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedItem => {
      let updatedJoinerCart = this.state.current_booking.joiners.filter(item => {
        return item.id !== deletedItem.joiner.id
      })
      let copyOfCart = {
        ...this.state.current_booking,
        joiners: updatedJoinerCart
      }  
      console.log(updatedJoinerCart)
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

  renderProfile = (routerProps) => {
    if(this.state.token){
      return <Profile
        username={this.state.username}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        email={this.state.email}
        address={this.state.address}
        current_booking={this.state.current_booking}
        past_bookings={this.state.past_bookings}
        id={this.state.id}
        token={this.state.token}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  renderProfileUpdate = (routerProps) => {
    if(this.state.token){
      return <div>
        <UpdateUserProfile
          username={this.state.username} 
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          address={this.state.address}
          password={this.state.password}
          user_id ={this.state.id}
          handleUpdateSubmit={this.handleUpdateSubmit}
        />
      </div> 
    } else {
      return <Redirect to="/profile" />
    }
  }

  handleUpdateSubmit = (userInfo) => {
    console.log("Update form has been submitted", this)

    fetch(`http://localhost:3000/users/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        password: userInfo.password,
        email: userInfo.email,
        address: userInfo.address
      })
    })
    .then(res => res.json())
    .then((userInfo) => {
      this.setState({
        username: userInfo.username,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        password: userInfo.password,
        email: userInfo.email,
        address: userInfo.address
      })
    })
    this.props.history.push("/profile")
  }

  searchFunc = (routerProps) =>{
    if(this.props.location.pathname === "/" || this.props.location.pathname.includes('/categories/')) {
      return <Search
      searchTerm={this.state.searchTerm}
      changeSearchTerm={this.changeSearchTerm}
      />
    } 
      return 
  }

  render() {
    console.log("from app", this.state)

    let arrayOfCategories = this.state.categories.map ((categoryPOJO)=>{
      return (
        <NavLink>
        key={categoryPOJO.id}
        to={`/categories/${categoryPOJO.id}`}>{categoryPOJO.name}
        </NavLink>
      )
    })

    const loggedIn = localStorage.token
    let {items, searchTerm} = this.state

    let filteredArray = items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return(
      <div className="App">
        <NavBar
        loggedIn={loggedIn}
        handleLogOut={this.handleLogOut}
        username={this.state.username}
        arrayOfCategories={this.state.categories}
        itemsAmount={this.itemsAmount}
        />
        {this.searchFunc()}
        <Switch>
          <Route path="/" exact render={() => < HomeContainer
          items={filteredArray}
          token = {this.state.token}
          past_bookings = {this.state.past_bookings}
          current_booking = {this.state.current_booking}
          addToMyBookings = {this.addToMyBookings}
          deleteMyBooking = {this.deleteMyBooking}
          increaseItem = {this.increaseItem}
          decreaseItem = {this.decreaseItem}
          />} />
          <Route path='/categories/:id' exact render={this.renderSpecificCategory} />
          <Route path='/items/:id' render={this.renderSpecificItem} />
          <Route path='/about' component={About}/>
          <Route path='/login' exact render={this.renderForm}/>
          <Route path="/register" exact render={this.renderForm}/>
          <Route path="/checkout">
            <Checkout
            currentCartIntoPastOrder={this.currentCartIntoPastOrder}
            current_booking={this.state.current_booking}
            increaseItem={this.increaseItem}
            decreaseItem={this.decreaseItem}
            deleteMyBooking={this.deleteMyBooking}
            // past_bookings={this.state.past_bookings}
            />
          </Route>
          <Route path="/profile" exact render={this.renderProfile}>
            {/* <Profile
              username={this.state.username}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              email={this.state.email}
              address={this.state.address}
              current_booking={this.state.current_booking}
              past_bookings={this.state.past_bookings}
              id={this.state.id}
              token={this.state.token}
            /> */}
          </Route> 
          <Route path="/profile/edit" exact render={this.renderProfileUpdate} />
            
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
