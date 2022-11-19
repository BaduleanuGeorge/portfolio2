import React from "react";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="w-full bg-[#0d0d10] text-gray-300 pt-12">
      <div className="sm:max-w-[1000px] mx-auto px-4">
        <h1 className="text-center sm:text-3xl text-2xl py-4 sm:pb-8">
          Contact
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="max-w-[500px]">
            <p>
              I am more than happy to answer any questions or related matters.
              Feel free to contact me on my phone or E-mail, or simply fill up
              the form.
            </p>

            <div className="flex justify-between px-6 py-4">
              <div className="flex items-center py-2 gap-2">
                <AiTwotonePhone size={30} />
                <p>07522 250892</p>
              </div>
              <div className="flex items-center py-2 gap-2">
                <AiOutlineMail size={30} />
                <p>baduleanug@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
          <form className="flex flex-col md:w-[500px] pt-4">
          <input
            className="bg-white p-2 text-black"
            type="text"
            placeholder="Name"
            name="name"
          ></input>
          <input
            className="my-4 p-2 bg-white text-black"
            type="email"
            placeholder="Email"
            name="email"
          ></input>
          <textarea
            className="bg-white p-2 text-black"
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>

          <button className="text-white border-2 sm:hover:bg-white sm:hover:text-black duration-300 px-4 my-8 py-3 mx-auto flex items-center">
            Get in touch
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
