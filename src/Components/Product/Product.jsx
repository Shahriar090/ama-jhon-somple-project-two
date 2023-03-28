import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} Star</p>
           
           </div>
           <button className='add-cart'>Add To Cart</button>
            
            
            
        </div>
    );
};

export default Product;