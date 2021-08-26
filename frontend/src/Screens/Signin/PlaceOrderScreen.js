import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../Components/CheckoutSteps';
import IconSeperator from '../../Components/IconSeperator';

const PlaceOrderScreen = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>

        <div class="col-md-12  col-xs-12 text-center">  
        <h1> Vos<span> opérations</span></h1>
        <IconSeperator/>
        </div>

        <div className="row mt-5">
        <div className="col-md-3"></div>

        <div className="col-md-6 mt-2">
         
         <h4> Transaction effectué par: </h4>
         <hr></hr>
          <strong>Nom : </strong>{cart.shippingAddress.fullName} <br/>
          <strong>Adresse: </strong>{cart.shippingAddress.address},
          {cart.shippingAddress.city},{cart.shippingAddress.postalCode}
         
          <h5 className="mt-5"> Votre produit : </h5>
          <hr></hr>
            
            <div>
                {cart.cartItems.map((item) => 
                    <div key={item.product}>
                    
                    <img src={item.image} alt={item.name} class="img-thumbnail mb-3" width="100" /> <br/>
                    <Link to={`/LocalProductDetailsScreen/${item.product}`} > {item.name}</Link>
                  
                    <h6 class="mt-2"> Totale commande : {item.qty} * {item.price} dt ={item.qty * item.price} dt </h6>
                    </div>
                    )}
                        
            </div>
        </div>
        
    
        
        <div className="col-md-3"></div>

        
        </div>

        </div>
    )
}

export default PlaceOrderScreen
