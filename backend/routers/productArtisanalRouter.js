import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import DataProduct from '../DataProduct.js';
import ArtisanProduct from '../models/productArtisanModel.js';
import { isAdmin, isAuth } from '../utils.js';


const productArtisanalRouter = express.Router();

//******Api artisanal product***************/
productArtisanalRouter.get('/', expressAsyncHandler(async(req, res) =>{
    const artisan = await ArtisanProduct.find({});
    res.send(artisan)
    }))


productArtisanalRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdArtisanalProducts = await ArtisanProduct.insertMany(DataProduct.artisanal);
    res.send({ createdArtisanalProducts });
})
);

//******Api artisanal product*****************/


productArtisanalRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await ArtisanProduct.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


// create a route for create product 


productArtisanalRouter.post('/',isAuth,isAdmin, expressAsyncHandler(async (req, res) => {
  const product = new ArtisanProduct({
    name: ' Margoum',
    category: 'Margoum tunisien',
    image: '/Image/img4.jpg',
    price: 16,
    countInStock: 10,
    rating: 4.5,
    numReviews: 7,
    description: 'Produit de très bonne qualité',
    poids:'100 g',
  });

  const createdLocalProducts = await product.save();
  res.send({ message: 'Product Created', product: createdLocalProducts });
})
  
);


productArtisanalRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await ArtisanProduct.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      product.poids = req.body.poids;

      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

// create api delete product 

productArtisanalRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
const product = await ArtisanProduct.findById(req.params.id);
if (product) {
  const deleteProduct = await product.remove();
  res.send({ message: 'Product Deleted', product: deleteProduct });
} else {
  res.status(404).send({ message: 'Product Not Found' });
}
})
);


export default productArtisanalRouter;

