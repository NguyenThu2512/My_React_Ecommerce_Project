import React, { useState } from 'react'
import './DescriptionComment.css'
import user_img from '../Assets/user.jpg'

function DescriptionComment(props) {
    const [activeTab, setActiveTab]=useState("description")
    const handleTab =(tab)=>{
        setActiveTab(tab)
    }
    const {product}=props

  return (
    <div className='description-comment'>
      <div className="description-comment-buttons">
        <div className="description-button" >
            <button className={activeTab==="description"?"active":""}  onClick={()=>handleTab("description")}>Mô tả</button>
        </div>
        <div className="comment-button" >
            <button className={activeTab==="comment"?"active":""} onClick={()=>handleTab("comment")}>Bình luận</button>
        </div>
      </div>
      <div className="description-comment-content">
        {
            activeTab==="description" && 
            <div className="description-content">
                <p>Sau dòng nước hoa Valentino Uomo từ năm 2014, Valentino giới thiệu tiếp phiên bản nữ tính mang tên Valentino Donna vào mua thu 2015.</p>
                <p>Nồng độ là Eau de Parfum với thiết kế tương tự Valentino Uomo khác biệt bởi màu hồng. Valentino Donna được tạo ra bởi hai nhà sáng chế tài ba Sonia Constant và Antoine Maisondieu.</p>
                <div><img src={product.image} alt="" /></div>
                <p>Mùi hương mang phong cách cổ điển đan xen hiện đại bởi sự góp mặt cả các nốt hương như: Cam bergamot Ý, hoa hồng Bulgari, hoa diên vĩ,... thích hợp cho những cô nàng đằm thắm, thích sự lãng mạn và thơ mộng.</p>
                <p>Thân chai với thiết kế đặc biệt là những họa tiết nhấp nhô khiến chai nước hoa như một viên kim cương hồng trong suốt, lấp lánh lạ kì. Đây cũng chính là điểm cộng của chai nước hoa trong mắt nhiều quý cô.</p>
                <div><img src={product.image_2} alt="" /></div>
            </div>
        }
        {
            activeTab==="comment" &&
            <div className="comment-content">
                <p>0 bình luận</p>
                <hr />
                <div className="comment-form">
                    <div><img src={user_img} alt="" /></div>
                    <div><textarea name="" id="" placeholder='Viết bình luận...'  rows="3"></textarea></div>
                </div>
            </div>
        }
      </div>
    </div>
  )
}

export default DescriptionComment
