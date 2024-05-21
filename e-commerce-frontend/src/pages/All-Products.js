import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  return (
    <div className='rounded-md' style={{ backgroundColor: 'rgb(239, 224, 226)', color: 'rgb(56, 45, 94)' }}>
      <div className="flex justify-between items-center mb-4 p-4 rounded-full">
        <h2 className="text-xl font-semibold">All Products</h2>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700" style={{ backgroundColor: 'rgb(56, 45, 94)' }}
        onClick={() => setOpenUploadProduct(true)}>Add user</button>
      </div>

      {/* Upload Product */}

      {openUploadProduct && (

        <UploadProduct onClose={()=> setOpenUploadProduct(false)}/>

      )}
    </div>
  )
}

export default AllProducts