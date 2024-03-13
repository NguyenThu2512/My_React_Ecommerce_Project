import React from 'react'
import Hero from '../Components/Hero/Hero'
import HomeInfo from '../Components/HomeInfo/HomeInfo'
import NewProduct from '../Components/NewProduct/NewProduct'
import HighlightProduct from '../Components/HighlightProduct/HighlightProduct'
import NewsLetter from '../Components/NewsLetter/NewsLetter'



function HomePage() {
  return (
    <div className="homepage">
      <Hero/>
      <HomeInfo/>
      <NewProduct/>
      <HighlightProduct/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage
