function ContactForm() {
  return (
    <div
      className="flex justify-center items-center w-screen bg-white"
      id="contact-us"
    >
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="uppercase text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Send us a <br /> message
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-black via-gray-700 to-black bg-size-200 animate-gradient-move text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>

        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-r from-black via-gray-700 to-black bg-size-200 animate-gradient-move rounded-2xl">
          <div className="flex flex-col text-white">
            <p className="text-gray-400">
              We’re here to answer your questions and help you on your journey.
              Visit us at our main office for a chat with our friendly team. We
              look forward to meeting you!
            </p>
            <div className="flex my-4 w-2/3 lg:w-full">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-400">
                  UNO L-105, Lakeshore green, Lodha palava ,
                  Dombivali, Mumbai, India
                </p>{" "}
                <br />
                <p className="text-gray-400">
                  267, Washington Street , Near new port station, New
                  Jersey  NJ 08540 USA
                </p>
              </div>
            </div>
            <div className="flex my-4 w-2/3 lg:w-full">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: +91 84466 33880</p>
                <p className="text-gray-400">Tel: +91 93254 97764</p>
                <p className="text-gray-400">Tel: +91 70026 54128</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
