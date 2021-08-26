import {createStore, compose,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';

import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer } from './reducers/productReducers';
import { userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';

const initialState = {
 userSignin:{
     userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
 },

};

const reducer = combineReducers ({
 productList: productListReducer,
 productDetails: productDetailsReducer,
 cart: cartReducer,
 userSignin: userSigninReducer,
 userRegister: userRegisterReducer,
 userDetails: userDetailsReducer,
 userUpdateProfile: userUpdateProfileReducer,
 productCreate : productCreateReducer,
 productUpdate: productUpdateReducer,
 productDelete: productDeleteReducer,
 userList: userListReducer,
 userDelete: userDeleteReducer,
 userUpdate: userUpdateReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create store 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store ;