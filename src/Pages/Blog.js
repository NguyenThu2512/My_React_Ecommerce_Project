import React, { useContext } from 'react'
import HeroBreadcrumb from '../Components/HeroBreadcrumb/HeroBreadcrumb'
import { ShopContext } from '../Context/ShopContext'
import BlogItem from '../Components/BlogItem/BlogItem'
import './CSS/Blog.css'
import SideNavigation from '../Components/SideNavigation/SideNavigation'

function Blog() {
  const {blog_items}=useContext(ShopContext)
  return (
    <div className="blog">
      <div className="hero-breadcrumb">
        <HeroBreadcrumb title="Tin tức"/>
      </div>
      <div className="blogitems-container">
        <div className="blog-main">
            {
              blog_items.map((item,i)=>{
                return (
                  <BlogItem key={i} id={item.id} image={item.image} title={item.title} date={item.date} content_short={item.content_short} />
                )
              })
            }
        </div>
        <div className="blog-side">
            <SideNavigation/>
        </div>
      </div>
    </div>
  )
}

export default Blog
