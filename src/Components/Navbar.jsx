import React, { useRef } from 'react'
import '../Components/Navbar.css'

function Navbar()  {
  const navRef= useRef();

  const showNavbar =() => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
        <h1>
            Flower Blossoms
        </h1>
        <nav ref={navRef}>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Order</a> 
        </nav>
    </header>
  )
}

export default Navbar