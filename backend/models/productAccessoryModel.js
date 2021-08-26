import mongoose from 'mongoose';

const productAccessorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    poids:{type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const AccessoryProduct = mongoose.model('AccessoryProduct', productAccessorySchema);

export default AccessoryProduct;