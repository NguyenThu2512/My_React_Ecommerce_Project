import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavigation.css'


function SideNavigation() {
  return (
    <div className="sidenavigation">
        <div className="products-search">
                <div className="search-heading">
                    <p>Tìm Kiếm</p>
                </div>
                <div className="search-input">
                    <form action="">
                        <input type="text" placeholder="Nhập từ khóa" />
                        <button type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>
            <div className="products-category">
                <div className="category-heading">
                    <p>Danh Mục Sản Phẩm</p>
                </div>
                <ul className="category-list">
                    <li><Link to="/women">Nước Hoa Nữ</Link></li>
                    <li><Link to="/men">Nước Hoa Nam</Link></li>
                    <li><Link to="/men">Phụ Kiện</Link></li>
                </ul>
        </div>
    </div>
  )
}

export default SideNavigation
