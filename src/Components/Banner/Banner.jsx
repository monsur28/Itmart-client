import { Link } from "react-router-dom";
import banner from "../../assets/Banner.png";
const Banner = () => {
  return (
    <div className="relative h-[580px] mx-auto bg-gray-900 text-white overflow-hidden mt-20">
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Laptop Banner"
          className="w-full h-full object-fit opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto top-36 p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the Latest Laptops
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Find the perfect laptop for your needs with top-notch performance
            and design.
          </p>
          <Link
            to="/product"
            href="#shop-now"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
