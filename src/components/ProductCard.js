import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addTocart } from "../features/Cart/cartSlice";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation()

  const dispatch = useDispatch()

  return (
    <div
      className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product.model}
    >
      {pathname.includes('cart') && <span className=' absolute right-5 top-5 rounded-sm bg-indigo-700 p-2 text-white bolder'>{product.quantity}</span>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button
          onClick={() => dispatch(addTocart(product))}
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
