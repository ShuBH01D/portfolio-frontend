import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";

const ContactPage = () => {

  // ✅ form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  // ✅ states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // ✅ input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ submit (REAL API CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await axios.post("https://your-backend.onrender.com/api/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      setSubmitSuccess(true);

      // reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);

    } catch (error) {
      console.log(error);
      setSubmitError(true);
    }

    setIsSubmitting(false);
  };

  // contact info
  const contactInfo = [
    { icon: "📱", title: "Phone", info: "+91 9011979342" },
    { icon: "📧", title: "Email", info: "shubhamdighe161909@gmail.com" },
    { icon: "📍", title: "Address", info: "Pune, Maharashtra, India" }
  ];

  return (
      <>
    <Header/>
    <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Have a project in mind? Let's discuss how I can help bring your ideas to life. Feel free to reach out.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white  mb-6">Send Me a Message</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! I'll get back to you soon.</p>
                </div>
              ) : submitError ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}   >
                <div className="mb-4 ">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className='hover:scale-105'>
            <h2 className="text-2xl text-white font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div  className="w-full  overflow-hidden">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-blue-600 break-words max-w-full hover:underline"
                      target={item.title === "Address" ? "_blank" : undefined}
                      rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                    >
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     

     
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;