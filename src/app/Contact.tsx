import Alert from "@/components/Alert";
import Reveal from "@/components/Reveal";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef(null);
  const [submitBtnValue, setSubmitBtnValue] = useState("Send Message");
  const [alert, setAlert] = useState({ show: false, alertType:"", message:"" });

  async function sendEmail(e: any) {
    e.preventDefault();
    const serviceID = "default_service";
    const templateID = "portfolio_contact_form";

    try {
      setSubmitBtnValue("sending...");
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        "oBRK721pGqPwruDL4"
      );
      setSubmitBtnValue("Send Message");
      setAlert({show:true, alertType: "success", message: `Message Sent` });
      e.target.reset();
    } catch (error: any) {
      setAlert({show:true, alertType: "error", message: `Unable to send Message` });
    }
  }

  function handleAlertClose(){
    setAlert({show:false, alertType:"", message:"" })
  }

  return (
    <>
      <div
        className="text-center bg-blue-800 min-h-40 flex flex-col text-white justify-center items-center py-10"
        id="Contact"
      >
        {/* Alert */}
        {alert.show && (
        <div className="fixed rounded-lg z-10 top-5 left-1/2 -translate-x-1/2 shadow-[rgba(0,_0,_0,_0.2)_0_0_15px_15px]">
          <div className="transition-all duration-300 ease-in-out">
            <Alert type={alert.alertType} message={alert.message} onClose={handleAlertClose} />
          </div>
        </div>
      )}

        <Reveal style="w-full overflow-hidden">
          <div className="text-center text-5xl md:text-7xl p-4 mx-5 my-5 border-b-2 border-yellow-400">
            Contact Me
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex justify-center items-center max-w-1/2">
            <Image
              src="/contactUs1.svg"
              className="hidden md:block"
              width={700}
              height={700}
              alt="Contact us logo"
            />
          </div>
          <div className="w-full px-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 p-5 mx-auto w-full sm:w-3/4 md:w-full lg:w-3/4 items-center text-xl border-2 border-white rounded-lg"
            >
              <Reveal style="w-full overflow-hidden text-left">
                <label htmlFor="user_name">Name*</label>
              </Reveal>
              <Reveal style="w-full overflow-hidden">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="text-black bg-white rounded-lg p-2 outline-none my-4 w-full autofill:bg-white"
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
                  className="text-black bg-white rounded-lg p-2 outline-none my-4 w-full"
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
                  className="text-black bg-white rounded-lg p-2 outline-none my-4 w-full"
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
                  className="text-black bg-white rounded-lg p-2 outline-none my-4 resize-none w-full"
                  placeholder="Type your message"
                  required
                />
              </Reveal>
              <Reveal style="w-fit overflow-hidden w-1/2 m-auto">
                <button className="p-2 text-white bg-yellow-600 hover:bg-yellow-500 rounded-lg">
                  {submitBtnValue}
                </button>
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
