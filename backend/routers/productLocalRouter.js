import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import DataProduct from '../DataProduct.js';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../utils.js';

const productLocalRouter = express.Router();

//******Api Local product***************/

productLocalRouter.get('/', expressAsyncHandler(async(req, res) =>{

  const Localproducts = await Product.find({});
res.send(Localproducts)
}))


productLocalRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdLocalProducts = await Product.insertMany(DataProduct.products);
    res.send({ createdLocalProducts })
})
);

//******Api Local product details***************/


productLocalRouter.get('/:id', expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );


  // create a route for create product 


  productLocalRouter.post('/',isAuth,isAdmin, expressAsyncHandler(async (req, res) => {
      const product = new Product({
        name: ' huile Menthe',
        category: 'Huile essentiel',
        image: '/Image/terroir12.jpg',
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


    productLocalRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
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

productLocalRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


export default productLocalRouter;

