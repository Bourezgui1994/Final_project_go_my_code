import React, { useEffect }  from 'react';

import './Shop.css';

// import card product
import CardAccessoryProduct from '../../Components/CardAccessoryProduct';
import IconSeperator from '../../Components/IconSeperator';  
import FilterProduct from '../../Components/FilterProduct';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import {useDispatch,useSelector} from 'react-redux';
import {listProducts} from '../../actions/accessoryActions';



const AccessoryProductScreen = () => {
 
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
        <div className="container-fluid backgroundAccessory"> 
        </div>
        
        <h1 className="intro text-center "> Accessoires </h1>
        <div class="col-md-12  col-xs-12 text-center">  
        <h1> Access<span>oires</span></h1>
        <IconSeperator/>
        </div>
        
        <div className="row">
        <div className="col-md-3 mt-5 ">
            <FilterProduct/>
        </div>

        <div className="cardProduct col-md-9 mt-5 "> 
        
        {products.map((product) => (
            <CardAccessoryProduct key={product._id} product={product}/> ))}

        </div>


        </div>
        </div>}

    </div>
    )
};

export default AccessoryProductScreen;
