import { useState } from "react";
import "./supportForm.css";
import emailjs from "@emailjs/browser";

const formInitialState = {
  name: "",
  email: "",
  message: "",
};

export function SupportForm() {
  const [formDetails, setFormDetails] = useState(formInitialState);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("REACT_APP_SERVICE_ID", "REACT_APP_TEMPLATE_ID", e.target, {
        publicKey: "REACT_APP_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  function handleInputChange(event) {
    event.preventDefault();
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <form onSubmit={sendEmail}>
      <h3>Contact us for 1-on-1 consultancy services</h3>
      <section className="support-form">
        <div className="input-fields" id="name-info">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="data_input"
            placeholder="Enter your name"
            name="name"
            value={formDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-fields" id="email-info">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="data_input"
            placeholder="Enter your email"
            name="email"
            value={formDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-fields" id="message-info">
          <label htmlFor="message">Your message</label>
          <textarea
            type="textbox"
            id="message"
            className="data_input"
            placeholder="What would you like support with"
            name="message"
            value={formDetails.message}
            onChange={handleInputChange}
            required
          />
        </div>
      </section>

      <button type="submit" className="submit-btn">
        Send email
      </button>
    </form>
  );
}
