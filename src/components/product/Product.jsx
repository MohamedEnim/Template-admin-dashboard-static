import React from "react";
import "./Product.css";
import Chart from "../chart/Chart";
import { imageUserUrl } from "./../../avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import WidgetUser from "../widgetLeft/WidgetUser";
import { useHistory } from "react-router";
import { userData } from "./../../userData";
import InputField from "./../../common/InputField";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

const Product = () => {
  const history = useHistory();
  const handleCreateProduct = () => {
    history.push("/createProduct");
  };
  return (
    <div className="product">
      <div className="product__header">
        <h2 className="productHeaderTitle">Product</h2>
        <Button variant="contained" onClick={() => handleCreateProduct()}>
          Create
        </Button>
      </div>

      <div className="product__feed">
        <div className="product__chart">
          <Chart
            title="User Analytics"
            data={userData}
            grid
            dataKeyVal="activeUser"
            dataKeyX="name"
            type
          />
        </div>
        <div className="product__profile">
          <Card style={{ height: "100%", padding: "5px" }}>
            <CardContent>
              <div className="product__profileWidget">
                <WidgetUser
                  imageUrl={imageUserUrl}
                  username="Atlas Selcan"
                  userTitle="Software Engenner"
                  right
                />
              </div>

              <div className="product__profileDetails">
                <table>
                  <tbody>
                    <tr>
                      <td className="product__profileDetailsItemL">id:</td>
                      <td className="product__profileDetailsItemR">232</td>
                    </tr>
                    <tr>
                      <td className="product__profileDetailsItemL">sales:</td>
                      <td className="product__profileDetailsItemR">2321</td>
                    </tr>
                    <tr>
                      <td className="product__profileDetailsItemL">active:</td>
                      <td className="product__profileDetailsItemR">yes</td>
                    </tr>
                    <tr>
                      <td className="product__profileDetailsItemL">in sock:</td>
                      <td className="product__profileDetailsItemR">no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="product__update">
        <Card>
          <CardContent>
            <h3 className="product__updateTitle">Edit</h3>
            <div className="product__updateWrapper">
              <div className="product__updateTitleLeft">
                <div className="product__updateGroup">
                  <InputField
                    label="Product name"
                    placeholder="annabeck99"
                    border
                  />
                  <div className="product__select">
                    <label htmlFor="">In Stock</label>
                    <select name="" id="" className="product__selectSel">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="product__select">
                    <label htmlFor="">Active</label>
                    <select name="" id="" className="product__selectSel">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="product__updateTitleRight">
                <div className="product__updateTitleRightTop">
                  <img src={imageUserUrl} alt="" />
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
                <div className="product__updateTitleRightBottom">
                  <Button variant="contained">Update</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Product;
