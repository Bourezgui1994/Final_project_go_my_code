import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import DataProduct from '../DataProduct.js';
import AccessoryProduct from '../models/productAccessoryModel.js';

const productAccessoryRouter = express.Router();

//******Api accessory  product***************/
productAccessoryRouter.get('/', expressAsyncHandler(async(req, res) =>{
    const Accessory = await AccessoryProduct.find({});
    res.send(Accessory)
    }))

productAccessoryRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdAccessoryProducts = await AccessoryProduct.insertMany(DataProduct.Accessory);
    res.send({createdAccessoryProducts});
})
);

//******Api Accessory product details***************/


productAccessoryRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await AccessoryProduct.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productAccessoryRouter;

