import React from 'react'
import Image from "/Users/quyanabarrow/qb-codes/blog/client/newblog/src/img/CT logo PNG file-01.png"
import Image2 from "/Users/quyanabarrow/qb-codes/blog/client/newblog/src/img/Culturalist honeycomb.PNG"
import Edit from "../img/9.72.png"
import Delete from "../img/8.72.png"
import {Link} from "react-router-dom"
import { Menu } from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={Image} alt="" />
        <div className="user">
          <img src={Image2} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        <br />
        <br />
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single