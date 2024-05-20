import React, { useState } from 'react'
import logo from '../assets/logo_niya1.png'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import Role from '../common/role';

const Header = () => {
    const [menuDisplay, setMenuDisplay] = useState(false)
    const user = useSelector((state) => state?.user?.user)
    const dispatch = useDispatch();

    const handleLogout = async () => {
        const fetchData = await fetch(summaryApi.logout.url, {
            method: summaryApi.logout.method,
            credentials: 'include',
        })

        const responseData = await fetchData.json()

        if (responseData.success) {
            toast.success(responseData.message)
            dispatch(setUserDetails(null))
        }
        if (responseData.error) {
            toast.error(responseData.message)
        }
    }
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
                <div className='flex items-center gap-7'>
                    <div className='relative flex justify-center'>
                        {user?.data?._id &&
                            <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                                {user?.data?.image ? <img src={user.data.image} alt='user' className='w-10 h-10 rounded-full' /> : <FaUserCircle style={{ color: 'rgb(56, 45, 94)' }} />}
                            </div>
                        }
                        {menuDisplay &&
                            <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded hidden md:block' style={{ backgroundColor: 'rgb(239, 224, 226)', color: 'rgb(56, 45, 94)' }}>
                                {user?.data?.role === Role.ADMIN && (
                                    <nav>
                                        <Link to={'admin-panel'} className='cursor-pointer hover:text-blue-500' onClick={() => setMenuDisplay(prev => !prev)}>Admin Panel</Link>
                                    </nav>
                                )}

                            </div>
                        }
                    </div>
                    <div className='text-3xl cursor-pointer relative'>
                        <span><FaCartShopping style={{ color: 'rgb(56, 45, 94)' }} /></span>

                        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        {user?.data?._id ? <button onClick={handleLogout} className='px-3 py-1 rounded-full' style={{ backgroundColor: 'rgb(56, 45, 94)', color: 'rgb(239, 224, 226)' }}>Logout</button> : (<Link to={"/login"}>
                            <button className='px-3 py-1 rounded-full' style={{ backgroundColor: 'rgb(56, 45, 94)', color: 'rgb(239, 224, 226)' }}>Login</button>
                        </Link>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
