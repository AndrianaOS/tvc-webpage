import { useState } from "react"
import "./supportForm.css"

const formInitialState = {
  name: "",
  email: "",
  message: ""
};

export function SupportForm() {
    const [formDetails, setFormDetails] = useState(formInitialState);

    function handleInputChange(event) {
      event.preventDefault();
      setFormDetails({
        ...formDetails,
        [event.target.name]: event.target.value,
      });
    }
  return (
    <form action="submit">
      <h3>Contact us for 1-on-1 consultancy services</h3>
      <section className="support-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea
            type="textbox"
            id="message"
            placeholder="What would you like support with"
            name="message"
            value={formDetails.message}
            onChange={handleInputChange}
            required
          />
        </div>
      </section>

      <button type="submit">Send email</button>
    </form>
  );
}
