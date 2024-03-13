import React, { useContext } from 'react'
import HeroBreadcrumb from '../Components/HeroBreadcrumb/HeroBreadcrumb'
import './CSS/Product.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'
import SideNavigation from '../Components/SideNavigation/SideNavigation'

function Product(props) {
  const {all_product}=useContext(ShopContext)
  return (
    <div className="product">
      <div className="hero-breadcrumb">
        <HeroBreadcrumb title="Sản phẩm"/>
      </div>
      <div className="products-container">
        <div className="products-main">
          <div className="products-sort">
            <div className="products-sort-left">
              Hiển thị 
              <select name="display" id="display">
                <option value="default">Mặc định</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="products-sort-left">
              Sắp xếp 
              <select name="sort" id="sort">
                <option value="default">Mặc định</option>
                <option value="">Sắp xếp theo tên từ A tới Z</option>
                <option value="">Sắp xếp theo tên từ Z tới A</option>
                <option value="">Sắp xếp theo giá từ nhỏ đến lớn</option>
                <option value="">Sắp xếp theo giá từ lớn đến bé</option>
              </select>
            </div>
          </div>
          <div className="products-list">
            {
              all_product.map((item, i)=>{
                return (
                  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )
              })
            }
          </div>
        </div>
        <div className="products-side">
            <SideNavigation/>
            
        </div>

      </div>
    </div>
  )
}

export default Product
