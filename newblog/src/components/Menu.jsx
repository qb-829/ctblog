import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Menu = ({cat}) => {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },[cat])


    // const posts = [
    //     {
    //       id: 1,
    //       title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //       img: Img1
    
    //     },
    //     {
    //       id: 2,
    //       title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //       img: Img2
    
    //     },
    //     {
    //       id: 3,
    //       title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //       img: Img3
    
    //     },
    //     {
    //       id: 4,
    //       title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //       img: Img4
    
    //     },
    //   ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={`../../public/upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
