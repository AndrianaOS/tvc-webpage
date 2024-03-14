import { useState, useRef } from "react";
import "./supportForm.css";
import emailjs from "@emailjs/browser";

const formInitialState = {
  name: "",
  email: "",
  message: "",
};

export function SupportForm() {
  const [formDetails, setFormDetails] = useState(formInitialState);
  const [handleError, setHandleError] = useState(null);
  const [handleSuccess, setHandleSuccess] = useState(null);

  const form = useRef();

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    process.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${REACT_APP_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setHandleSuccess("Email successfully sent.");
          setFormDetails(formInitialState);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setHandleError(
            "Failed to send email. Please ensure all sections are filled."
          );
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
    <form ref={form} onSubmit={sendEmail}>
      <h3>Contact us for 1-on-1 consultancy services</h3>
      <p className="required-info">
        <span className="red-asterisk">*</span> Fill in all sections
      </p>
      {handleError ? (
        <div>
          <p>ALERT: {handleError}</p>
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
        </div>
      ) : (
        <section>
          {handleSuccess && <p className="success-msg">{handleSuccess}</p>}
          <aside className="support-form">
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
          </aside>
        </section>
      )}
      <p className="required-info">
        <span className="red-asterisk">**</span> The Village Consult is
        committed to protecting and respecting your privacy. We will only use
        your information to provide services you requested from us.
      </p>
      <button type="submit" className="submit-btn">
        Send email
      </button>
    </form>
  );
}
