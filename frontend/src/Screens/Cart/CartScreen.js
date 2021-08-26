import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import IconSeperator from '../../Components/IconSeperator';
import MessageBox from '../../Components/MessageBox';
import './Cart.css';

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1])
    : 1;

    const cart =useSelector((state) => state.cart);

    const {cartItems} =cart;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch,productId, qty]);

    // delete product items from cart
    const removeFromCartHandler= (id) => {
        dispatch(removeFromCart(id))
    }
    // chekout button
    const chekoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div> 
            <div className="row backgroundProductDetails">
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                <h1 className="titleProductDetails" > Carte produit</h1>
                </div>
            </div>

            <h1>Finaliser votre <span>Commande</span></h1>
            <IconSeperator/>
            
            <div>
            
            {
                cartItems.length === 0? (
                    <MessageBox>
                    Panier vide <Link to='/LocalProductScreen'> Visiter Notre Boutique </Link>
                    </MessageBox>)
                    : (

                        <div className="cartTable" >  
                        <table className="table">
                            <thead>
                            <tr>
                            <th scope="col"> Nom du produit</th>
                            <th scope="col"> Prix </th>
                            <th scope="col"> Quantité </th>
                            <th scope="col"> Totale </th>
                            </tr>
                           </thead>
            
                         
                           <tbody>
                           {cartItems.map((item) => 
                                <tr key={item.product}>
                                <th scope="row">
                              <img src={item.image} alt={item.name} class="img-thumbnail" width="100"/> <br/>
                              <Link to={`/LocalProductDetailsScreen/${item.product}`}> {item.name}</Link>
                              
                              </th>
                                <td>{item.price}</td>
                                <td> 
                                <div >
                                <select value={item.qty} onChange={e => dispatch(addToCart(item.product , Number(e.target.value)))}>
                                {[...Array(item.countInStock).keys()].map((x) => (
                                    <option key={x+1} value={x+1}> {x+1}</option>
                                ))}
            
                                </select>
                                </div> 
                                </td>
                                <td> <button class="btn btn-warning" onClick={() => removeFromCartHandler(item.product)}> supprimer</button></td>
                                </tr>
                                )}

                                <tr>
                                <th> <Link to="/LocalProductScreen"> <button type="button" class="btn btn-warning"> Ajouter d'autre produit </button> </Link></th>
                                 <td> <h6> {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}  </h6> </td>
                                 <td> <h6> Totale ({cartItems.reduce((a, c) => a + c.qty, 0)} Article) </h6> </td>

                                 <td> <Link to="/signin">  <button type="button" class="btn btn-warning" onClick={chekoutHandler} > Finaliser votre commande </button> </Link></td>
                                 </tr>
                             </tbody>
                           </table>
                       
                        </div>

                    )

            }
              
           

            </div>

        </div>
    )
}

export default CartScreen;
