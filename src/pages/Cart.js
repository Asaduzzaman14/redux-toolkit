import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {

  const products = useSelector(state => state.cart.cart)
  console.log(products);

  return (
    <>
      <h1>This is cart</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          products?.map(product => {
            return <ProductCard
              product={product}
            ></ProductCard>
          })
        }
      </div>
    </>
  );
};

export default Cart;
