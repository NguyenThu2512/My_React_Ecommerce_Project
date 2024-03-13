import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

function CartItems() {
    const {addToCart, removeFromCart, totalCartAmount, removeCartItem, totalCartNumber, all_product, cartItems} = useContext(ShopContext)
  

  return (
    <div className="cartitems">
        <div className="cartitems-items">
            <div className="heading">Giỏ hàng của bạn: <span>{`Đang có ${totalCartNumber()} sản phẩm`}</span></div>
            <div className="cartitems-heading">
                <div>
                    Sản Phẩm
                </div>
                <div>Đơn Giá</div>
                <div>Số Lượng</div>
                <div>Thành tiền</div>
            </div>
            {
                all_product.map((e) => {
                    
                    if(cartItems[e.id]>0){
                        return(
                            <div className="">
                                <div className="cartitems-main">
                                    <div className="product">
                                        <div><img src={e.image} alt="" /></div>
                                        <div>
                                            <div>{e.name}</div>
                                            <div className="remove" onClick={()=>removeCartItem(e.id)} ><i><i class="fas fa-trash"></i></i>Xóa</div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        {e.new_price}
                                    </div>
                                    <div className="quantity">
                                        <div className="subtract" onClick={()=>removeFromCart(e.id)}>
                                            -
                                        </div>
                                        <div>
                                            <input type="number" value={cartItems[e.id]} />
                                        </div>
                                        <div className="plus" onClick={()=>{addToCart(e.id)}}>
                                            +
                                        </div>
                                    </div>
                                    <div className="totalmount">
                                        {cartItems[e.id]*e.new_price}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    else{
                        return null
                    }
                })
                    
            }
        </div>
        <div className="cartitems-total">
            <div >
                <p>Thành tiền:</p>
                <p>{totalCartAmount()}</p>
            </div>
            <div>
                <p>Shipping fee:</p>
                <p>Free</p>
            </div>
            <hr />
            <div>
                <p>Tổng tiền:</p>
                <p>{totalCartAmount()}</p>
            </div>
            <div className="payment">
                <button>THANH TOÁN</button>
            </div>
        </div>
      
    </div>
  )
}

export default CartItems
