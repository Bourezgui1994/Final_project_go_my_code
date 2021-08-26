import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import DataProduct from '../DataProduct.js';
import User from '../models/userModel.js';
import { generateToken ,isAuth, isAdmin} from '../utils.js';

const userRouter = express.Router();

//create user router 

userRouter.get('/seed', expressAsyncHandler(async(req,res) =>{
  const createdUsers = await User.insertMany(DataProduct.users);
  res.send({ createdUsers });
})
);

// create signin router 

userRouter.post('/signin' , expressAsyncHandler(async (req,res) => {
 const user = await User.findOne({email: req.body.email});
 if(user) {
   if(bcrypt.compareSync(req.body.password, user.password)){
     res.send({

      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user)
     });
     return;
   }
 }
  res.status(401).send({ message: 'Invalid email or password'});
})
);

// create new router for register 

userRouter.post('/register',expressAsyncHandler(async (req, res) => {
    const user = new User({name: req.body.name,email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);


// create a route for users details 

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);


//  Create route update profile 

userRouter.put('/profile', isAuth ,expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

// create route list users 

userRouter.get( '/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);


// create route delete user

userRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);


// Create route for update user 


userRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {

      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = req.body.isAdmin || user.isAdmin;

      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

export default userRouter;


