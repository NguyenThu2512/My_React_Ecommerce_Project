import React, { useContext } from 'react'
import HeroBreadcrumb from '../Components/HeroBreadcrumb/HeroBreadcrumb'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Context/ShopContext'

function Cart() {
  const{cartItems, totalCartNumber}=useContext(ShopContext)
  return (
    <div className="cart">
      <div className="hero-breadcrumb">
        <HeroBreadcrumb title="Giỏ hàng"/>
      </div>
      <div>
        {
          totalCartNumber()>0 ? <CartItems/> : <h2>Bạn chưa thêm mặt hàng nào vào giỏ hàng</h2>
        }

        
      </div>

    </div>
  )
}

export default Cart
