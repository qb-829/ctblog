import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import Img1 from "../img/6.72.png"
import Img2 from "../img/7.72.png"
import Img3 from "../img/8.72.png"
import Img4 from "../img/9.72.png"

const Home = () => {
    const [posts,setPosts] = useState([])

    const cat = useLocation().search


    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const res = await axios.get(`/posts${cat}`)
          setPosts(res.data)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
    },[cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //     img: Img1

  //   },
  //   {
  //     id: 2,
  //     title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //     img: Img2

  //   },
  //   {
  //     id: 3,
  //     title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //     img: Img3

  //   },
  //   {
  //     id: 4,
  //     title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //     img: Img4

  //   },
  // ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home