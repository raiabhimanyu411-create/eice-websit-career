import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [otpbox, setotpbox] = useState(false)
  const [otp, setotp] = useState()
  const [activeButton, setActiveButton] = useState(false)

  const handleInputChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const sendOtp = async (e) => {
    setActiveButton(true)
    e.preventDefault();

    try {

      let local = "http://localhost/eicebackend/otp.php"
      let host = "https://www.eicetechnology.com/otp.php"


      let response = await axios.post(host, { email: formValues.email })
      console.log(response.data)
      if (response.data.status == 200) {
        Cookies.set("email", formValues.email, { expires: 1 })
        Cookies.set("contact", formValues.contact, { expires: 1 })
        Cookies.set("name", formValues.name, { expires: 1 })
        Cookies.set("message", formValues.message, { expires: 1 })
        setotpbox(true)
        alert("Please enter otp for final Submission")
        setActiveButton(false)
      }

      else {
        alert("something went wrong , Please try again later")
        setActiveButton(false)

      }
    } catch (error) {
      console.log(error)
      alert("something went wrong , Please try again later")
      setActiveButton(false)

    }

  };


  const changeEmail = async (e) => {
    setActiveButton(true)
    e.preventDefault()
    try {
      let local = "http://localhost/eicebackend/changeEmail.php"
      let host = "https://www.eicetechnology.com/chnageEmail.php"
      const response = await axios.post(host, { email: Cookies.get("email") })
      console.log(response.data)
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    } catch (error) {
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    }

  }

  const submitOtp = async (e) => {

    setActiveButton(true)
    e.preventDefault()
    try {
      let postdata = {

        otp: otp,

        name: Cookies.get("name"),
        email: Cookies.get("email"),
        contact: Cookies.get("contact"),
        message: Cookies.get("message"),

      }


      let local = "http://localhost/eicebackend/finalsubmission.php";
      let host = "https://www.eicetechnology.com/finalsubmission.php"


      let response = await axios.post(host, postdata)
      console.log(response.data)

      if (response.data.status != 200) {
        alert("wrong otp")
        setActiveButton(false)
        return

      }


      if (response.data.status = 200) {
        alert("message sent successful")
        Cookies.remove("email")
        Cookies.remove("contact")
        Cookies.remove("name")
        Cookies.remove("message")
        setotpbox(false)
        setFormValues({ name: "", email: "", contact: "", message: "" })
        setotp("")
        setActiveButton(false)
      }

      else {
        alert("something weent wrong")
        setActiveButton(false)

      }


    } catch (error) {

      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setotp("")
      setActiveButton(false)

    }

  }

  const onpagerefresh = () => {

    if (Cookies.get("name") && Cookies.get("email") && Cookies.get("contact") && Cookies.get("message")) {
      let name = Cookies.get("name")
      let email = Cookies.get("email")
      let contact = Cookies.get("contact")
      let message = Cookies.get("message")
      setFormValues({ name, email, contact, message })
      setotpbox(true)
    }

  }

  useEffect(() => {
    onpagerefresh()
  }, [])

  return (
    <div className="font-manrope max-w-7xl mx-auto px-4  pt-28 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6">Contact Us</h2>
          <form onSubmit={sendOtp} className="space-y-4">


            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <input
              type="tel"
              name="contact"
              maxLength="10"
              pattern="[0-9]{10}"
              value={formValues.contact}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo resize-none"
              required
            ></textarea>

            {!otpbox && (<button
              type="submit"
              className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
              disabled={activeButton}>
              Submit
            </button>)}



          </form>

          <form className="space-y-4">

            {otpbox && (<>

              <div style={{ color: "blue" }}>
               An OTP has been successfully sent to your email address : {formValues.email}
              </div>

              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                placeholder="Please Enter your OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={submitOtp}
                disabled={activeButton}>
                Submit OTP
              </button>

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={changeEmail}
                disabled={activeButton}>
                Change Email Address
              </button>

            </>
            )}
          </form>
        </div>


        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6 text-center">
            Addresses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <AddressCard
              country="United States"
              company=""
              address="11011 Richmond Ave, Suite 715, Houston, TX 77042"
              phone=""
              email="info@eicetechnology.com"
            />
            <AddressCard
              country="India"
              company=""
              address="6th floor, Platina Heights, C-24, Sector 62, Noida, Uttar Pradesh 201301"
              phone=""
              email="info@eicetechnology.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressCard({ country, company, address, phone, email }) {
  return (
    <div className="border-2 border-bloo/40 rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="fontweight_1 text-blackk  text-lg">{country}</h3>
        <p className="font-medium text-blackk/60  text-lg">{company}</p>
        <p className="font-medium text-blackk/60  text-lg">{address}</p>
        <p className="font-medium text-blackk/60  text-lg">{phone}</p>
      </div>
      {/*       <a href={`mailto:${email}`} className="text-sm text-blue-700 hover:underline">
        {email}
      </a> */}
      <Link
        to={`mailto:${email}`}
        className="text-sm pt-2 text-blue-700 hover:underline"
      >
        {email}
      </Link>
    </div>
  );
}

export default ContactForm;