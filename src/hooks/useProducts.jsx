import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useProducts() {
  const [products, setProducts] = useState([]);

  let getData = async () => {
    let productsData = await axios.get("https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products");
    setProducts(productsData.data); // ✅ Corrected this line
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    products,
  };
}

export default useProducts;
