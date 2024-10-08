import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




const NavBar = () => {
  return (
    <div className='navbar-container'> 

        <Link to="/products" activeClassName="active">Products</Link>
      <Link to="/" activeClassName="active">ProductList</Link>
        
      
      <nav>
        <NavLink to="/users" activeClassName="active">Product Details</NavLink>
        <NavLink to="/axios-users" activeClassName="active">Axios Users</NavLink>
      </nav>
    </div>
  )
}

export default NavBar

