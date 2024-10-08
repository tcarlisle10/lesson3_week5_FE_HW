import React, { useEffect } from 'react'
import axios from 'axios'




const ProductList = () => {
  return (

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(data => console.log(data))
        }, [])

    )
}


export default ProductList
