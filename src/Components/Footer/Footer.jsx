const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a leading e-commerce platform, providing the best laptop
              and desktop products with unbeatable prices and excellent customer
              service.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="mailto:info@example.com" className="hover:text-white">
                  info@example.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+123456789" className="hover:text-white">
                  +1 234 567 89
                </a>
              </li>
              <li className="mb-2">
                <p>123 Mirpur, Dhaka-1200</p>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.6c-.9.4-1.8.6-2.8.8C20.2 5 19 4.4 18 3.7c-.5-.4-1-.7-1.5-1C15.1 2.5 14 2 12.7 2H12c-3 0-5.4 2.4-5.4 5.4v.6C4.6 8 3.3 7.7 2.2 7.1.7 6.3 0 5 0 3.5V3.5c0 1.9.9 3.6 2.3 4.5-.8-.1-1.6-.2-2.4-.5V7.8c0 2.7 1.9 4.9 4.4 5.4-.5.1-1 .2-1.5.2-.4 0-.7 0-1-.1.7 2.3 2.8 3.9 5.3 3.9C6 19.5 3.4 20 1 20c-.6 0-1.2 0-1.8-.1 2.2 1.4 4.8 2.2 7.6 2.2h.8c9.4 0 14.5-7.8 14.5-14.5 0-.2 0-.4 0-.5 1-.8 1.8-1.6 2.5-2.6-.9.4-1.8.6-2.7.7 1-.6 1.8-1.5 2.1-2.6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.8 3.5 8.8 8.2 9.7v-6.8h-2.5V12h2.5v-1.5c0-2.6 1.5-4 3.8-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3V21c4.6-.9 8.1-4.9 8.1-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.5 0h-19C1.1 0 0 1.1 0 2.5v19C0 22.9 1.1 24 2.5 24h19c1.4 0 2.5-1.1 2.5-2.5v-19C24 1.1 22.9 0 21.5 0zM9.6 19.3H6.3v-9.3h3.3v9.3zm-1.7-10.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.9 1.9-1.9 1.9zm13 10.6h-3.3v-4.7c0-1.2-.5-2-1.4-2.2-.9-.2-1.8.5-2.1 1.2v5.7H9.6v-9.3h3.1v1.3c.6-.8 1.4-1.4 2.3-1.4 2.1 0 3.3 1.6 3.3 3.8v5.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ITMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
