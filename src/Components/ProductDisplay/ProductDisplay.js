import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

function ProductDisplay(props) {
    const {product}=props
    const images=[product.image, product.image_2, product.image_3]
    const [currentSlide, setCurrentSlide] = useState(0);
    const {addToCart}=useContext(ShopContext)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const selectSlide = (index) => {
        setCurrentSlide(index);
    };


  return (
    <div className="productdisplay">
        <div className="productdisplay-image">
            <div className="slideshow-gallery">
                <div className="slideshow-container">
                    {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        
                    >
                        <img src={img} alt="" />
                    </div>
                    ))}
                    <a className="prev" onClick={prevSlide}>&#10094;</a>
                    <a className="next" onClick={nextSlide}>&#10095;</a>
                </div>
                <div className="thumbnail-container">
                    {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => selectSlide(index)}
                    />
                    ))}
                </div>
            </div>
        </div>
      <div className="productdisplay-content">
        <h2>{product.name}</h2>
        <div className="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div className="prices">
            <div className="new-price">
                {product.new_price}
            </div>
            <div className="old-price">
                {product.old_price}
            </div>   
        </div>
        <div className="short_description">
            <div>
               <span>Thương hiệu: </span> {product.brand}
            </div>
            <div>
                <span>Xuất xứ: </span> {product.origin}
            </div>
            <div>
                <span>Giới tính: </span>{product.sex}
            </div>
            <div>
                <span>Dung tích: </span> {product.volume}
            </div>
            <div>
                <span>Mùi hương: </span> {product.smell}
            </div>
        </div>
        <div onClick={()=>window.scrollTo(0,0)}>
            
            <button onClick={()=>addToCart(product.id)}>
            <i class="fas fa-cart-plus"></i>
            THÊM VÀO GIỎ HÀNG</button>
        </div>
        <div><span>Danh mục:</span> Phụ nữ, Nước hoa, Valentino</div>
        <div><span>Tags:</span>Mới nhất, Mùi hương</div>


      </div>
    </div>
  )
}

export default ProductDisplay
