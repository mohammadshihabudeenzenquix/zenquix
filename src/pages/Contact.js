import emailjs from "emailjs-com";
import Notiflix from "notiflix";
import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar/NavBar";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";

    // EmailJS send function
    emailjs
      .sendForm(
        "service_ur91eoq", // Replace with your service ID
        "template_lb7f8nf", // Replace with your template ID
        e.target,
        "bam4pCsa89AEn163E" // Replace with your public key
      )
      .then((response) => {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";
        clearInput();

        // Success notification
        Notiflix.Report.success(
          "Success",
          "Your message has been sent successfully.",
          "Okay"
        );
      })
      .catch((error) => {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";

        // Error notification
        Notiflix.Report.failure(
          "An error occurred",
          "Your message could not be sent. Please try again.",
          "Okay"
        );
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="contact"
        className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-28 lg:ml-36">
        <div className="container px-4 mx-auto my-8 lg:px-20">
          <form onSubmit={sendEmail}>
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
              <div className="flex">
                <h1 className="text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                  Send us a message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
                <div>
                  <input
                    name="user_name"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                    required
                  />
                </div>

                <div>
                  <input
                    name="user_company"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Company Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                    required
                  />
                </div>

                <div>
                  <input
                    name="user_email"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                    required
                  />
                </div>

                <div>
                  <input
                    name="user_phone"
                    className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                    type="tel"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="user_message"
                  placeholder="Message*"
                  className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                  required
                ></textarea>
              </div>
              <div className="w-1/2 my-2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-gray-500 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {/* <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[70%]">
            <div className="flex">
              <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Enterprise Networking
              </h1>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
