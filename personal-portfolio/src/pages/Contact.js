import React from "react";

const Contact = () => {
  return (
    <article className="contact">
      <section className="header">
        <div className="title-container">
          <h1 className="title">Contact Me</h1>
          <div className="triangles">
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
        </div>
        <h2>
          Interested in working together? Let's connect via email or LinkedIn!
        </h2>
      </section>
      <section className="contact-container">
        <div className="contact-info">
          <div className="contact-email">
            <h3>email</h3>
            <p>
              <a href="mailto:baik.kaishan@gmail.com">baik.kaishan@gmail.com</a>
            </p>
          </div>
          <div className="contact-socials">
            <h3>linkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/kaishan-baik/">
                linkedin.com/in/kaishan-baik
              </a>
            </p>
          </div>
        </div>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message here!"
          ></textarea>
          <button className="btn">send message !</button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
