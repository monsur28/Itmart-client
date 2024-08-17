import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const axiosPublic = useAxiosPublic();
  const productsPerPage = 9;

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesSearchTerm = product.ProductName.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
      const matchesBrand = brand ? product.BrandName === brand : true;
      const matchesCategory = category ? product.Category === category : true;
      const matchesPrice =
        (!minPrice || product.Price >= minPrice) &&
        (!maxPrice || product.Price <= maxPrice);

      return (
        matchesSearchTerm && matchesBrand && matchesCategory && matchesPrice
      );
    });

    // Apply sorting
    if (sortBy === "priceAsc") {
      filtered.sort((a, b) => a.Price - b.Price);
    } else if (sortBy === "priceDesc") {
      filtered.sort((a, b) => b.Price - a.Price);
    } else if (sortBy === "dateNewest") {
      filtered.sort(
        (a, b) =>
          new Date(b.ProductCreationDateTime) -
          new Date(a.ProductCreationDateTime)
      );
    } else if (sortBy === "dateOldest") {
      filtered.sort(
        (a, b) =>
          new Date(a.ProductCreationDateTime) -
          new Date(b.ProductCreationDateTime)
      );
    }

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(1);
  }, [products, searchTerm, brand, category, minPrice, maxPrice, sortBy]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            i === currentPage
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center m-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold m-8">Top Laptop For You</h2>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="">Filter by brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="">Filter by category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min price..."
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Max price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded-lg"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateNewest">Date Added: Newest</option>
          <option value="dateOldest">Date Added: Oldest</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div
              key={product._id}
              className="w-full max-h-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700"
            >
              <div>
                <img
                  className="p-8 rounded-t-lg bg-transparent w-full h-72 object-contain"
                  src={product.ProductImage}
                  alt={product.ProductName}
                />
              </div>
              <div className="px-5 pb-5">
                <Link to={`/product/${product._id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.ProductName}
                  </h5>
                  <p>{product.Description}</p>
                </Link>
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
                        <path d="M10.768.254a1 1 0 0 1 1.813 0l2.357 6.469 6.775.418a1 1 0 0 1 .586 1.781l-5.16 4.222 1.54 6.557a1 1 0 0 1-1.514 1.082L11 16.662 5.835 20.783a1 1 0 0 1-1.514-1.082l1.54-6.557-5.16-4.222a1 1 0 0 1 .586-1.781l6.775-.418L10.768.254Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    {product.Ratings}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    ${product.Price}
                  </span>
                  <Link
                    to={`/product/${product._id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {renderPagination()}
    </div>
  );
};

export default ProductPage;
