import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-gray-800  to-slate-500 text-white pt-10 overflow-hidden"
    >
      <div className="flex flex-col  max-w-screen-lg justify-center p-4 pt-5 mx-auto h-full">
        <div className="pb-2 ">
          <p className="text-4xl font-bold inline border-b-4 border-blue-700 enterFromLeft">
            Contact Me
          </p>
          <p className="py-5 text-xl enterFromLeftSlower">
            Interested in working together? Let's connect via email or LinkedIn!
          </p>
        </div>

        <div className="flex mb-5 enterFromRight">
          <a
            href="mailto:baik.kaishan@gmail.com"
            className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-950 to-blue-600 mx-auto py-2 px-8 rounded-xl text-md 
            shadow-lg shadow-sky-500  hover:scale-110 cursor-pointer duration-300
            "
          >
            <HiMail size={50} />
            Email Me!
          </a>
          <a
            href="https://www.linkedin.com/in/kaishan-baik/"
            className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-indigo-900 mx-auto py-2 px-8 rounded-xl text-md
           shadow-lg shadow-sky-500  hover:scale-110 cursor-pointer duration-300
            "
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} />
            LinkedIn
          </a>
        </div>

        <p className="text-center text-3xl mb-3">OR . . .</p>

        <div className="flex justify-center items-center enterFromBottom">
          <form
            action="https://getform.io/f/2e72bae1-544b-4119-8726-4fd86efd5034"
            method="POST"
            enctype="multipart/form-data"
            className="flex flex-col w-full md:w-4/5"
          >
            <p className="text-3xl  border-blue-500 font-bold  text-orange-400">
              Send me a message!{" "}
            </p>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="p-2 my-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              className="p-2 my-1  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              rows="8"
              name="message"
              className="p-2 my-2  bg-transparent border-2 text-white rounded-md focus:outline-none"
              placeholder="Your message here!"
            ></textarea>
            <button className="text-white bg-gradient-to-l from-cyan-500 to-blue-500 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
