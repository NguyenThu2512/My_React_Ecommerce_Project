import React from 'react'
import './CSS/LoginSignup.css'


function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>ĐĂNG NHẬP</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" name="" id="" />
            <input type="password"  placeholder="Password"/>
        </div>
        <button>Tiếp tục</button>
        <p className="loginsignup-login">
            Chưa có tài khoản? <span>Đăng ký tại đây</span>
            <div className="loginsignup-agree">
                <input type="checkbox"  />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup

