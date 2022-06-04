import React, { useEffect, useState } from 'react';

const useBestSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    }, [])
  return [products]
}

export default useBestSeller