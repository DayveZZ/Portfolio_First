import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tss7lqc",
        "template_c2zfyii",
        form.current,
        "ALfbtSoAV76m0dRx_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = () => {
    alert("Your message has been successfully sent. I will contact you soon.");
  };

  return (
    <div className="contact">
      <main>
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Type your name"
          />

          <input
            type="email"
            name="user_email"
            required
            placeholder="Type your email"
          />

          <textarea
            name="message"
            required
            placeholder="Tell us about your query..."
          />
          <div>
            <input
              onClick={handleClick}
              type="submit"
              value="Send"
              className="btn"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
