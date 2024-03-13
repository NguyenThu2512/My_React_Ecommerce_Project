import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem(props) {
  return (
    <div className="blogitem">
      <div className="blogitem-img">
        <img src={props.image} alt="" />
      </div>
      <div className="blogitem-content">
        <div className="title">
            {props.title}
        </div>
        <div className="date-access">
            <div className="date">
                <i class="far fa-calendar-alt"></i>
                {props.date}
            </div>
            <div className="access">
                <i class="far fa-eye"></i>
                45
            </div>
        </div>
        <div className="short-description">
            {props.content_short}
        </div>
        <div className="read-more">
            <Link to="/blog">Đọc thêm</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
