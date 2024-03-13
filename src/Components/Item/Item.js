import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className="item" onClick={()=> window.scrollTo(0,0)}>
      <Link to={`/product-detail/${props.id}`}>
        <img src={props.image} alt="" />
        <div className="item-info">
          <div className="name">{props.name}</div>
          <div className="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </div>
          <div className="prices">
              <div className="new-price">
                  {props.new_price} VNĐ
              </div>
              <div className="old-price">
                  {props.old_price} VNĐ
              </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item
