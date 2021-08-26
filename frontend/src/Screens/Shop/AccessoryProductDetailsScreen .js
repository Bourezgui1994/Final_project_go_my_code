import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';

import {FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import IconSeperator from '../../Components/IconSeperator';
import Rating from '../../Components/Rating';
import { Link } from 'react-router-dom';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import {detailsProduct} from '../../actions/accessoryActions'



    const AccessoryProductDetailsScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    const productDetails = useSelector( state => state.productDetails);
    const { loading, error, product } = productDetails;
    
    useEffect(()=> {
     dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () =>{
        props.history.push(`/cartAccessory/${productId}?qty=${qty}`)
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

            <Link className="backTo" to="/LocalProductScreen" >Back to result </Link>
            </div>
            
            <div className="col-md-5"> 
               
             
                <h1 >{product.name} </h1> 
                <div className='localProductDetails mt-5'> 
                    <p> Prix : {product.price}</p>
                    <p className="px-4"><Rating rating={product.rating} numReviews={product.numReviews}/></p>
                </div>
                  <p> Description :{product.description} <br/>
                  ✅𝟭𝟬𝟬% Fait à la main
                  
                  
                  </p>
                  <hr/> 
                <p>Catégorie: {product.category}</p>
                
                <div className='localProductDetails' >  statut
                <p className="px-4">{product.countInStock > 0 ? (<span className="success"> Encore en stck</span>) :
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

export default AccessoryProductDetailsScreen;
