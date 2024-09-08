"use client";
import React, { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrimaryButton from "./PrimaryButton";

const ContactForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataObject = {
      ...formData,
      access_key: "b72cce39-807b-4aa3-8a14-5bf6d5337d41",
    };

    const json = JSON.stringify(formDataObject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully!");

        // Reset the form state
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Form submission failed. Please try again.");
        // toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      //   toast.error("An error occurred. Please try again.");
    }
  }

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="contact">
      {/* Toast Container for displaying notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 grid-cols-1 gap-8"
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name} // Controlled input
              onChange={handleInputChange} // Handle changes
              placeholder="Name"
              required
              className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email} // Controlled input
              onChange={handleInputChange} // Handle changes
              placeholder="Email"
              required
              className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
            />
          </div>
        </div>

        <div className="sm:flex items-center gap-8">
          <div className="w-full">
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              className="w-full px-5 py-4 bg-transparent border border-[#ffffff3c] focus:outline-none focus:border-[#8B7FF8]  rounded-xl  placeholder-[#CACAD0]"
            />
          </div>

          <div className="sm:w-[90px] w-full sm:mt-0 mt-8">
            <div className="w-full">
              <button
                type="submit"
                className="send-btn-shadow w-full px-5 py-4 bg-[#6f61ee] border border-[#6f61ee] hover:border-white hover:bg-white hover:text-black rounded-xl duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
