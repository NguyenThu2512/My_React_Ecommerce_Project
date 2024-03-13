import React, { useContext } from 'react'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import SideNavigation from '../Components/SideNavigation/SideNavigation';
import DescriptionComment from '../Components/DescriptionComment/DescriptionComment';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

function ProductDetail() {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const productInfo=all_product.find((item)=>item.id===Number(productId));
  return (
    <div className="productdetail">
        <div className="productdetail-productdisplay">
          <div className="productdetail-main">
              <ProductDisplay product={productInfo}/>
          </div>
          <div className="productdetail-side">
              <SideNavigation/>
          </div>
        </div>
        <div className="productdetail-description">
          <DescriptionComment product={productInfo}/>
        </div>
        <div className="relatedproduct-container">
          <RelatedProduct product={productInfo}/>
        </div>
    
      
    </div>
  )
}

export default ProductDetail
