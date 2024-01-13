import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title'/>
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
          <input style={{display:"none"}} type="file" id="file" name=""  />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="button">
            <button>Save Draft</button>
            <button>Update </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="hiphop" id="hiphop"/>
            <label htmlFor="hiphop">Hip Hop</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="rnb" id="rnb"/>
            <label htmlFor="rnb">R&B</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="movies" id="movies"/>
            <label htmlFor="movies">Movies</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="tv" id="tv"/>
            <label htmlFor="tv">TV</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="sneakers" id="sneakers"/>
            <label htmlFor="sneakers">Sneakers</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="fashion" id="fashion"/>
            <label htmlFor="fashion">Fashion</label>
          </div>
        </div>
      </div>
    
    
    </div>

  )
}

export default Write