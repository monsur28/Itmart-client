import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [axiosPublic]);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold m-8">Top Laptop For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
        {products.slice(0, 6).map((product) => (
          <div
            key={product._id}
            className="w-full  bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg bg-transparent"
                src={product.ProductImage}
                alt={product.ProductName}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.ProductName}
                </h5>
                <p>{product.Description}</p>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(Math.floor(product.Ratings))].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.Ratings.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 ">
                  ${product.Price}
                </span>
                <Link
                  to={`/product/${product._id}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn bg-pink-300 m-5 flex justify-center items-center">
        <Link to="product">View All Products</Link>
      </button>
    </div>
  );
};

export default ProductCard;
