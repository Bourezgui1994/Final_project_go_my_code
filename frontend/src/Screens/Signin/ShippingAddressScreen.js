import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../Components/CheckoutSteps'
import IconSeperator from '../../Components/IconSeperator'

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    if (!userInfo) {
        props.history.push('/signin');
      }

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
       // dispatch shipping address 
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode})
          );  
          props.history.push('/placeOrder'); 
     
      } ;

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>

            <div class="col-md-12  col-xs-12 text-center">  
            <h1> Remplir vos <span>Information</span></h1>
            <IconSeperator/>
            </div>

            <div className="row">
            <div className="col-md-4"></div>
            
            
            <form onSubmit={submitHandler} className="formSignin col-md-6 mt-5" >

             
                <div className="mb-3">
                <label for="name" className="form-label text-center"> Nom complet</label>
                <input type="text" className="form-control " id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                </div>

                <div className="mb-3">
                <label for="address" className="form-label text-center"> Addresse </label>
                <input type="text" className="form-control " id="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                </div>

                <div className="mb-3">
                <label for="city" className="form-label text-center"> Votre Cité  </label>
                <input type="text" className="form-control " id="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
                </div>

                <div className="mb-3">
                <label for="postalCode" className="form-label text-center"> Code postale  </label>
                <input type="text" className="form-control " id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required/>
                </div>
    
                <button type="submit" className="btn btn-warning mt-4"> Continuer </button>
           
               
            </form>
            <div className="col-md-2"></div>
        </div>

       
        </div>
    )
}

export default ShippingAddressScreen
