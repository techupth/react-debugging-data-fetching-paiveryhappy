import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product-list" key={product.id}>
              <div className="product-card">
                <h2>{product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.images[0]} alt={product.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
