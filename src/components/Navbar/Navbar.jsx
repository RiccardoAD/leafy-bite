import React from 'react'
import logo from '../../assets/SaladLogo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='logo-container'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h3>Leafy<span>Bite</span></h3>
                </div>
            </Link>
            {/* <Searchbar /> */}
            {/* <Link to={'/favorites/'} style={{ textDecoration: 'none' }}>
                <h4 className='favorite-link'>Favorites: <span>{favorite.length}</span></h4>
            </Link> */}
            </div>
  )
}

export default Navbar
