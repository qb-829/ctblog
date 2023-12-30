import React from 'react'
import Logo from "../img/CT logo PNG file-01.png"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with Love and <b>React.js</b>.
      </span>
    </footer>
  )
}

export default Footer