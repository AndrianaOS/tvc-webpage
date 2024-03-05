export function SupportForm () {
    return (
      <form action="submit">
        <h3>For 1-on-1 consultancy services, use the form below</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
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
            required
          />
        </div>
        <button type="submit">Send email</button>
      </form>
    );
}