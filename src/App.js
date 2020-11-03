import React from 'react';
import HomeContainer from './HomeComponents/HomeContainer';
import './App.css';
import NotFound from './NotFound';
import NavBar from './HomeComponents/NavBar';
import ItemContainer from './ItemComponents/ItemContainer';
import LoginForm from './HomeComponents/LoginForm'
import RegisterForm from './HomeComponents/RegisterForm'
import About from './HomeComponents/About'

import {Switch, Route, withRouter} from 'react-router-dom'


class App extends React.Component {

  state = {
    categories: [],
    token: "",
    username: "",
    current_booking: {
      id: 0,
      item_orders: []
    },
    past_booking: []
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
    this.setState({
      id: 0,
      name: "",
      token: ""
    })
    localStorage.clear()
  }  

  handleLoginSubmit = (userInfo) => {
    // console.log("from LoginSubmit", this)
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
      .then(this.helpHandleLoginResponse)
      // this.props.history.push("/")
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  }

  helpHandleResponse = (resp) => {
    console.log("response", resp)
    if(resp.error){
      console.log(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        token: resp.token,
        username: resp.user.username,
        current_booking: resp.user.current_booking,
        past_booking: resp.user.past_booking
      })
    }
  }


  helpHandleLoginResponse = (resp) => {
    if(resp.error){
      console.log(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        username: resp.user.username,
        token: resp.token
      })
    }
  }



  renderForm = (routerProps) => {
    if(this.state.token){
      return <button className='logout' onClick={this.handleLogOut}>Logged in as {this.state.username}</button>
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
    let foundCategory = this.state.categories.find((categoryPojo) => {
      // console.log("categoryPojo", categoryPojo)
      return categoryPojo.id === parseInt(givenId)
    })
    if (foundCategory) {
        return <ItemContainer 
        category = {foundCategory} 
        token = {this.state.token}
        past_booking = {this.state.past_booking}
        current_booking = {this.state.current_booking}
        />
    } else {
        return <NotFound />
    }
  }

  

  render() {
    // console.log("categories", this.state)
    return(
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => < HomeContainer
            categories={this.state.categories}
          />} />
          <Route path='/categories/:id/items' exact render={ this.renderSpecificCategory } />
          <Route path='/about' component={About}/>
          <Route path='/login' render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>

        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
