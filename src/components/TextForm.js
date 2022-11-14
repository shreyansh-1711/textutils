import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        // console.log("On Click was clicked");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("On Click was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)

    }
    const handleLoClick = () => {
        // console.log("On Click was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)

    }


    const [text, setText] = useState('Enter Text here');
    return (
        <>
        <div className="container">
            <h1> {props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Enter Your Text</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower case</button>

        </div>

        <div className="container my-4">
            <h1>Your Text Summary</h1>
            <h3>{text.split(" ").length} Words and {text.length} Character</h3>
            <p>{0.008 * text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )

}
