import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import { useSelector } from "react-redux"
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import OrderList from "./component/Admin/OrderList";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser";



function App() {

  const { isAuthenticated, user, isAdmin } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);


  return <Router>
    <Header/>

    {isAuthenticated && <UserOptions user={user} />}

    <Routes>
    {/* <Route exact path="/admin/dashboard" element = {<Dashboard />}/> */}
      <Route exact path="/" element = {<Home />}/>//d
      <Route exact path="/product/:id" element = {<ProductDetails />}/>
      <Route exact path="/products" element = {<Products />}/>
      <Route exact path="/login" element = {<LoginSignUp />}/>
      <Route exact path="/cart" element = {<Cart />}/>

      <Route element = {<ProtectedRoute isAdmin={isAdmin}/>}>
        <Route exact path="/account" element = {<Profile/>}/>
        <Route exact path="/shipping" element = {<Shipping />}/>
        <Route exact path="/order/confirm" element = {<ConfirmOrder />}/>
        <Route exact path="/success" element = {<OrderSuccess />}/>
        <Route exact path="/orders" element = {<MyOrders/>}/>
        {/* <Route exact path="/order/:id" element = {<OrderDetails/>}/> */}
        <Route exact path="/process/payment" element = {<Payment />}/>
      </Route>

     
     
      {/* Admin Routes */}
      <Route element = {<ProtectedRoute isAdmin={true}/>}>
        <Route exact path="/admin/dashboard" element = {<Dashboard />}/> */}
        <Route exact path="/admin/products" element = {<ProductList />}/>
         <Route exact path="/admin/product" element = {<NewProduct />}/>
         <Route exact path="/admin/orders" element = {<OrderList />}/>
         <Route exact path="/admin/users" element = {<UsersList />}/>
         <Route exact path="/admin/users/:id" element = {<UpdateUser />}/>
      </Route>

     
      {/* <Route
        exact path="/process/payment" 
        element = 
        {
          <ProtectedRoute isAdmin={isAdmin}>
            <OrderSuccess />
            </ProtectedRoute>
        }
        /> */}
    </Routes>
    {/* <Footer /> */}
  </Router>

}

export default App;
