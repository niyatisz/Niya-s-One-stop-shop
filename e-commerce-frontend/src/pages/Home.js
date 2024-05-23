import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct';
import HorizontalCard from '../components/HorizontalCard';

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCard category={"airpodes"}/>

      <HorizontalCard category={"earphones"} />

      <HorizontalCard category={"mobiles"} />
    </div>
  )
}

export default Home