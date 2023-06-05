import React, { useState } from 'react'
import './navbar.css'

// importing icons
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const[active, setActive] = useState('navBar');
// Function to toggle navabar
  const showNav = () => {
    setActive('navBar activeNavBar');
  }

// Function to remove navabar
  const closeNavBar = () => {
    setActive('navBar');
  }
  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className = "icon"/>JourneyJunction</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">New</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={closeNavBar} className="closeNavBar">
             <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar