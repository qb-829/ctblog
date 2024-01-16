import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async ()=>{
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("./upload", formData)
       return res.data
      
    } catch (err) {
      console.log(err)
      
    }
  }
  const handleClick = async e=>{
    e.preventDefault()
    const imgUrl = await upload()

    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title,desc:value,cat,img:file ? imgUrl : ""
      }) : await axios.post(`/posts/`, {
        title,desc:value,cat,img:file ? imgUrl : "",date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      navigate("/")
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" id="file" name="" onChange={e=>setFile(e.target.files[0])} />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="button">
            <button>Save Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "hiphop"} name="cat" value="hiphop" id="hiphop"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="hiphop">Hip Hop</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "rnb"} name="cat" value="rnb" id="rnb"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="rnb">R&B</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "movies"} name="cat" value="movies" id="movies"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="movies">Movies</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "tv"} name="cat" value="tv" id="tv"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="tv">TV</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "sneakers"} name="cat" value="sneakers" id="sneakers"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="sneakers">Sneakers</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "fashion"} name="cat" value="fashion" id="fashion"onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="fashion">Fashion</label>
          </div>
        </div>
      </div>
    
    
    </div>

  )
}

export default Write