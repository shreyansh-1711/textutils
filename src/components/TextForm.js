// import React, { useState } from 'react'
// // import PropTypes from 'prop-types'


// export default function TextForm(props) {

//     const handleOnChange = (event) => {
//         // console.log("On Click was clicked");
//         setText(event.target.value);
//     }

//     const handleUpClick = () => {
//         // console.log("On Click was clicked" + text);
//         let newText = text.toUpperCase()
//         setText(newText)

//     }
//     const handleLoClick = () => {
//         // console.log("On Click was clicked" + text);
//         let newText = text.toLowerCase()
//         setText(newText)

//     }


//     const [text, setText] = useState('Enter Text here');
//     return (
//         <>
//         <div className="container" style={{color : props.mode==='dark'?'grey':'black'}}>
//             <h1> {props.heading} </h1>
//             <div className="mb-3">
//                 {/* <label for="myBox" className="form-label">Enter Your Text</label> */}
//                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
//             </div>
//             <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To upper case</button>
//             <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower case</button>

//         </div>

//         <div className="container my-4">
//             <h1>Your Text Summary</h1>
//             <h3>{text.split(" ").length} Words and {text.length} Character</h3>
//             <p>{0.008 * text.split(" ").length} Minutes</p>
//             <h2>Preview</h2>
//             <p>{text}</p>

//         </div>
//         </>
//     )

// }


import React,{useState} from 'react'

export default function TextForm(props) {

  const upperCaseClick = ()=>{
    setText(text.toUpperCase())
    props.showAlert("Converted to uppercase","success")
  }
  const lowerCaseClick = ()=>{
    setText(text.toLowerCase())
    props.showAlert("Converted to lowercase","success")
  }


  const extraSpaceClick = ()=>{
    setText((text.split(/[ ]+/)).join(" "))
    props.showAlert("Removed all extra spaces","success")
  }
  const replaceClick = ()=>{
    let toReplace = prompt("Enter text to be replaced : ")
    let toreplace = new RegExp(toReplace,'g')
    let toReplaceWith = prompt("Enter the text you want to replace with : ")
    setText(text.replace(toreplace,toReplaceWith))
    props.showAlert(`Replaced all occourances of ${toReplace} with ${toReplaceWith}`,"success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text,setText] = useState("");
  return (
    <>
        <div className="container" style= {{color : props.mode ==='dark' ? 'white' : '#38303D'}}>
            <h1 className= "my-3" >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style= {{backgroundColor : props.mode ==='dark' ? '#38303D' : 'white', color :props.mode ==='dark' ? 'white' : '#38303D' }} value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
      
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={upperCaseClick}>Convert to UpperCase</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={lowerCaseClick}>Convert to LowerCase</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={replaceClick}>Change all occourances</button>
            <button disabled= {text.length=== 0} className = "btn btn-primary mx-2 my-1" onClick={extraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style= {{color : props.mode ==='dark' ? 'white' : '#38303D'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} words and {text.length} characters.</p>
            <p>Average time to read this text -- {0.008 * text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} minutes</p>
            <h4>Preview</h4>
            <p>{text.length >0 ? text :"Nothing to Preview"}</p>
        </div>
    </>
  )
}