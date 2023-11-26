import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
// import { useStateValue } from './StateProvider'
function Product({id,title,image,price,ratings}) {
//   const [{basket},dispatch]=useStateValue();
//   console.log("this basket",basket);;
//   const addToBasket=()=>{
//    //dispatch the item into data layer
//    dispatch({
//     type:'ADD_TO_BASKET',
//     item:{
//       id:id,
//       title:title,
//       image:image,
//       price:price,
//       ratings:ratings,
//     },
//    });
//   };
  return (
    <div className='product'>
      <div className='product_info'>
        <p>
            {title}
        </p>
        <p className='product_price'>
            <small>$</small>
            <strong >{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(ratings).fill().map((_,i)=>(
              <p>⭐</p>  
            ))}
        </div>
      </div>
      <img src={image}></img>
      <p className='product-details'>
        <ul>
            <li>3000 orders / month</li>
            <li>2 users</li>
            <li>2 warehouses</li>
        </ul>
      </p>
    <Link to="/"><button className='free-trial'>START MY FREE TRIAL</button></Link>  
    </div>
  )
}

export default Product