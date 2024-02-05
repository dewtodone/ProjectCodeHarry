import React, { useState } from "react";

export default function TextForm() {
    const [myComment, setMycomment] = useState("Comments")
    const handleOnchange = (event) => {
        setMycomment(event.target.value)
    }
    const handleClick = () => {
        alert(myComment.toUpperCase())
    }
    const handleClickLower = () => {
        alert(myComment.toLowerCase())
    }

  return (
    <div className="container">
      <h1>My Text Form</h1>
      <form>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
          <input type="email" className="form-control"id="exampleInputEmail1" />
          <div id="emailHelp" className="form-text">Never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Comments</label>
          <textarea type="comments" className="form-control" id="exampleArea" 
          rows="6" defaultValue={myComment} onChange={handleOnchange}/>
          
        </div>
        <div>
            <p> Words {myComment.split(" ").length} and Charactors {myComment.length}</p>
          </div>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleClick}> Show to Uppercase </button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleClickLower}> Convert to Lowercase </button>
      </form>
    </div>
  );
}
