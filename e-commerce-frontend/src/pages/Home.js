import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct';
import HorizontalCard from '../components/HorizontalCard';
import VerticalCard from '../components/VerticalCard';

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCard category={"airpodes"}/>

      <HorizontalCard category={"watches"} />

      <VerticalCard category={"mobiles"} />

      <VerticalCard category={"refrigerator"} />
      
      <VerticalCard category={"televisions"} />
    </div>
  )
}

export default Home