import React from "react";
import Button from "../Buttons/Button";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact Me</h2>

      <form className="form-control">
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Dennis Frank"
            required="required"
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="dennisfrank@gmail.com"
            required="required"
          />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="How can i render help to you?"
            required="required"
          />
        </div>

        <Button text={"Message"} type={"one"} url={"/"} />
      </form>
    </div>
  );
};

export default Contact;
