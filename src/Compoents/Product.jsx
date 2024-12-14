import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []); // Removed `data` dependency to avoid infinite fetch loop

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => alert('Delete successful.'));
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333', margin: '2rem 0' }}>
        Products
      </h1>

      <div
        className="product"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <Link to={`/description/${el.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>
                ID: {el.id}
              </div>
              <img
                src={el.image}
                alt=""
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h2 style={{ fontSize: '1.2rem', color: '#333', margin: '0.5rem 0' }}>
                {el.title}
              </h2>
              <h4 style={{ fontSize: '1rem', color: '#555', marginBottom: '0.5rem' }}>
                {el.description}
              </h4>
              <h5 style={{ fontSize: '0.9rem', color: '#777', marginBottom: '0.5rem' }}>
                {el.category}
              </h5>
            </Link>
            <h2
              style={{
                fontSize: '1.5rem',
                color: '#1e88e5',
                fontWeight: 'bold',
                margin: '1rem 0',
              }}
            >
              ${el.price}
            </h2>
            <button
              onClick={() => handleDelete(el.id)}
              style={{
                backgroundColor: '#e53935',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                margin: '0.5rem',
                transition: 'background-color 200ms ease',
              }}
            >
              Delete
            </button>
            <br />
            <Link to={`/edit/${el.id}`}>
              <button
                style={{
                  backgroundColor: '#1e88e5',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  transition: 'background-color 200ms ease',
                }}
              >
                Update
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          margin: '2rem 0',
        }}
      >
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= data.length}
          style={{
            margin: '0 0.5rem',
            backgroundColor: '#1e88e5',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            transition: 'background-color 200ms ease',
          }}
        >
          Next
        </button>
        <span style={{ margin: '0 1rem', fontSize: '1rem', color: '#555' }}>
          Page: {page}
        </span>
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page <= 1}
          style={{
            margin: '0 0.5rem',
            backgroundColor: '#1e88e5',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            transition: 'background-color 200ms ease',
          }}
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default Product;
