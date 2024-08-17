const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600">
              Please feel free to get in touch with us using the form or through
              the contact details below.
            </p>

            <div className="flex items-center">
              <span className="text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.5 9a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18.5c-3.038 0-5.9-1.025-8.159-2.784A1.5 1.5 0 015.1 14h.257a6.61 6.61 0 004.372 1.74c1.61 0 3.116-.552 4.372-1.74h.257a1.5 1.5 0 011.259 2.716C17.9 17.475 15.038 18.5 12 18.5z"
                  />
                </svg>
              </span>
              <span className="ml-3 text-gray-700">123 Mirpur, Dhaka-1200</span>
            </div>

            <div className="flex items-center">
              <span className="text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10v6a1 1 0 001 1h2m10-8h2a1 1 0 011 1v2m0 0a5.002 5.002 0 01-4 4.9M13 7h3m-6 0h3m-3-3h.01M7 7h.01M4 11a5.002 5.002 0 014-4.9m12 0h2a1 1 0 011 1v2M4 16h.01M20 16h.01M4 12h.01M20 12h.01"
                  />
                </svg>
              </span>
              <span className="ml-3 text-gray-700">Phone: +123 456 7890</span>
            </div>

            <div className="flex items-center">
              <span className="text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.457 16.457A5.025 5.025 0 011 12.07a5.002 5.002 0 012.337-4.287M16.5 12.07v.007a5.001 5.001 0 01-4.1 4.92 4.969 4.969 0 01-2.401 0 5.001 5.001 0 01-4.1-4.92v-.007"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.457 16.457l.707-.707a1.992 1.992 0 012.828 0l1.414 1.414a1.992 1.992 0 002.828 0l1.414-1.414a1.992 1.992 0 012.828 0l.707.707a5.008 5.008 0 01-2.328 2.327"
                  />
                </svg>
              </span>
              <span className="ml-3 text-gray-700">
                Email: info@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
