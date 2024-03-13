import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import ProductCategory from '../../Pages/ProductCategory'
import Item from '../Item/Item'
import './RelatedProduct.css'

function RelatedProduct(props) {
    const {product}=props
    const {all_product}=useContext(ShopContext)
  return (
    <div className="related-product">
      <h1>Sản Phẩm Liên Quan</h1>
      <hr />
      <div className="related-product-box">
      {
        all_product.map((item,i)=>{
            if(product.category===item.category && product.id != item.id){
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            }
        })
      }
      </div>


    </div>
  )
}

export default RelatedProduct
