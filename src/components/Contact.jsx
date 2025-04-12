import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic form validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields!");
      setLoading(false);
      return;
    }

    // Email regex validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email!");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "iSammy Kola",
          from_email: form.email,
          to_email: "ayenisamuel155@gmail.com", // Recipient's email
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! Your message has been sent.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>


        <div className=" mt-12 flex justify-between items-center w-full max-w-md mx-auto ">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sammy-ayeni-b401872ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.84 107.1a53.59 53.59 0 1 1 53.59-53.6 53.59 53.59 0 0 1-53.6 53.6zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.2 5.3-2.7 12.7-2.7 20.2V448h-92.4V148.9h92.4v41.8c12.3-19 34.2-46.2 83.4-46.2 60.8 0 106.4 39.8 106.4 125.3V448z" />
            </svg>
          </a>

          {/* WhatsApp (Lucide Icon) */}
          <a
            href="https://wa.me/+2349014887676"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:scale-110 transition-transform"
          >
            <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.004 3C9.382 3 4 8.382 4 15.004c0 2.652.774 5.111 2.1 7.184L4 29l6.952-2.07A11.915 11.915 0 0016.004 27C22.625 27 28 21.617 28 15.004 28 8.382 22.626 3 16.004 3zm0 21.978a10.88 10.88 0 01-5.515-1.513l-.395-.234-4.126 1.228 1.252-4.018-.255-.41a10.897 10.897 0 01-1.678-5.827C5.287 9.113 10.007 4.39 16.004 4.39S26.722 9.114 26.722 15.004c0 5.996-4.725 10.718-10.718 10.718zm5.984-7.924c-.327-.164-1.927-.951-2.227-1.06-.3-.11-.519-.164-.738.164-.218.327-.849 1.06-1.041 1.278-.19.218-.382.245-.709.082-.327-.164-1.378-.508-2.627-1.617-.97-.866-1.623-1.936-1.815-2.264-.191-.327-.02-.504.145-.668.148-.147.327-.382.491-.573.163-.191.218-.327.327-.546.11-.218.055-.409-.027-.573-.082-.164-.737-1.778-1.01-2.436-.265-.637-.532-.55-.738-.56l-.637-.01c-.218 0-.573.082-.873.409s-1.147 1.119-1.147 2.73c0 1.61 1.175 3.167 1.339 3.385.164.218 2.303 3.516 5.582 4.928 3.279 1.411 3.279.941 3.872.882.6-.054 1.927-.782 2.198-1.54.273-.755.273-1.403.19-1.54-.082-.136-.3-.218-.627-.382z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/isammyk" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-black dark:fill-white hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.6-10.1c-.7 1.5-2.7 2-4.4 1.2-1.7-.8-2.6-2.5-1.9-4 .7-1.5 2.7-2 4.4-1.2 1.7.8 2.6 2.5 1.9 4zm44.8 4.1c-1.1 1.5-3.4 1.3-5.1-.4-1.7-1.7-2.2-4-1.1-5.5 1.1-1.5 3.4-1.3 5.1.4 1.7 1.7 2.2 4 1.1 5.5zM244 8C109.5 8 0 117.5 0 252c0 107.8 69.8 199.2 166.5 231.6 12.2 2.3 16.7-5.3 16.7-11.7 0-5.8-.2-21.2-.3-41.6-67.8 14.8-82.1-32.6-82.1-32.6-11.1-28.2-27.1-35.7-27.1-35.7-22.2-15.1 1.7-14.8 1.7-14.8 24.6 1.7 37.6 25.3 37.6 25.3 21.8 37.3 57.2 26.5 71 20.3 2.2-15.8 8.5-26.5 15.5-32.6-54.1-6.1-111-27-111-120.1 0-26.5 9.5-48.2 25.2-65.2-2.5-6.2-10.9-30.9 2.4-64.4 0 0 20.5-6.6 67.2 25.1 19.5-5.4 40.4-8.1 61.2-8.2 20.8.1 41.7 2.8 61.2 8.2 46.6-31.7 67.1-25.1 67.1-25.1 13.3 33.5 4.9 58.2 2.4 64.4 15.7 17 25.2 38.7 25.2 65.2 0 93.3-56.9 113.9-111.2 120 8.7 7.5 16.4 22.4 16.4 45.2 0 32.7-.3 59.1-.3 67.1 0 6.5 4.4 14.1 16.8 11.7C426.2 451.2 496 359.8 496 252 496 117.5 386.5 8 252 8z" />
            </svg>
          </a>
        </div>



      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
