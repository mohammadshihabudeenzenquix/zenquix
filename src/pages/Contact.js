import emailjs from "emailjs-com";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar/NavBar";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  Notify.init({
    width: '280px',
    position:"right-bottom", // Change to 'right-top', 'left-top', etc.
    distance: '10px',
    opacity: 1,
    borderRadius: '8px',
    timeout: 3000, // Time in milliseconds before it disappears
    cssAnimationStyle: 'from-right', // Animation style
    useIcon: true, // Use an icon in the notification
    fontFamily: 'Arial, sans-serif', // Change to your preferred font
    fontSize: '16px',
    success: {
      background: '#00cc66', // Background color for success notification
      textColor: '#fff', // Text color
      notiflixIconColor: '#fff', // Icon color
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Sending.....";

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
        Notify.success('Send Successfully!!');
      })
      .catch((error) => {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";

        // Error notification
        Notify.failure('An Error Occurred');
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <section
        id="contact"
        className="flex items-center justify-center w-full px-4 py-12 mt-8 bg-white md:w-[55%] md:ml-auto md:px-0 lg:ml-[14%]"
        data-aos="fade-down"
        data-aos-delay="600"
      >
        <div className="container mx-auto lg:px-20">
          <form onSubmit={sendEmail}>
            <div className="w-full p-8 my-4 bg-white shadow-2xl rounded-2xl md:px-12 lg:w-[150%] lg:pl-20">
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
              <div className="w-full my-2 md:w-1/2 lg:w-2/4">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
