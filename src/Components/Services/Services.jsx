import { FaLaptop, FaShippingFast, FaTools, FaHeadset } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaLaptop className="text-4xl text-emerald-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Laptop Sales</h2>
          <p className="text-gray-700">
            We offer a wide range of laptops from top brands like Apple, Dell,
            HP, and more. Whether you need a laptop for work, gaming, or
            everyday use, we have the perfect option for you.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaShippingFast className="text-4xl text-emerald-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Fast Delivery</h2>
          <p className="text-gray-700">
            Get your products delivered quickly and securely to your doorstep.
            We ensure fast and reliable delivery services for all our customers.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaTools className="text-4xl text-emerald-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Repair Services</h2>
          <p className="text-gray-700">
            Our expert technicians provide repair and maintenance services for
            laptops, desktops, and other electronic devices. Trust us to keep
            your gadgets running smoothly.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <FaHeadset className="text-4xl text-emerald-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
          <p className="text-gray-700">
            We are here to help you 24/7. Our dedicated customer support team is
            always available to assist you with any queries or issues you may
            have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
