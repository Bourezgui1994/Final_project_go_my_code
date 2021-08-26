import mongoose from 'mongoose';

const productArtisanSchema = new mongoose.Schema(
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
const ArtisanProduct = mongoose.model('ArtisanProduct', productArtisanSchema);

export default ArtisanProduct;