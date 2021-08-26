import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../../actions/productActions';
import IconSeperator from '../../Components/IconSeperator';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';

const ProductEditScreen = (props) => {
    const productId = props.match.params.id;
   
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [poids, setPoids] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    // get producte update from redux store 

    const productUpdate = useSelector((state) => state.productUpdate);
    const {loading: loadingUpdate,error: errorUpdate,success: successUpdate} = productUpdate;

    const dispatch = useDispatch();

    useEffect(() => {

        if (successUpdate) {
          props.history.push('/productlist');
        }

        if (!product || product._id !== productId || successUpdate) {
          dispatch({ type: PRODUCT_UPDATE_RESET });
          dispatch(detailsProduct(productId));
        } else {
          setName(product.name);
          setPrice(product.price);
          setImage(product.image);
          setCategory(product.category);
          setCountInStock(product.countInStock);
          setDescription(product.description);
          setPoids(product.poids);

        }
      }, [product, dispatch, productId,successUpdate, props.history]);

      const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update product

        dispatch(updateProduct({_id: productId,name,price,image,category,countInStock,description,poids})
        );
      };

      //***********************upload image**************************// 

      const [loadingUpload, setLoadingUpload] = useState(false);
      const [errorUpload, setErrorUpload] = useState('');

      const userSignin = useSelector((state) => state.userSignin);
      const { userInfo } = userSignin;



      const uploadFileHandler = async (e) => {

        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);

        setLoadingUpload(true);
        try {const { data } = await Axios.post('/api/uploads', bodyFormData, {headers: {'Content-Type': 'multipart/form-data',Authorization: `Bearer ${userInfo.token}`}});
         
        setImage(data);
          setLoadingUpload(false);
        } catch (error) {
          setErrorUpload(error.message);
          setLoadingUpload(false);
        }
      };
    

    return (

        <div>
            <div class="col-md-12  col-xs-12 text-center">  
            <h1> Modifier <span> Produit</span></h1>
            <IconSeperator/>
            </div>


            <div className="row">
            <p className="text-center mt-5"> <strong> Modifier le produit sous id: {productId} </strong> </p>
            <div className="col-md-4"></div>
            
            
            <form onSubmit={submitHandler} className="formSignin col-md-6 mt-5" >

            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>} 

            {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (

               <div>
                <div className="mb-3">
                <label for="name" className="form-label text-center"> Nom </label>
                <input type="text" className="form-control " id="name"  placeholder="Entrer nom du produit" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                <label for="price" className="form-label text-center"> Prix </label>
                <input type="text" className="form-control " id="price"   placeholder="Entrev prix" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                <label for="image" className="form-label text-center"> Image </label>
                <input type="text" className="form-control " id="image"   placeholder="Télécharger image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div className="mb-3">
                <label for="imageFile" className="form-label text-center"> Image File</label>
                <input type="file"  label="choose Image"  className="form-control" id="imageFile"  onChange={uploadFileHandler} />
                
                {loadingUpload && <LoadingBox></LoadingBox>}
                {errorUpload && (<MessageBox variant="danger">{errorUpload}</MessageBox> )}
                </div>

                <div className="mb-3">
                <label for="category" className="form-label text-center"> Catégorie </label>
                <input type="text" className="form-control " id="category"   placeholder=" Entrer catégorie " value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>

                <div className="mb-3">
                <label for="countInStock" className="form-label text-center"> countInStock</label>
                <input type="text" className="form-control " id="countInStock"   placeholder=" Entrer countInStock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
                </div>

                <div className="mb-3">
                <label for="poids" className="form-label text-center"> Poids </label>
                <input type="text" className="form-control " id="poids"   placeholder=" Entrer poids" value={poids} onChange={(e) => setPoids(e.target.value)} />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Entrer description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <button type="submit" className="btn btn-warning mt-4" > Modifier</button>
               
                </div>
               
                )}
                
             
            </form>
            <div className="col-md-2"></div>
        </div>


        </div>
    )
}

export default ProductEditScreen;

