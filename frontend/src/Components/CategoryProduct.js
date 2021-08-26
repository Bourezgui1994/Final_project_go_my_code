import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';

const CategoryProduct = () => {
    return (
      

        <div className="card-group ">
        
        <div className="card mb-3" style={{maxWidth: '23rem'}}>
          <div className="row g-0">
            <div className="col-md-7">
            <img src="https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" className="img-fluid rounded-start imageCategoryProduct" alt="..." />

            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title mt-3">Produits Artisanaux </h5>
                <p className="card-text">Prix raisonnable</p>
                <p className="card-text"><small className="text-muted">A partir de 25 dt </small></p>
                <FaShoppingBasket size='1.7rem' className="mx-4"/>
                </div>
            </div>
          </div>
        </div>
    
        <div className="card mb-3" style={{maxWidth: '23rem'}}>
          <div className="row g-0">
            <div className="col-md-7">
              <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" className="img-fluid rounded-start imageCategoryProduct" alt="..." />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title mt-3">Produits Terroirs </h5>
                <p className="card-text">Prix raisonnable</p>
                <p className="card-text"><small className="text-muted">A partir de 25 dt </small></p>
                <FaShoppingBasket size='1.7rem' className="mx-5"/>
                </div>
            </div>
          </div>
        </div>


        <div className="card mb-3" style={{maxWidth: '23rem'}}>
          <div className="row g-0">
            <div className="col-md-7">

              <img src="https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" className="img-fluid rounded-start imageCategoryProduct" alt="..." />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title mt-3">Accessoires</h5>
                <p className="card-text">Prix raisonnable</p>
                <p className="card-text"><small className="text-muted">A partir de 25 dt </small></p>
                <FaShoppingBasket size='1.7rem' className="mx-5 mt-4"/>
                </div>
            </div>
          </div>
        </div>

      


        

        </div>


        
    )
}

export default CategoryProduct;
