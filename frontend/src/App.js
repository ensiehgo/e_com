import './App.css';
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);


  return <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element = {<Home />}/>
      <Route exact path="/product/:id" element = {<ProductDetails />}/>
      {/* <Route exact path="/products" element = {<Products />}/> */}
    </Routes>
    <Footer />
  </Router>

}

export default App;
