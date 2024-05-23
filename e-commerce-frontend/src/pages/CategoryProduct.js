import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
    const categoryName = useParams("category");
    

  return (
    <div>{categoryName?.categoryName}</div>
  )
}

export default CategoryProduct