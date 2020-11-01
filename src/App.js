import React from 'react';
import HomeContainer from './HomeComponents/HomeContainer';
import './App.css';
import NotFound from './NotFound';
import NavBar from './HomeComponents/NavBar';
import ItemContainer from './ItemComponents/ItemContainer';
// import LoginForm from './HomeComponents/LoginForm'

import {Switch, Route, withRouter} from 'react-router-dom'


class App extends React.Component {

  state = {
    categories: [],
    // myItems: []
    // token: "",
    // username: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then((arrayOfCategories) => {
      this.setState({
        categories: arrayOfCategories
      })
    })

  }

  renderSpecificCategory = (routerProps) => {
    console.log(routerProps)
    let givenId = routerProps.match.params.id 
    // console.log(givenId)
    let foundCategory = this.state.categories.find((categoryPojo) => {
      return categoryPojo.id === parseInt(givenId)
    })
    if (foundCategory) {
        return <ItemContainer category = {foundCategory} />
    } else {
        return <NotFound />
    }
  }

  render() {
    console.log("categories", this.state)
    return(
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => < HomeContainer
            categories={this.state.categories}
          />} />
          {/* <Route>
           <ItemContainer categories={this.state.categories} />
          </Route> */}
          <Route path='/:id' exact render={ this.renderSpecificCategory } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
