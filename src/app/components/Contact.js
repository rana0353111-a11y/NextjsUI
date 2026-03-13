import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8oupp4e",
        "template_zy0yeva",
        form.current,
        "d6c1_hXElSjCkPg7v"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Send me a message!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .contact-section {
          padding: 80px 20px;
          background: linear-gradient(to right, #7b2ff7, #f107a3);
          color: white;
          font-family: Arial, sans-serif;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-container h2 {
          font-size: 36px;
          margin-bottom: 10px;
          border-bottom: 3px solid white;
          display: inline-block;
          padding-bottom: 5px;
        }

        .contact-container p {
          margin-bottom: 40px;
          font-size: 18px;
        }

        .contact-form {
          background: white;
          color: #333;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #7b2ff7;
          box-shadow: 0 0 5px rgba(123, 47, 247, 0.5);
        }

        .contact-form button {
          padding: 12px;
          background-color: #7b2ff7;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .contact-form button:hover {
          background-color: #f107a3;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .contact-container h2 {
            font-size: 28px;
          }

          .contact-container p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}