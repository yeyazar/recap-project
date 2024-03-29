import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const getProducts = async () => {
    // console.log("Started");
    try {
      const { data } = await axios(BASE_URL);
      setLoading(false);
      setProducts(data);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setErrorState(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : errorState ? (
          <p className="text-center text-danger w-100">404 Error Occured !</p>
        ) : products.length ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((item) => {
                return (
                  <ProductCard
                    item={item}
                    key={item.id}
                    getProducts={getProducts}
                  />
                );
              })}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
