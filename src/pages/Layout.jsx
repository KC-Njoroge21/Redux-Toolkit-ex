import React from "react";
import DUMMY_PRODUCTS from "../components/ItemsData";
import Product from "../components/Product";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Layout = () => {
  const products = DUMMY_PRODUCTS.map((items, index) => {
    return <Product key={index} items={items} />;
  });

  const showCart = useSelector(state => state.cart.showCart)

  return (
    <div>
      <div className="flex gap-6  flex-wrap justify-center">{products}</div>
      {showCart && <Cart />}
    </div>
  );
};

export default Layout;
