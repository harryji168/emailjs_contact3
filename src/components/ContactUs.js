import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import useForm from "../useForm";

export const ContactUs = () => {
  // const { handleChange, values } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h791mvn",
        "template_kuz9t6y",
        form.current,
        "user_Q8AlA0ESyiQTOHcZXynF7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="grid">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          // value={values.name}
          // onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          // value={values.last_name}
          // onChange={handleChange}
        />
        <input
          type="text"
          name="number"
          placeholder="Phone"
          required
          // value={values.number}
          // onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          // value={values.user_email}
          // onChange={handleChange}
        />
      </div>
      <div className="address">
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          // value={values.address}
          // onChange={handleChange}
        />
      </div>

      <textarea
        name="message"
        placeholder="Type Your Message here"
        required
        // value={values.message}
        // onChange={handleChange}
      />
      <div className="btn">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
