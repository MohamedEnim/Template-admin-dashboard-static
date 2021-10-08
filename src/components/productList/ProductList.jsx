import React from "react";
import { productRows } from "../../productData";
import "./ProductList.css";
import TableCust from "./../../common/TableCust";

const ProductList = () => {
  const fields = {
    id: "id",
    fieldOne: "product",
    fieldTwo: "stock",
    fieldThree: "status",
    fieldFour: "price",
    fieldFive: "action",
  };

  return (
    <div className="productList" style={{ width: "100%" }}>
      <TableCust fields={fields} rows={productRows} />
    </div>
  );
};

export default ProductList;
