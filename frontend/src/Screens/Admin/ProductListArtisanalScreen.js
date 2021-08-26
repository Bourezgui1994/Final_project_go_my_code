import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createdLocalProducts, deleteProduct, listProducts } from '../../actions/artisanalActions';
import IconSeperator from '../../Components/IconSeperator';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../../constants/productConstants';

const ProductListArtisanalScreen = (props) => {
    
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;


    // get data from product create in redux store 

    const productCreate = useSelector((state) => state.productCreate);
    const {loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct} = productCreate;
    

    const productDelete = useSelector((state) => state.productDelete);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
      if (successCreate) {
        dispatch({ type: PRODUCT_CREATE_RESET });
        props.history.push(`/ArtisanalProductDetailsScreen/${createdProduct._id}/edit`);
      }

      if (successDelete) {
        dispatch({ type: PRODUCT_DELETE_RESET });
      }

      dispatch(listProducts());
    }, [createdProduct, dispatch, props.history, successCreate,successDelete]);
     
    // dispatch action delete 

  
     const deleteHandler = (product) => {
      if (window.confirm('Voulez vous supprimer ce produit ?')) {
      dispatch(deleteProduct(product._id));
      }};

    // dispatch action create product
      const createHandler = () => {
        dispatch(createdLocalProducts());
      };
    return (
        <div>
            
            <div class="col-md-12  col-xs-12 text-center mb-5">  
            <h1> Liste produit <span> Terroir </span></h1>
            <IconSeperator/>
            </div>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

            {loadingCreate && <LoadingBox> </LoadingBox> }
            {errorCreate && <MessageBox variant="danger"> {errorCreate} </MessageBox>}
            {loading ? (<LoadingBox> </LoadingBox>) 
             :
             error ? (<MessageBox variant="danger"> {error}</MessageBox>) 
             : (

             <table className="table table-striped table-hover mt-5 ">

                <thead style={{fontSize:'20px' }}>
                    <tr class="table-dark">
                    <th scope="col"> ID </th>
                    <th scope="col"> Nom </th>
                    <th scope="col"> Prix  </th>
                    <th scope="col"> Catégorie </th>
                    <th scope="col"> </th>
                    <th scope="col">  </th>
                    </tr>
                </thead>

                <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td> 
                      <td>{product.category}</td>
                      <td>{product.brand}</td>
                      <td>
                        <button type="button" className="btn-sm btn-warning mx-3" onClick={() => props.history.push(`/ArtisanalProductDetailsScreen/${product._id}/edit`)}>
                         <strong>Modifier </strong> 
                        </button>

                        <button type="button" className="btn-sm btn-warning" onClick={() => deleteHandler(product)} >
                         <strong>  Effacer</strong>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

            </table>

              )}
              <div class="col-md-12  col-xs-12 text-center mt-5 mb-5"> 
            <button type="button" onClick={createHandler} className="btn-lg btn-warning mt-5 mb-5"> <strong>  Créer un autre produit </strong> </button>
              </div>
        </div>
    )
}

export default ProductListArtisanalScreen;
