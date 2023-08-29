import Image from "next/image";

export default function Contact() {
  return (
    <div
      className="text-center bg-blue-800 min-h-40 flex flex-col text-white justify-center items-center"
      id="Contact"
    >
      <div className="text-center text-5xl md:text-7xl p-4 mx-5 my-5 border-b-2 border-yellow-400">
        Contact Me
      </div>
      <form className="grid grid-cols-1 p-2 w-full sm:w-2/3 mx-auto mt-8 items-center text-xl">
        <label htmlFor="Email">Email Address</label>
        <input
          type="email"
          id="Email"
          className="text-black bg-gray-200 rounded-lg p-2 outline-none mb-4"
          placeholder="Enter Your Email Address"
        />
        <label htmlFor="Describe">Describe your message</label>
        <textarea
          name="describeMsg"
          id="Describe"
          cols={30}
          rows={5}
          minLength={10}
          maxLength={300}
          className="text-black bg-gray-200 rounded-lg p-2 outline-none resize-none"
          placeholder="Type your message"
        />
        <button className="p-2 w-1/2 m-auto text-white bg-yellow-700 hover:bg-yellow-600 rounded-lg my-5">
          Send Message
        </button>
      </form>
    </div>
  );
}
