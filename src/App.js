import "./App.css";
import Home from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/userList/UserList";
import User from "./components/user/User";
import CreateUser from "./components/createUser/CreateUser";
import ProductList from "./components/productList/ProductList";
import Product from "./components/product/Product";
import CreateProduct from "./components/createProduct/CreateProduct";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__container">
          <Sidebar />
          <Switch>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/createUser">
              <CreateUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/createProduct">
              <CreateProduct />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
