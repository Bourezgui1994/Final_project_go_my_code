import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";


// add items to cart

export const addToCart = (productId, qty) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`/api/dataProduct/${productId}`);
    dispatch ({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    })

};

// remove items from cart

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type:CART_REMOVE_ITEM, payload:productId });
    
}

// save shipping adress 

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };