import React, { useContext, useRef, useState } from 'react'
import logo_icon from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
    const[menu,setMenu]=useState("home");
    const[click, setClick]=useState(false);
    let {totalCartNumber}=useContext(ShopContext)
    const handleClick=()=>{
        setClick(!click)
    }
    const closeMobileMenu =()=>{
        setClick(false);
    }

    
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <Link to="/"><img src={logo_icon} alt="logo icon" /></Link>
            <p>Merci</p>
        </div>
        <ul className={click?"navbar-menu active":"navbar-menu"}>
                <li onClick={()=>setMenu("home")} className={menu==="home"?"nav-item active":"nav-item"}>
                    <Link onClick={closeMobileMenu} className="nav-link" to="/">Trang chủ</Link>
                </li>
                <li onClick={()=>setMenu("intro")} className={menu==="intro"?"nav-item active":"nav-item"}>
                    <Link onClick={closeMobileMenu}  className="nav-link" to="/introduction">Giới thiệu</Link>
                </li>
                <li onClick={()=>setMenu("product")} className={menu==="product"?"nav-item active dropdown":"nav-item dropdown"}>
                    <Link onClick={closeMobileMenu}  className="nav-link" to="/products">Sản phẩm <i className="fas fa-caret-down"></i></Link>
                    <ul className="dropdown-menu">
                        <li onClick={()=>setMenu("women")} className={menu==="women"?"nav-item active":"nav-item"}>
                            <Link onClick={closeMobileMenu} className="dropdown-link" to="/women">
                            Nước hoa nữ
                            </Link>
                        </li>
                        <li onClick={()=>setMenu("men")} className={menu==="men"?"nav-item active":"nav-item"}>
                            <Link onClick={closeMobileMenu} className="dropdown-link" to="/men">
                            Nước hoa nam
                            </Link>
                        </li>
                        <li onClick={()=>setMenu("sub")} className={menu==="sub"?"nav-item active":"nav-item"}>
                            <Link onClick={closeMobileMenu} className="dropdown-link" to="/men">
                            Phụ kiện
                            </Link>
                        </li>
                    </ul>
                </li>
                <li onClick={()=>setMenu("blog")} className={menu==="blog"?"nav-item active":"nav-item"}>
                    <Link onClick={closeMobileMenu}  className="nav-link" to="/blog">Tin tức</Link>
                </li>
                <li onClick={()=>setMenu("contact")} className={menu==="contact"?"nav-item active":"nav-item"}>
                    <Link onClick={closeMobileMenu}  className="nav-link" to="/contact">Liên hệ</Link>
                </li>
                <li onClick={()=>setMenu("contact")} className="nav-item-mobile">
                    <Link onClick={closeMobileMenu}  className="nav-link" to="/login-signup">Đăng nhập</Link>
                </li>
                   
            </ul>
        <div className="navbar-login-cart">
            <div className="navbar-login">
                <Link to="/login-signup"><button onClick={()=>setMenu("")}>Đăng nhập </button></Link>
            </div>
            <div className="navbar-cart">
                <Link to="/cart"><i class="fas fa-shopping-cart" onClick={()=>setMenu("")}></i></Link>
                <div className="navbar-cart-count">{totalCartNumber()}</div>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i class={click? "fas fa-times":"fas fa-bars"}></i>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
