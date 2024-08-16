import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { CartContext } from "../../Hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null); // State for storing product data
  const [error, setError] = useState(null); // State for error handling
  const axiosPublic = useAxiosPublic(); // Axios instance for API calls
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosPublic.get(`/product/${id}`); // Fetch product data from API
        setProduct(res.data); // Set product data
      } catch (error) {
        setError(
          "Error fetching product details. Please try again later.",
          error
        ); // Handle errors
      }
    };

    fetchProduct(); // Fetch product when component mounts
  }, [id, axiosPublic]);

  if (error) return <div className="text-red-500">{error}</div>; // Show error message if there's an error
  if (!product) return <div>Loading...</div>; // Show loading state while fetching data

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={product.ProductImage}
            alt={product.ProductName}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">{product.ProductName}</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {product.BrandName}
          </h2>
          <p className="text-lg text-gray-800 mb-4">{product.Description}</p>
          <p className="text-base text-gray-600 mb-4">
            {product.LongDescription}
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {Object.entries(product.KeyFeatures).map(([key, value]) => (
                <li key={key} className="mb-1">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl font-bold text-gray-900 mb-4">
            ${product.Price}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Category: {product.Category}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Ratings: {product.Ratings.toFixed(1)}
          </p>
          <p className="text-sm text-gray-500">
            Added on:{" "}
            {new Date(product.ProductCreationDateTime).toLocaleDateString()}
          </p>
          <button
            className="btn btn-outline mt-5"
            onClick={() => addToCart(product)} // Add to cart when button is clicked
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
