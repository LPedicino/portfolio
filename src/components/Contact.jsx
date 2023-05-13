import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-t  from-blue-500 via-black to-violet-400 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/4ec4d150-78f2-4e16-8cce-620120499f12"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Please complete the form below to send a direct message to
            his Getform.io or contact him by email.{" "}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded-2xl hover:bg-[#975ad0] hover:border-[#975ad0] duration-300  px-4 py-3 my-8 mx-auto flex items-center active:scale-95">
          Start a connection 
        </button>
      </form>
    </div>
  );
};

export default Contact;
