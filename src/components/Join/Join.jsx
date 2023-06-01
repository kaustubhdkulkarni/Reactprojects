import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"


import "./join.css";
const Join = ()=> {

    const form = useRef()
    const [value, setValue] = useState("")

    const onInput = (e) => setValue(e.target.value)

    const onClear = () => {
        setValue("");
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_okyz68t', 'template_4w1sw1x', form.current, '2MCduJgzErcybBGwR')
          .then((result) => {
              console.log(result.text);
              alert("Thank you")
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span> your body</span>
          <span className="stroke-text"> with us ?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input  value={value} onInput={onInput} type="email"   name="user_email" placeholder="Enter your email here" />
            <button className="btn btn-j " onClick={onClear}>Join Now</button>
        </form>

      </div>
    </div>
  );
}

export default Join;
