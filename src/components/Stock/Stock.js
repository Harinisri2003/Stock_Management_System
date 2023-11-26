import React, { useState } from 'react';
import './Stock.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [productDetails, setProductDetails] = useState({
    // Initialize with empty product details
    name: '',
    quantity: 0,
    picture: '',
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddProduct = () => {
    // Add the new product details to the products list
    setProducts((prevProducts) => [...prevProducts, productDetails]);
    // Clear the form
    setProductDetails({
      name: '',
      quantity: 0,
      picture: '',
      price: 0,
    });
    // Hide the form
    setShowForm(false);
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      <button className='addproduct' onClick={() => setShowForm(true)}>Add Product</button>

      {showForm && (
        <div className="product-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
          />
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={productDetails.quantity}
            onChange={handleInputChange}
          />
          <label>Picture URL:</label>
          <input
            type="text"
            name="picture"
            value={productDetails.picture}
            onChange={handleInputChange}
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
          />
          <button class='addproduct' onClick={handleAddProduct}>Add Product</button>
        </div>
      )}

      <div className="product-list">
        <h3>Added Products</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Picture</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <img src={product.picture} alt={product.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
