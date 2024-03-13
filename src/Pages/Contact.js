import React from 'react'
import HeroBreadcrumb from '../Components/HeroBreadcrumb/HeroBreadcrumb'
import ContactForm from '../Components/ContactForm/ContactForm'
import './CSS/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="hero-breadcrumb">
        <HeroBreadcrumb title="Liên lạc"/>
      </div>
      <div className="contact-container">
        <div className="contact-left">
            <div>
              <h2>Địa chỉ</h2>
              <p>22 Võ Thị Sáu, Phường Bình Thuận, Quận 7, TPHCM</p>
            </div>
            <div>
              <h2>Điện thoại</h2>
              <p>19009477</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>admin_thunguyen@gmail.com</p>
            </div>
        </div>
        <div className="contact-right">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
