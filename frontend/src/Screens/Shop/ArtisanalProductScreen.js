import React, { useEffect }  from 'react';

import './Shop.css';

// import card product
import CardArtisanalProduct from '../../Components/CardArtisanalProduct';
import IconSeperator from '../../Components/IconSeperator';  
import FilterProduct from '../../Components/FilterProduct';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import {useDispatch,useSelector} from 'react-redux';
import {listProducts} from '../../actions/artisanalActions';
import { Route } from 'react-router';
import SearchBox from '../../Components/SearchBox';



const ArtisanalProductScreen = () => {
 
 const dispatch = useDispatch();
 const productList = useSelector( (state) => state.productList)
 const {loading, error, products} = productList;

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
        <div className="container-fluid backgroundArtisanal"> 
        </div>
        
        <h1 className="intro text-center "> Nos produits Artisanaux</h1>
        <div class="col-md-12  col-xs-12 text-center">  
        <h1> Produit <span> Artisanale</span></h1>
        <IconSeperator/>
        </div>
        
        <div className="row">
        <div className="col-md-4 mt-5 ">
            <FilterProduct/> <br></br>
            <Route render={({history}) => (<SearchBox history={history}> </SearchBox>)}> </Route>

        </div>

        <div className="cardProduct col-md-8 mt-5 "> 
        
        {products.map((product) => (
            <CardArtisanalProduct key={product._id} product={product}/> ))}

        </div>


        </div>
        </div>}

    </div>
    )
};

export default ArtisanalProductScreen;
