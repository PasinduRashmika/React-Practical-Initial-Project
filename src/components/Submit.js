import React from "react";
import { useState } from "react";

const Submit = () => {
  const [submit, setSubmit] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  const AfterSubmit = (event) => {
    setSubmit("Submitted by "+ submit);
  };
  const mOver =()=>{
    setMouseOver(true);
  }
  const mOut =()=>{
    setMouseOver(false);
  }
   const changeName= (event)=>{
       console.log(event.target.value)
       setSubmit(event.target.value);
   }

  return (
    <div className="home-form">
      <h1>{submit}</h1>
      <div className="form-content">
        <input type="text" placeholder="Enter Name" onChange={changeName} /><br />
        <button style={{backgroundColor: isMouseOver ? "black" : "white", transition:"0.8s"}}
        onClick={AfterSubmit} 
        onMouseOver={mOver}
        onMouseOut={mOut}
        >Submit</button>
      </div>
    </div>
  );
};

export default Submit;
 