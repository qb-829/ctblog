import React from 'react'
import Img1 from "../img/6.72.png"
import Img2 from "../img/7.72.png"
import Img3 from "../img/8.72.png"
import Img4 from "../img/9.72.png"

export const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          img: Img1
    
        },
        {
          id: 2,
          title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          img: Img2
    
        },
        {
          id: 3,
          title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          img: Img3
    
        },
        {
          id: 4,
          title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          img: Img4
    
        },
      ]

  return (
    <div className='menu'>
        <h1>other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}
