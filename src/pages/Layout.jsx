import React from "react";
import DUMMY_PRODUCTS from "../components/ItemsData";
import Product from "../components/Product";
import Cart from "./Cart";

const Layout = () => {
  const products = DUMMY_PRODUCTS.map((items, index) => {
    return <Product key={index} items={items} />;
  });

  return (
    <div>
      <div className="flex gap-6  flex-wrap justify-center">{products}</div>
      <Cart />
    </div>
  );
};

export default Layout;
