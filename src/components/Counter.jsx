import React, { useState } from "react";
import "./style.css";

const Counter = () => {
    const [text, setText] = useState("")
    return(
        <div className="wrapper">
            <h1>Counter App</h1>
            
            <div className="counter">
                <div>
                  <h3>Word</h3>
                   <h2>{text.trim().length > 0 ? text.trim().split(" ").length : 0 }</h2>
                </div>

                <div>
                   <h3>letters</h3>
                   <h2>{text.trim().length}</h2>
                </div>

                <div>
                   <h3>Paragraphs</h3>
                   <h2>{text.trim().length > 0 ? text.split(/\r\n|\n/).length : 0 }</h2>
                </div>
            </div>
 
              <textarea value={text} placeholder="Your text here" name="text" id="text" onChange={(e) => setText(e.target.value)} ></textarea>

                <div className="btn">
                    <button onClick={() => setText(" ")}>Clear</button>
                    <button onClick={()=> setText(text.toUpperCase())}> Upper Case</button>
                    <button onClick={()=> setText(text.toLowerCase())}>Lower Case</button>
                </div>
 </div>


    )
}

export default Counter;