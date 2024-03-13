import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
      <h2>Ưu đãi đặc biệt cho người đăng ký</h2>
      <h1>NHẬN NGAY GIẢM GIÁ CHO THÀNH VIÊN</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
