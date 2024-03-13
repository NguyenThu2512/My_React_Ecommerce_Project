import React from 'react'
import HeroBreadcrumb from '../Components/HeroBreadcrumb/HeroBreadcrumb'
import HomeInfo from '../Components/HomeInfo/HomeInfo'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import CustomerReview from '../Components/CustomerReview/CustomerReview'

function Introduction() {
  return (
    <div className="introduction">
      <div className="hero-breadcrumb">
        <HeroBreadcrumb title="Giới thiệu"/>
        <HomeInfo/>
        <CustomerReview/>
        <NewsLetter/>
      </div>
    </div>
  )
}

export default Introduction
