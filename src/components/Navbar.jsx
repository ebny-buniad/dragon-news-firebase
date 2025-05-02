import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {

  const { user, logOut } = use(AuthContext)
  // console.log(user)

  const handelLogOut = () => {
    logOut().then(() => {
      alert('Logout Succesfully');
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">

        {
          user ? (
            <button onClick={handelLogOut} className="btn btn-primary px-10 ">Log Out</button>
          ) :
            (<Link to='/auth/login'><button className="btn btn-primary px-10 ">Login</button></Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;
