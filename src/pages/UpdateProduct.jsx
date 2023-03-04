import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const UpdateProduct = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { state: item } = useLocation();
  const [formData, setFormData] = useState(item);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log({ [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    try {
      await axios.put(`${BASE_URL}/${item.id}`, formData);
      navigate(-1);
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
        text={"Update"}
      />
    </div>
  );
};

export default UpdateProduct;
