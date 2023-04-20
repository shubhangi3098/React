import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  return (
    <div>
      <h1>Hello</h1>
      <h1>All Products</h1>
      <div>
        <label htmlFor="category-filter">Filter by category:</label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={product.id}>
                <h2>{product.title}</h2>
              </Link>
              <h2>{product.title}</h2>
              <p>{product.id}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p><img className="product-image" src={product.image} alt="API Image" /></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
