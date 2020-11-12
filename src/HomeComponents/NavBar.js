import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = ({ loggedIn, handleLogOut, username }) => {
    return(
    <ul className="nav">
        <li>
        <Link to={"/"}>Home
            {/* <div >
            <img
                src="https://res.cloudinary.com/dv588hi0a/image/upload/c_scale,h_72/v1605157616/istockphoto-867037792-612x612_w8hfiq.jpg"
                alt="yoga logo"
            />
            </div> */}
        </Link>
        </li>

        {/* If user is LOGGED IN, display Home button */}
        {/* <li>
        {loggedIn ? (
            <div >
            <Link to={"/"}>Home</Link>
            </div>
        ) : null}
        </li> */}

        <li>
        <div >
        <Link to={"/about"}>About</Link>
      </div>
      </li>

      {/* If user is NOT LOGGED IN, display the Log In button */}
      <div className="right menu">
        {!loggedIn ? (
          <div >
            <Link to={"/login"}>Log In</Link>
          </div>
        ) : null}

        
        {/* If the user IS LOGGED IN, display "Logged In As" and the Log Out button; if they are NOT LOGGED IN, display the Sign Up button */}
        {loggedIn ? (
          <div  id="logged-in-as">
            <div style={{ marginRight: "4px" }}>Logged In As</div>
            <Link to={"/profile"}>{username}</Link>
          </div>
        ) : null}

        <div >
          {loggedIn ? (
            <div className="ui primary button" onClick={handleLogOut}>
              Log Out
            </div>
          ) : (
            <Link to={"/register"}>
              <div className="ui primary button">Sign Up</div>
            </Link>
          )}
        </div>
        </div>
      </ul>


        // <ul className="nav">
        //     <li>
        //         <NavLink to="/about">About</NavLink>
        //     </li>
        //     <li>
        //         <NavLink to="/">Home</NavLink>
        //     </li>
        //     <li>
        //         <NavLink to="/login">Login</NavLink>
        //     </li>
        //     <li>
        //         <NavLink to="/register">Register</NavLink>
        //     </li>
        //     <li>
        //         <NavLink to="/checkout">My cart</NavLink>
        //     </li>
        // </ul>
    )
}

export default NavBar;