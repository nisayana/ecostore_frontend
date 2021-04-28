import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = ({ loggedIn, handleLogOut, username, arrayOfCategories, itemsAmount }) => {
  // console.log(arrayOfCategories)

  let renderCategory = () => {
    // console.log(arrayOfCategories)
    return arrayOfCategories.map((singleCategory) => {
      return (<li><Link to={`/categories/${singleCategory.id}`}>{singleCategory.name}</Link></li>)
    })
  }

  return(
    <ul className="nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <div >
            <Link to={"/about"}>About</Link>
          </div>
        </li>

        {renderCategory()}

        <li>
          <div >
            <Link to={"/checkout"}>My cart ({itemsAmount})</Link>
          </div>
        </li>

      {/* If user is NOT LOGGED IN, display the Log In button */}
          <div className="right menu">
            {!loggedIn ? (
          <div >
            <Link to={"/login"}>Log In</Link>
          </div>) : null}

        
        {/* If the user IS LOGGED IN, display "Logged In As" and the Log Out button; if they are NOT LOGGED IN, display the Sign Up button */}
        {loggedIn ? (
          <div  id="logged-in-as">
            <div style={{ marginRight: "4px" }}>Logged in as</div>
            <Link to={"/profile"}>{username}</Link>
          </div>) : null}

        <div >
          {loggedIn ? (
            <div className="ui primary button" onClick={handleLogOut}>
              Log Out
            </div>) : 
            (
            <Link to={"/register"}>
              <div className="ui primary button">Sign Up</div>
            </Link>
            )}
          </div>
        </div>
      </ul>
    )
}

export default NavBar;