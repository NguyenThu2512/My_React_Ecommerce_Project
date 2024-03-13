import React, { useContext } from 'react'
import './HighlightProduct.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'

function HighlightProduct() {
  const {all_product}=useContext(ShopContext)
  return (
    <div className="highlightproduct">
      <div className="highlightproduct-heading">
        <h1>Sản phẩm nổi bật</h1>
        <hr />
        <p>Cùng trải nghiệm những công thức đột phá, hương thơm tinh tế và hiệu quả làm đẹp vượt trội để tạo nên vẻ ngoài hoàn hảo cho bạn</p>
      </div>
      <div className="product-list">
        {
          all_product.map((item,i)=>{
            return (
              <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}  />

            )
          })
        }
      </div>
    </div>
  )
}

export default HighlightProduct
