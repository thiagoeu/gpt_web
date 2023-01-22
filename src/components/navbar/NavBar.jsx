import React from 'react'
import './navbar.css'
import {RiMenu3linem, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

// BEM = Block Element Modifier

const NavBar = () => {
  return (
   
    <div className='gpt__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>

        </div>
      </div>
    </div>
   
  )
}

export default NavBar