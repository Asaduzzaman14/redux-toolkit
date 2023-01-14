import React from "react";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
  }, [])



  return (
    <>

      <h1>This is home page</h1>
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
      {/*  </div> */}
    </>
  );
};

export default Home;
