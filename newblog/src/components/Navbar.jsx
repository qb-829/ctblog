import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/CT logo PNG file-01.png"
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=hiphop">
            <h6>HIP HOP</h6>
          </Link>
          <Link className='link' to="/?cat=rnb">
            <h6>R&B</h6>
          </Link>
          <Link className='link' to="/?cat=movies">
            <h6>MOVIES</h6>
          </Link>
          <Link className='link' to="/?cat=tv">
            <h6>TV</h6>
          </Link>
          <Link className='link' to="/?cat=sneakers">
            <h6>SNEAKERS</h6>
          </Link>
          <Link className='link' to="/?cat=fashion">
            <h6>FASHION</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (<Link classname="link" to="/login">Login</Link>
          )}
          <span className='write'>
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar