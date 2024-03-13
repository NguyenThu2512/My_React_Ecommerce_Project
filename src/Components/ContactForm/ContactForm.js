import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className='contactform'>
      <h2>Liên hệ ngay với chúng tôi</h2>
      <p>Hãy dành chút thời gian để chia sẻ những suy nghĩ, câu hỏi hoặc ý kiến của bạn với chúng tôi</p>
      <div>
        <form action="" className="form-container">
            <div className="form-row ">
                <div> <span>*</span>
                    <input type="text" placeholder='Họ và tên'/>
                </div>
                <div><span>*</span>
                    <input type="email" placeholder='Email'/>
                </div>
            </div>
            <div className="form-row">
                <div> <span>*</span>
                    <input type="tel" placeholder='Số điện thoại'/>
                </div>
                <div>
                    <input type="text" placeholder='Địa chỉ'/>
                </div>
            </div>
            <div className="form-message">
                <div> <span>*</span>
                    <textarea name="" id="" placeholder="Nội dung"  rows="5"></textarea>
                </div>
            </div>
            <div className="form-code">
                <div> <span>*</span>
                    <input type="text" placeholder="Mã bảo mật" />

                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
