import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';


export default function App() {
  const dispatch = useDispatch()
  const fetchUserDetails = async() => {
    const data = await fetch(summaryApi.userDetails.url,{
      method: summaryApi.userDetails.method,
      credentials: 'include',
    })
    const responseData = await data.json()
    if(responseData.success) {
      dispatch(setUserDetails(responseData))
    }
    // console.log('responseData: ', responseData);

  }
  useEffect(() => {
    //user Details 
    fetchUserDetails()
  }, [])
  return (
    <>
    <Context.Provider value={{
      fetchUserDetails
    }} >
    <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
      </Context.Provider>
    </>
  )
}
