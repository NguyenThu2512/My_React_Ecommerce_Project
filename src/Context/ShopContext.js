import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
import blog_items from '../Components/Assets/blog_item'
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    
    
    let cart=[];
    for(let index=1;index<all_product.length+1;index++){
        cart[index]=0;
    }
    const [cartItems, setCartItems]=useState(cart)
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const totalCartNumber =()=>{
        let totalCartNumber=0
        all_product.map((item)=>{
            if(cartItems[item.id]>0){
                totalCartNumber +=cartItems[item.id]
            }
        })
        return totalCartNumber
    }
    const totalCartAmount =()=>{
        let totalCartAmount=0
        all_product.map((item)=>{
            if(cartItems[item.id]>0){
                totalCartAmount += (item.new_price*cartItems[item.id]);
            }
        })
        return totalCartAmount
    }
    const removeCartItem =(productId)=>{
        return cartItems[productId]=0;
    }
    
    console.log("cartitem:", cartItems)
    console.log("totalcart: ",totalCartNumber())
    
    const contextValue={addToCart, removeFromCart, totalCartNumber, totalCartAmount, removeCartItem,all_product, cartItems, blog_items}
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
