import React from 'react'
import { NewProductData } from '../Data/NewProductData';
import CardProduct from './CardProduct';

const NewProduct = () => {
    return (
        <div >
           <div className="row ">
               <div className="col-md-1"></div>
               
                <div className="col-md-5  carouselNewProduct">
                <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                    <div className="card cardNewProduct" style={{width:'30rem', height:'40rem'}} >

                                    <img src="https://femmesdetunisie.com/wp-content/uploads/2016/02/Nx-bij-tun.jpg" className="card-img-top" alt="..." height="330"/>                    
                                              <div className="card-body text-center">
                                                  <h3 className="card-title mt-4 "> Colier à la mode  </h3>
                                                  <h5 className="card-title "> Prix 80 DT </h5>
                                              </div>
                                          </div>
                                     </div>
              
              
                                      <div class="carousel-item" >
              
                                         <div className="card cardNewProduct"  style={{width:'30rem', height:'40rem'}}  >
                                         <img src="https://i.pinimg.com/originals/04/38/3f/04383f7b5135573973369c84ef49303e.jpg" className="card-img-top" alt="..." height="340" />
                                                  <div className="card-body">
                                                  <h3 className="card-title mt-4 text-center"> Margoum tunisien à la mode  </h3>
                                                  <h5 className="card-title text-center"> Prix 80 DT </h5>
                                                  </div>
                                              </div>
                                      </div>
              
              
                                      <div class="carousel-item" >
                                         <div className="card cardNewProduct"  style={{width:'30rem', height:'40rem'}}>
                                              <img src="https://images.unsplash.com/photo-1555885425-f605efd01224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80" className="card-img-top" alt="..." height="330" />
                                              <div className="card-body">
                                              <h3 className="card-title mt-4 text-center"> Couffin à la mode <br/>piéce unique  </h3>
                                              <h5 className="card-title text-center"> Prix 45 DT </h5>
                                              </div>
                                      </div>
                   
                        </div>
                    </div>
              
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
              
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon "  aria-hidden="true"></span>
                  <span class="visually-hidden ">Next</span>
                </button>
                
              </div>
                
               </div>
     

               <div class="col-md-6 cardProduct mt-5" >
               {NewProductData.products.map((product) => (
                <CardProduct key={product._id} product={product} />  ))}
               
               </div>


             </div>
        </div>

    )
};

export default NewProduct;
