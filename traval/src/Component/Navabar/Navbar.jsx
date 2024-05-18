import React,{useState} from 'react'
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";



const Navbar = () => {
  const[active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const closeNav = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="$" className="logo flex" >
            <h1> <MdOutlineTravelExplore className='icon'/>Travel.</h1>
          </a>
        </div>
       <div className={active}>
        <ul className="navlists flex">
          <li className="navItem">
            <a href="$" className="navLink">Home</a>
          </li>
           <li className="navItem">
            <a href="$" className="navLink">Pakages</a>
          </li>
           <li className="navItem">
            <a href="$" className="navLink">Shop</a>
          </li>
           <li className="navItem">
            <a href="$" className="navLink">Above</a>
          </li>
           <li className="navItem">
            <a href="$" className="navLink">News</a>
          </li>
           <li className="navItem">
            <a href="$" className="navLink">Contact</a>
          </li>


          <button className='btn'>
            <a href='$'>BOOK NOW</a>
          </button>

        </ul>

        <div onClick={closeNav} className='closeNavbar'>
          <IoIosCloseCircleOutline className='icon'/>
        </div>
       </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNineBold className='icon'/>

        </div>
      </header>
    </section>
  )
}

export default Navbar