import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar/NavBar";
// import emailjs from 'emailjs-com';
import net from "../images/network/nw-supp.webp";

const DemoProduct = (props) => {
  // useDocTitle('MLD | Molad e Konsult - Demo our products')

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')
  // const [message, setMessage] = useState('')
  // const [demoProducts, setDemoProducts ] = useState([])
  // const [errors, setErrors] = useState([])

  // const handleChange = (e) => {
  //     const value = e.target.value
  //     const checked = e.target.checked
  //     errors.products = []
  //     if(checked) {
  //         setDemoProducts([
  //             ...demoProducts, value
  //         ])
  //     } else {
  //         setDemoProducts(demoProducts.filter( (e) => (e !== value )))
  //     }

  // }
  // const clearErrors = () => {
  //     setErrors([])
  // }

  // const clearInput = () => {
  //     setFirstName('')
  //     setLastName('')
  //     setEmail('')
  //     setPhone('')
  //     setMessage('')
  // }

  // function sendEmail(e) {
  //     e.preventDefault();
  //     document.getElementById('submitBtn').disabled = true;
  //     document.getElementById('submitBtn').innerHTML = 'Loading...';
  //     let fData = new FormData();
  //     fData.append('first_name', firstName)
  //     fData.append('last_name', lastName)
  //     fData.append('email', email)
  //     fData.append('phone_number', phone)
  //     fData.append('message', message)
  //     fData.append('products', demoProducts)

  //     // emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
  //     //   .then((result) => {
  //     //       console.log(result.text);
  //     //       Notiflix.Report.success(
  //     //         'Success',
  //     //         '"Thanks for sending a message, we\'ll be in touch soon."',
  //     //         'Okay',
  //     //         );
  //     //   }, (error) => {
  //     //       console.log(error.text);
  //     //       Notiflix.Report.failure(
  //     //         'An error occured',
  //     //         'Please try sending the message again.',
  //     //         'Okay',
  //     //         );
  //     //   });

  //     axios({
  //         method: "post",
  //         url: process.env.REACT_APP_DEMO_REQUEST_API,
  //         data: fData,
  //         headers: {
  //             'Content-Type':  'multipart/form-data'
  //         }
  //     })
  //     .then(function (response) {
  //         document.getElementById('submitBtn').disabled = false;
  //         document.getElementById('submitBtn').innerHTML = 'send message';
  //         clearInput()
  //         //handle success
  //         Notiflix.Report.success(
  //             'Success',
  //             response.data.message,
  //             'Okay',
  //         );
  //     })
  //     .catch(function (error) {
  //         document.getElementById('submitBtn').disabled = false;
  //         document.getElementById('submitBtn').innerHTML = 'send message';
  //         //handle error
  //         const { response } = error;
  //         if(response.status === 500) {
  //             Notiflix.Report.failure(
  //                 'An error occurred',
  //                 response.data.message,
  //                 'Okay',
  //             );
  //         }
  //         if(response.data.errors !== null) {
  //             setErrors(response.data.errors)
  //         }

  //     });
  // }
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="demo"
        className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-24"
      >
        <div
          className="container px-4 mx-auto my-8 lg:px-20"
          data-aos="zoom-in"
        >
          <form id="demoProductForm">
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[10%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Enterprise Networking
                </h1>
              </div>
                <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16 ">
                  <div className="flex flex-col gap-8 md:justify-start">
                    <p className="mx-auto -mt-4 font-light text-black md:mx-0">
                      Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. We design,
                      deploy, and manage robust network infrastructures that
                      enable seamless communication, collaboration, and data
                      transfer within your organization. Our expertise ensures
                      high-performance networks that meet your evolving needs,
                      empowering you to drive productivity and achieve your
                      business goals.
                    </p>
                    <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                      <li>LAN</li>
                      <li>WAN</li>
                      <li>SD-WAN</li>
                      <li>Wireless</li>
                    </ul>
                  </div>
                </div>
            </div>
          </form>
          <div className="w-full px-8 py-6 ml-auto bg-blue-900 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[60%]">
            <div>
              <img src={net} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="demo1"
        className="flex items-center justify-center w-full py-12 bg-white lg:py-24 lg:-mt-[10%]"
      >
        <div
          className="container px-4 mx-auto my-8 lg:px-20"
          data-aos="zoom-in"
        >
          <form id="demoProductForm">
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[10%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[25%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Enterprise Networking
                </h1>
              </div>
                <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16 ">
                  <div className="flex flex-col gap-8 md:justify-start">
                    <p className="mx-auto -mt-4 font-light text-black md:mx-0">
                      Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. We design,
                      deploy, and manage robust network infrastructures that
                      enable seamless communication, collaboration, and data
                      transfer within your organization. Our expertise ensures
                      high-performance networks that meet your evolving needs,
                      empowering you to drive productivity and achieve your
                      business goals.
                    </p>
                    <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8 lg:ml-[90%]">
                      <li>LAN</li>
                      <li>WAN</li>
                      <li>SD-WAN</li>
                      <li>Wireless</li>
                    </ul>
                  </div>
                </div>
            </div>
          </form>
          <div className="w-full px-8 py-6 ml-auto bg-blue-900 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[10%]">
            <div>
              <img src={net} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoProduct;
