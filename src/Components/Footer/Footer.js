import React from 'react'
import './Footer.css'
import logo_icon from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'



function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo_icon} alt="" />
        <p>MERCI</p>
      </div>
      <ul className="footer-links">
        <li>Về chúng tôi</li>
        <li>Sản phẩm</li>
        <li>Văn phòng</li>
        <li>Công ty</li>
        <li>Liên lạc</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
