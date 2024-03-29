import React from "react";
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";

const Home = () => {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
  }, [])

  // const filter = useSelector(state => state.filter)
  // const { stock, brand } = filter

  // const { products, isLoading } = useSelector(state => state.products)


  // useEffect(() => {
  //   dispatch(getProducts())

  // }, [dispatch])

  const activeClass = "text-white  bg-indigo-500 border-white";
  let content;

  // if (isLoading) {
  //   content = <h2>Loading....</h2>
  // }

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }

  // if (products?.length && (stock || brand?.length)) {
  //   content = products.filter((product) => {
  //     if (brand) {
  //       return product.status !== true
  //     }
  //     return product
  //   })

  //     .filter((product) => {
  //       if (brand) {
  //         return brand.includes(product.brand)
  //       }
  //       return product
  //     })
  //     .map((product) => (
  //       <ProductCard key={product.model} product={product} />
  //     ))
  // }
  return (
    <>
      <div className='max-w-7xl gap-14 mx-auto my-10'>
        <div className='mb-10 flex justify-end gap-5'>
          <button
            className={`border px-3 py-2 rounded-full font-semibold`}
            // className={`border px-3 py-2 rounded-full font-semibold ${brand?.includes('amd') ? activeClass : ''}`}
            onClick={() => { dispatch(toggle()) }}
          >
            In Stock
          </button>
          <button
            onClick={() => { dispatch(toggleBrands('amd')) }}
            // className={`border px-3 py-2 rounded-full font-semibold ${brand?.includes('intel') ? activeClass : ''}`}>
            className={`border px-3 py-2 rounded-full font-semibold`}>
            AMD
          </button>
          <button
            onClick={() => { dispatch(toggleBrands('Intel')) }}
            className={`border px-3 py-2 rounded-full font-semibold `}>
            Intel
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
          {content}
        </div>

      </div>


    </>
  );
};

export default Home;
