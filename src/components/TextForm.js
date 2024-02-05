import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  
  function handleUCase(event) {
    let newText = text.toUpperCase();
    setText(newText)
  }
  function handleLCase(event) {
    let newText = text.toLowerCase();
    setText(newText)
  }

  function handleOnchange(event) {
    setText(event.target.value);
  }
  function handleShowOnclick(event) {
    const myValue = setText(event.target.value);
    alert(text);
    setText(text);
  }
  function handleClearOnclick(event) {
    alert("Text cleared...");
    setText("");
  }

  return (
    <div className="container"  > 
        <div className="my-3">
          <h1>Paragraph</h1>
          <textarea className="form-control" value={text} onChange={handleOnchange} id="Textarea1" rows="6"></textarea>
        </div>
        <div className="container my-3">
          <form className="row">
            <div className="col-md-5">
              <h3>Text Summary</h3>
            </div>
            <div class="col-md-7 text-center">
              <button
                type="button" onClick={handleShowOnclick} class="btn btn-primary mx-1">Show Text
              </button>
              <button
                type="button" onClick={handleClearOnclick} class="btn btn-primary mx-1">Clear Text
              </button>
             
              <button
                type="button" onClick={handleUCase} class="btn btn-primary mx-1">Converto to Upper Case
              </button>
              <button
                type="button" onClick={handleLCase} class="btn btn-primary mx-1">Converto to Lower Case
              </button>
            </div>
          </form>

          <p>
            Total words {text.split(" ").length} and characters {text.length}
          </p>
        </div>
      </div>
  );
}
