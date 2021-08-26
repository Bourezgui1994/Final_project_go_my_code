import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';

import {FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import IconSeperator from '../../Components/IconSeperator';
import Rating from '../../Components/Rating';
import { Link } from 'react-router-dom';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import {detailsProduct} from '../../actions/productActions'



    const LocalProductDetailsScreen = (props) => {
        
    const dispatch = useDispatch();
    
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)

    const productDetails = useSelector( state => state.productDetails);
    const { loading, error, product } = productDetails;
    
     // dispatch an action to fetch a details local product from store 


    useEffect(()=> {
     dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (

        <div> 

        {loading ? <LoadingBox> </LoadingBox>
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
        :
        <div>
            <div className="row backgroundProductDetails fix">
        
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                <h1 className="titleProductDetails" > Détails produit</h1>
                </div>
            </div>


            <h1>Votre <span>Produit</span></h1>
            <IconSeperator/>

            <div className="row py-5"> 
            <div className="col-md-1"> </div>
            <div className="col-md-5 mt-5 "> 
            <img  className="cardLocalProduct  px-1" src={product.image} alt={product.name} width="450" height="300"/> <br/> 
             
             <img className="imageProductDetails mt-3 px-1"  src={product.image} alt={product.name} width="150"/>  
             <img className="imageProductDetails mt-3 px-1"  src={product.image} alt={product.name} width="150"/> 
             <img className="imageProductDetails mt-3 px-1"  src={product.image} alt={product.name} width="150"/> <br/>

            <Link className="backTo" to="/LocalProductScreen" > Back to result </Link>
            </div>
            
            <div className="col-md-5"> 
               
             
                <h1 >{product.name} </h1> 
                <div className='localProductDetails mt-5'> 
                    <p> Prix : {product.price}</p>
                    <p className="px-4"><Rating rating={product.rating} numReviews={product.numReviews}/></p>
                </div>
                  <p>Poids: {product.poids}</p>
                  <p> Description :{product.description} <br/>
                  ✅𝟭𝟬𝟬% 𝗻𝗮𝘁𝘂𝗿𝗲𝗹 <br/>
                  ✅ 𝗦𝗮𝗻𝘀 𝘀𝘂𝗰𝗿𝗲 𝗮𝗷𝗼𝘂𝘁𝗲́ <br/>
                  ✅𝗦𝗮𝗻𝘀 𝗮𝗱𝗱𝗶𝘁𝗶𝗳𝘀 <br/>
                  ✅𝗥𝗶𝗰𝗵𝗲 𝗲𝗻 𝗳𝗶𝗯𝗿𝗲 𝗲𝘁 𝗲𝗻 𝗽𝗿𝗼𝘁𝗲́𝗶𝗻𝗲 <br/>
                  ✅𝗩𝗲𝗴𝗮𝗻 <br/>
                  
                  </p>
                  <hr/> 
                <p>Catégorie: {product.category}</p>
                
                <div className='localProductDetails' >  statut
                <p className="px-4">{product.countInStock > 0 ? (<span className="success"> Encore En Stock</span>) :
                   (<span className="error"> N'est plus disponible </span>)} </p>
                </div>
                 { 
                     product.countInStock > 0 && (
                        <div>
                        <div className="localProductDetails">
                        <p> Quantité</p> 
                        <select value={qty} onChange={(e) => setQty(e.target.value)} className="mx-4"> 
                        
                        {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x+1} value={x+1}> {x+1}</option>
                            ))}

                        </select>
                        
                       </div>
                       <button onClick={addToCartHandler} className="btn-lg btn-warning mt-4"> Ajouter au carte </button>
                       </div>
                     )
                 }
                

                <hr/> 
                <div className="btn-lg"> Partager
                <FaFacebook/>
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
              
             <div className="col-md-1"> </div>
            </div>

            </div>

        </div>}

       </div>
        
    )
}

export default LocalProductDetailsScreen;
