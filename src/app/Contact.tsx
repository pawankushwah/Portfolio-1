import Reveal from "../components/Reveal";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef(null);
  const serviceID = "default_service";
  const templateID = "portfolio_contact_form";

  const sendEmail = async (e:any) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        "oBRK721pGqPwruDL4"
      );
      console.log(result.text);
    } catch (error:any) {
      console.log(error.text);
    }
  };

  return (
    <div
      className="text-center bg-blue-800 min-h-40 flex flex-col text-white justify-center items-center py-10"
      id="Contact"
    >
      <Reveal style="w-full overflow-hidden">
        <div className="text-center text-5xl md:text-7xl p-4 mx-5 my-5 border-b-2 border-yellow-400">
          Contact Me
        </div>
      </Reveal>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 p-5 w-full sm:w-2/3 mx-auto mt-8 items-center text-3xl"
      >
        <Reveal style="w-full overflow-hidden text-left">
          <label htmlFor="user_name">Name*</label>
        </Reveal>
        <Reveal style="w-full overflow-hidden">
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="text-black bg-gray-200 rounded-lg p-2 outline-none my-4 w-full autofill:bg-white"
            placeholder="Enter Your Name"
            required
          />
        </Reveal>

        <Reveal style="w-full overflow-hidden text-left">
          <label htmlFor="user_email">Email Address*</label>
        </Reveal>
        <Reveal style="w-full overflow-hidden">
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="text-black bg-gray-200 rounded-lg p-2 outline-none my-4 w-full"
            placeholder="Enter Your Email Address"
            required
          />
        </Reveal>

        <Reveal style="w-full overflow-hidden text-left">
          <label htmlFor="user_phone">Phone</label>
        </Reveal>
        <Reveal style="w-full overflow-hidden">
          <input
            type="phone"
            id="user_phone"
            name="user_phone"
            className="text-black bg-gray-200 rounded-lg p-2 outline-none my-4 w-full"
            placeholder="Enter Your Phone Number"
            required
          />
        </Reveal>
        <Reveal style="w-full overflow-hidden text-left">
          <label htmlFor="message">Describe your message*</label>
        </Reveal>
        <Reveal style="w-full overflow-hidden">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={5}
            minLength={10}
            maxLength={300}
            className="text-black bg-gray-200 rounded-lg p-2 outline-none my-4 resize-none w-full"
            placeholder="Type your message"
            required
          />
        </Reveal>
        <Reveal style="w-fit overflow-hidden w-1/2 m-auto">
          <button className="p-2 text-white bg-yellow-600 hover:bg-yellow-500 rounded-lg">
            Send Message
          </button>
        </Reveal>
      </form>
    </div>
  );
}
