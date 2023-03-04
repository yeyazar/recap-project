import axios from "axios";
import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

const initialState = {
  name: "",
  image: "",
  price: 0,
  dampingRate: 0.8,
  amount: 1,
};

const NewProduct = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.prevent.Default();
    try {
      await axios.post(BASE_URL, formData);
      setFormData(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default NewProduct;
