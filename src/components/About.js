import React, { useState } from "react";

export default function About(props) {
  const [btntext, SetBtnText] = useState("Set to Dark Mode")

 const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  
  const handleToggleOnclick =() => {
    if (myStyle.color == 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      SetBtnText("Set to Dark Mode")
    }else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      SetBtnText("Set to Light Mode")
    }
  }
  
 


  return (
    <>
     
      <div className="container" style={myStyle}>
      <h3>About Us</h3>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                style={myStyle}> Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne" className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample" style={myStyle}>
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                style={myStyle}> Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample" >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                aria-controls="collapseThree" style={myStyle}>Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree" className="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <form className="row">
            <div className="col-md-10">
              <h3></h3>
            </div>
            <div class="col-md-2 text-center">
              <button type="button" onClick={handleToggleOnclick} class="btn btn-primary mb-3">
                {btntext}
              </button>
            </div>
          </form>
        </div>
        <p></p>
      </div>
    </>
  );
}
