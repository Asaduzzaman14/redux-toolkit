import React from "react";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../features/filter/filterSlice";

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
  }, [])

  const activeClass = "text-white  bg-indigo-500 border-white";
  const dispatch = useDispatch()
  let brand, stock;

  return (
    <>
      <div className='max-w-7xl gap-14 mx-auto my-10'>
        <div className='mb-10 flex justify-end gap-5'>
          <button
            className={`border px-3 py-2 rounded-full font-semibold`}
            onClick={() => { dispatch(toggle()) }}
          >
            In Stock
          </button>
          <button
            onClick={() => { dispatch(toggleBrands('amd')) }}
            className={`border px-3 py-2 rounded-full font-semibold `}>
            AMD
          </button>
          <button
            onClick={() => { dispatch(toggleBrands('Intel')) }}
            className={`border px-3 py-2 rounded-full font-semibold `}>
            Intel
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
          {/* <div className='grid grid-cols-3 gap-3 px-5'> */}
          {
            products?.map((product) => {
              return (

                <ProductCard product={product} />
              )
            })

          }
        </div>

      </div>


    </>
  );
};

export default Home;
