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
    const fetchProducts = async () => {
      try {
        const response = await axiosPublic.get("/products", {
          params: {
            limit: 100,
          },
        });

        const allProducts = response.data.products;
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setTotalPages(Math.ceil(allProducts.length / productsPerPage));

        const uniqueBrands = [
          ...new Set(allProducts.map((product) => product.BrandName)),
        ];
        const uniqueCategories = [
          ...new Set(allProducts.map((product) => product.Category)),
        ];

        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [axiosPublic]);

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

    // Update filtered products and pagination based on applied filters
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
    return pages;
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
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    {product.Ratings % 1 > 0 && (
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M14.24 11.486l-.575-2.09a1 1 0 0 0-1.904-.08l-1.535 4.878-2.85.195a1 1 0 0 0-.609 1.724l2.367 2.159-.596 2.768a1 1 0 0 0 1.429 1.05l2.982-1.649 2.983 1.649a1 1 0 0 0 1.428-1.05l-.596-2.768 2.368-2.159a1 1 0 0 0-.608-1.724l-2.85-.195zM11.075 14.39a1 1 0 0 0 1.898-.572l-.479-1.713a1 1 0 0 0-.347-.508l-.745-.637 1.781.206a1 1 0 0 0 1.082-.868l.165-1.824a1 1 0 0 0-.758-1.092l-1.69-.36a1 1 0 0 0-1.044.62l-1.063 2.177-1.573-.188a1 1 0 0 0-1.091 1.123l.053.688a1 1 0 0 0 1.252.866l1.469-.27 1.208 1.03-.276 1.452z" />
                      </svg>
                    )}
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
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center m-8">
        {renderPagination()}
      </div>
    </div>
  );
};

export default ProductPage;
