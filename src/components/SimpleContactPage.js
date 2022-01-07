import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import sanityClient from "../client.js";
import PortableText from "react-portable-text";
import urlBuilder from "@sanity/image-url";

import Parallax from "./ParallaxHeader/ParallaxHeader";

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID.toString(),
    dataset: process.env.REACT_APP_SANITY_DATASET_ID.toString(),
  }).image(source);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactpage"]{
          parallaximage,
          parallaxtext,
          parallaxheight,
          title,
          heading,
          footer,
                  }`
      )
      .then((data) => setContactData(data))
      .catch(console.error());
  }, []);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {contactData &&
        contactData.map((contact, index) => (
          <div key={"Contact" + index}>
            <Parallax
              image={urlFor(contact.parallaximage.asset).url()}
              text={contact.parallaxtext}
              height={contact.parallaxheight}
            />
            <div className="container">
              <PortableText content={contact.heading} />
            </div>
            <div className="ContactForm m-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="contactForm">
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >
                        {/* Row 1 of form */}
                        <div className="row formRow">
                          <div className="col-6 mb-4">
                            <input
                              type="text"
                              name="name"
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: "Please enter your name",
                                },
                                maxLength: {
                                  value: 30,
                                  message: "Please use 30 characters or less",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="Name"
                            ></input>
                            {errors.name && (
                              <span className="errorMessage">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                          <div className="col-6">
                            <input
                              type="email"
                              name="email"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              })}
                              className="form-control formInput"
                              placeholder="Email address"
                            ></input>
                            {errors.email && (
                              <span className="errorMessage">
                                Please enter a valid email address
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className="row formRow  mb-4">
                          <div className="col">
                            <input
                              type="text"
                              name="subject"
                              {...register("subject", {
                                required: {
                                  value: true,
                                  message: "Please enter a subject",
                                },
                                maxLength: {
                                  value: 75,
                                  message:
                                    "Subject cannot exceed 75 characters",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="Subject"
                            ></input>
                            {errors.subject && (
                              <span className="errorMessage">
                                {errors.subject.message}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className="row formRow  mb-4">
                          <div className="col">
                            <textarea
                              rows={3}
                              name="message"
                              {...register("message", {
                                required: true,
                              })}
                              className="form-control formInput"
                              placeholder="Message"
                            ></textarea>
                            {errors.message && (
                              <span className="errorMessage">
                                Please enter a message
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          className="btn btn-main submit-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <ToastContainer backgo />
                  </div>
                </div>
              </div>
            </div>
            <div className="container text-center">
              <PortableText content={contact.footer} />
            </div>
          </div>
        ))}
    </>
  );
};

export default ContactForm;
