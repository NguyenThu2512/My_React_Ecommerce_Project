import React from 'react'
import './HomeInfo.css'
import { Link } from 'react-router-dom'
import info_image from '../Assets/info-1.JPG'

function HomeInfo() {
  return (
    <div className="homeinfo">
      <div className="info">
        <h2>Cung cấp</h2>
        <h1>NƯỚC HOA TỪ THIÊN NHIÊN</h1>
        <p>Với sự kết hợp độc đáo của các tinh dầu và chiết xuất từ hoa, lá, gỗ và thảo mộc, nước hoa từ thiên nhiên mang đến một trải nghiệm hương thơm tự nhiên, tươi mát và dịu nhẹ. Bạn sẽ cảm nhận được sự gần gũi với thiên nhiên và tận hưởng một cái gật đầu đầy thư giãn từ mọi giọt nước hoa</p>
        <Link to="/introduction"><button>ĐỌC THÊM</button></Link>
      </div>
      <div className="image">
        <img src={info_image} alt="" />
      </div>
    </div>
  )
}

export default HomeInfo
