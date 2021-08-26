import React from 'react'
import {Link } from 'react-router-dom';

// import icons from react-icon
import { FaSearch , FaShoppingBasket} from "react-icons/fa";
import Rating from './Rating';


const CardAccessoryProduct = (props) => {
    const {product} =props
    return (
       
        <div >
            <div className="card cardLocalProduct text-center mx-4" style={{width:'15rem', height:'19rem'}}>
            <img src={product.image} alt={product.name}  height="130"/> 
         
                <div className="card-body">
                <Link to={`/AccessoryProductDetailsScreen/${product._id}`} className="card-title" > <h5 > {product.name} </h5> </Link>
                <p className="card-text"><small className="text-muted"> {product.price}
              
                </small></p>
             

               <Rating rating={product.rating} numReviews={product.numReviews}/>

                <br/>
                <FaShoppingBasket size='1.3rem'/>  
                <Link to={`/AccessoryProductDetailsScreen/${product._id}`}>  <FaSearch size='1rem' color='black' /> </Link>


                </div>
            </div>
            
        </div>

       
    )
}

export default CardAccessoryProduct
