import React from "react";
import "./CreateProduct.css";
import InputField from "./../../common/InputField";
import Button from "@mui/material/Button";
const CreateProduct = () => {
  return (
    <div className="createProduct">
      <h2 className="createProduct__title">New Product</h2>
      <form>
        <div className="createProduct__group">
          <div className="createProduct__image">
            <label htmlFor="">Image</label>
            <input type="file" />
          </div>
          <InputField label="Product Name" placeholder="annabeck99" border />
          <InputField label="Stock" placeholder="123" border />
          <div className="createProduct__select">
            <label htmlFor="">Active</label>
            <select name="" id="" className="createUser__selectSel">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="createProduct__botton">
            <Button variant="contained">Create</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
