import React from 'react'
import logo from '../assets/logo_niya1.png'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='h-20 shadow-md' style={{ backgroundColor: 'rgb(239, 224, 226)' }}>
            <div className='h-full mx-auto container flex items-center px-4 justify-between'>
                <div>
                    <Link to={"/"} >
                    <img src={logo} alt='logo' style={{ height: "80px", width: "100px" }} />
                    </Link>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-lg pl-2'>
                    <input type='text' placeholder='Search here...' style={{ backgroundColor: 'rgb(239, 224, 226)' }} className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white'>
                        <FaSearch style={{ color: 'rgb(56, 45, 94)' }} />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='text-3xl cursor-pointer'>
                        <FaUserCircle style={{ color: 'rgb(56, 45, 94)' }} />
                    </div>
                    <div className='text-3xl cursor-pointer relative'>
                        <span><FaCartShopping style={{ color: 'rgb(56, 45, 94)' }} /></span>

                        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"}>
                        <button className='px-3 py-1 rounded-full' style={{ backgroundColor: 'rgb(56, 45, 94)', color: 'rgb(239, 224, 226)' }}>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header