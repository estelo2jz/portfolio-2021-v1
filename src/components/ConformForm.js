import React from "react";
import emailjs from "emailjs-com";

const ConformForm = () => {
  
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_hqwtnv7", "template_i92cywf", e.target, "user_jP5lpmb9Rfgp6dDFcX9eO")
      .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
    e.target.reset();
  }

  return (
    <div>
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <div className="">
            <label>Name</label>
            <input type="text" name="name" className="" />
          </div>
          <div className="">
            <label>Email</label>
            <input type="text" name="user_email" className="" />
          </div>
          <div className="">
            <textarea name="message"/>
            <input type="submit" value="Send" className="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConformForm;
