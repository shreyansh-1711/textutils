import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("On Click was clicked");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("On Click was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)

    }


    const [text, setText] = useState('Enter Text here');
    return (
        <div>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Enter Your Text</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To upper case</button>

        </div>
    )

}
