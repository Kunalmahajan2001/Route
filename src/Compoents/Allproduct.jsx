import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Allproduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    price: '',
    description: ''
  });

  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://localhost:3000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
     
      axios
        .put(`http://localhost:3000/products/${editId}`, formData)
        .then((res) => {
          console.log('Product updated:', res.data);
          fetchProducts();
          resetForm();
        })
        .catch((err) => console.error(err));
    } else {
     
      axios
        .post('http://localhost:3000/products', formData)
        .then((res) => {
          console.log('Product added:', res.data);
          fetchProducts();
          resetForm();
        })
        .catch((err) => console.error(err));
    }
  };

  const resetForm = () => {
    setFormData({ image: '', title: '', price: '', description: '' });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (product) => {
    setFormData({
      image: product.image,
      title: product.title,
      price: product.price,
      description: product.description
    });
    setIsEditing(true);
    setEditId(product.id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        console.log('Product deleted');
        fetchProducts();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>All Products</h1>
      
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
          {isEditing && <button onClick={resetForm} type="button">Cancel</button>}
        </div>
      </form>

      
      <div style={{ marginTop: '20px' }}>
        <h2>Product List</h2>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                position: 'relative'
              }}
            >
              <img src={product.image} alt={product.title} width="100" />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleEdit(product)} style={{ marginRight: '10px' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Allproduct;
