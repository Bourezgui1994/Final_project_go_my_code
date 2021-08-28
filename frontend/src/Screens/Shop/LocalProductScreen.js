import React, { useEffect }  from 'react';

import './Shop.css';

// import card product
import CardProduct from '../../Components/CardProduct';
import IconSeperator from '../../Components/IconSeperator';  
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import {useDispatch,useSelector} from 'react-redux';
import {listProducts} from '../../actions/productActions';
import SearchBox from '../../Components/SearchBox';
import { Route } from 'react-router';
import FilterProduct from '../../Components/FilterProduct';



const LocalProductScreen = () => {
 
 const dispatch = useDispatch();

 const productList = useSelector( (state) => state.productList)
 const {loading, error, products} = productList;


 // dispatch an action to fetch a list local product from store 
    useEffect(() => {
       dispatch(listProducts());
        }, []);
 
    return (

   <div> 

        {loading ? <LoadingBox> </LoadingBox>
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
        :

        <div className="shop"> 
        <div className="container-fluid background"> 
        </div>
        
        <h1 className="intro text-center "> Nos produits terrois </h1>
        <div class="col-md-12  col-xs-12 text-center">  
        <h1> Produit <span> Terroirs</span></h1>
        <IconSeperator/>
        </div>
        
        <div className="row">
        <div className="col-md-3">
        <FilterProduct/>
        <Route render={({history}) => (<SearchBox history={history}> </SearchBox>)}> </Route>
          
        </div>

        <div className="cardProduct col-md-9 mt-5 "> 
        
        {products.map((product) => (
            <CardProduct key={product._id} product={product}/> ))}

        </div>


        </div>
        </div>}

    </div>
    )
};

export default LocalProductScreen;
