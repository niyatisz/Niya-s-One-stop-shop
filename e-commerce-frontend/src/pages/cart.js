import React, { useContext, useEffect, useState } from 'react'
import summaryApi from '../common'
import Context from '../context';
import { AiFillDelete } from 'react-icons/ai';
import displayINRCurrency from '../helpers/DisplayCurrency'
const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const cartContext = useContext(Context)
    const loadingCart = new Array(4).fill(null)

    const getCartData = async () => {
        setLoading(true)
        const res = await fetch(summaryApi.viewCart.url, {
            method: summaryApi.viewCart.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json()
        console.log('data: ', data);
        if (data.success) {
            setData(data.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        getCartData()
    }, [])

    const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.productQuantity,0)
    console.log('totalQty: ', totalQty);
    const totalPrice = data.reduce((prev,curr)=> prev + (curr.productQuantity * curr?.productId?.price) ,0)
    console.log('totalPrice: ', totalPrice);
    return (
        <div className='p-5'>
            <div className='container mx-auto'>

                <div className='text-center text-lg my-3'>
                    {
                        data.length === 0 && !loading && (
                            <p className='bg-white py-5'>No Data</p>
                        )
                    }
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                    {/***view product */}
                    <div className='w-full max-w-3xl'>
                        {
                            loading ? (
                                loadingCart?.map((el, index) => {
                                    return (
                                        <div key={el + "Add To Cart Loading" + index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                                        </div>
                                    )
                                })

                            ) : (
                                data.map((product, index) => {
                                    console.log('product: ', product);
                                    return (
                                        <div key={product?._id + "Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                            <div className='w-32 h-32 bg-slate-200'>
                                                <img src={product?.productId?.productImage?.[0]} className='w-full h-full object-scale-down mix-blend-multiply' />
                                            </div>
                                            <div className='px-4 py-2 relative'>
                                                {/**delete product */}
                                                <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product?._id)}>
                                                <AiFillDelete />
                                                </div>

                                                <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                                <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                                <div className='flex items-center justify-between'>
                                                    <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.price)}</p>
                                                    <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.price * product?.productQuantity)}</p>
                                                </div>
                                                <div className='flex items-center gap-3 mt-1'>
                                                    <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={() => decraseQty(product?._id, product?.quantity)}>-</button>
                                                    <span>{product?.productQuantity}</span>
                                                    <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={() => increaseQty(product?._id, product?.quantity)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>


                    {/***summary  */}
                    <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                        {
                            loading ? (
                                <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>

                                </div>
                            ) : (
                                <div className='h-36 bg-white'>
                                    <h2 className='text-white bg-red-600 px-4 py-1'>Bill Details</h2>
                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Quantity</p>
                                        <p>{totalQty}</p>
                                    </div>

                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Total Price</p>
                                        <p>{displayINRCurrency(totalPrice)}</p>
                                    </div>

                                    <button className='bg-blue-600 p-2 text-white w-full mt-2'>Payment</button>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart