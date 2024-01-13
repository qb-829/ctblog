import React, { useContext, useEffect, useState } from 'react'
import Image2 from "/Users/quyanabarrow/qb-codes/blog/client/newblog/src/img/Culturalist honeycomb.PNG"
import Edit from "../img/9.72.png"
import Delete from "../img/8.72.png"
import {Link, useLocation} from "react-router-dom"
import { Menu } from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext.js'

const Single = () => {
  const [post,setPost] = useState({})

    const location = useLocation()

    const postId = location.pathname.split("/")[2]

    const {currentUser} = useContext(AuthContext)

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const res = await axios.get(`/posts/${postId}`)
          setPost(res.data)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
    },[postId])

    // Check if post object is empty or null
    if (!post || Object.keys(post).length === 0) {
      return <div>Loading...</div>;
    }
  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src={Image2} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
         {currentUser.username === post.username && (
          <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>)}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  )
}

export default Single