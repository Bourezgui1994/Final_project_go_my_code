import React, { useEffect } from 'react';

import './Shop.css';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../actions/productActions';
import CardProduct from '../../Components/CardProduct';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';


const SearchScreen = (props) => {

    const { name = 'all' } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
      dispatch(listProducts({ name: name !== 'all' ? name :'' }));
    }, [dispatch, name]);

    return (

        <div>
            

        <div >
        {loading ? (<LoadingBox> </LoadingBox>) 
        : error ? (<MessageBox variant="danger">{error}</MessageBox>)
         : (
             <div className="row">
            <div className="col-md-2"> </div>
            <div className="cardProduct col-md-8 mt-5"> 
                {products.length === 0 && (<MessageBox> Cet produit n'existe pas</MessageBox>)}
                
                {products.map((product) => (
                    <CardProduct key={product._id} product={product}/> ))}
        
                
              </div>
              <div className="col-md-2"> </div>

            </div>
        )}
      </div>

        </div>
    
        )
}

export default SearchScreen;
