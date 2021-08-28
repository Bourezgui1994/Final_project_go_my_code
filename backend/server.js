import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productAccessoryRouter from './routers/productAccessoryRouter.js';
import productArtisanalRouter from './routers/productArtisanalRouter.js';
import productLocalRouter from './routers/productLocalRouter.js';
import userRouter from './routers/userRouter.js';
import uploadRouter from './routers/uploadRouter.js';

// import dotenv
dotenv.config();

// create an instance fom express
const app = express();
//middeleware parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// connect db
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/artisan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
});


//****************************Route uploads****************************//

app.use('/api/uploads', uploadRouter);
//****************************Route users****************************//
app.use('/api/users', userRouter);

//****************************Route local product****************************//
app.use('/api/dataProduct', productLocalRouter)


//****************************Route Artisanal product****************************//
app.use('/api/artisanalProduct', productArtisanalRouter)

//****************************Route Accessory product****************************//
app.use('/api/accessoryProduct', productAccessoryRouter)





// show image uploaded
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

//app.get('/', (req,res) => {
//    res.send('server is ready');
//});

const port = process.env.PORT || 5000;

// middeleware error catcher
app.use((err, req, res, next) =>{
   res.status(500).send({ message: err.message });
})


app.listen(port, ()=>{
    console.log(`server is runing at http://localhost:${port}`);
}); 