import './App.css';
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Cart from "./component/Cart/Cart";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

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
      <Route exact path="/" element = {<Home />}/>
      <Route exact path="/product/:id" element = {<ProductDetails />}/>
      <Route exact path="/products" element = {<Products />}/>
      <Route exact path="/login" element = {<LoginSignUp />}/>
      {/* <ProtectedRoute exact path="/account" element = {<Profile />}/> */}
      <Route exact path="/cart" element = {<Cart />}/>
    </Routes>
    <Footer />
  </Router>

}

export default App;
