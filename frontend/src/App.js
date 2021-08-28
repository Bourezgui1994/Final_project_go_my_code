
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';

//import Navbar component 
import NavBar from './Layout/NavBar/NavBar';

//import Home page
import HomeScreen from './Screens/Home/HomeScreen';

//import LocalProduct Screen 
import LocalProductScreen from './Screens/Shop/LocalProductScreen';

//import LocalProductDetails Screen 
import LocalProductDetailsScreen from './Screens/Shop/LocalProductDetailsScreen';

//import ArtisanalProduct Screen 
import ArtisanalProductScreen from './Screens/Shop/ArtisanalProductScreen';

import ArtisanalProductDetailsScreen from './Screens/Shop/ArtisanalProductDetailsScreen'

//import Accessory Product Screen 
import AccessoryProductScreen from './Screens/Shop/AccessoryProductScreen';

import AccessoryProductDetailsScreen from './Screens/Shop/AccessoryProductDetailsScreen '


//import CartScreen 
import CartScreen from './Screens/Cart/CartScreen';

import CartArtisanalScreen from './Screens/Cart/CartArtisanalScreen';


//import Footer component 
import Footer from './Layout/Footer/Footer';

// import signin screen
import SigninScreen from './Screens/Signin/SigninScreen';
// import register screen
import RegisterScreen from './Screens/Signin/RegisterScreen';
// import profile screen
import ProfileScreen from './Screens/Profile/ProfileScreen';
// import private route 
import PrivateRoute from './Components/PrivateRoute';
// import shipping Address Screen 
import ShippingAddressScreen from './Screens/Signin/ShippingAddressScreen';
// import place Order Screen 
import PlaceOrderScreen from './Screens/Signin/PlaceOrderScreen';
// import admin route  
import AdminRoute from './Components/AdminRoute';
// import product list Screen 
import ProductListScreen from './Screens/Admin/ProductListScreen';
// import product edit Screen 
import ProductEditScreen from './Screens/Admin/ProductEditScreen';
// import user List Screen 
import UserListScreen from './Screens/Admin/UserListScreen';
import UserEditScreen from './Screens/Admin/UserEditScreen';
import SearchScreen from './Screens/Shop/SearchScreen';
import CartAccessoryScreen from './Screens/Cart/CartAccessoryScreen';
import ProductListArtisanalScreen from './Screens/Admin/ProductListArtisanalScreen';
import ProductEditArtisanalScreen from './Screens/Admin/ProductEditArtisanalScreen';
import DiscussionScreen from './Screens/Admin/DiscussionScreen';





function App() {

  return (
    <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/LocalProductDetailsScreen/:id' component={LocalProductDetailsScreen}/>
          <Route exact path='/LocalProductDetailsScreen/:id/edit' component={ProductEditScreen}/>

          <Route exact path='/LocalProductScreen' component={LocalProductScreen}/>
          <Route  exact path='/ArtisanalProductDetailsScreen/:id' component={ArtisanalProductDetailsScreen}/>
          <Route  exact path='/ArtisanalProductDetailsScreen/:id/edit' component={ProductEditArtisanalScreen}/>

          <Route exact path='/ArtisanalProductScreen' component={ArtisanalProductScreen}/>
          <Route path='/AccessoryProductDetailsScreen/:id' component={AccessoryProductDetailsScreen}/>

          <Route exact path='/AccessoryProductScreen' component={AccessoryProductScreen}/>


          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/cartArtisanal/:id?' component={CartArtisanalScreen}/>
          <Route path='/cartAccessory/:id?' component={CartAccessoryScreen}/>

          <Route path='/signin' component={SigninScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/shipping' component={ShippingAddressScreen}/>
          <Route path='/placeOrder' component={PlaceOrderScreen}/>
          <Route exact path='/search/name/:name?' component={SearchScreen}/>


          <PrivateRoute path='/profile' component={ProfileScreen}/>
          <AdminRoute path="/productlist" component={ProductListScreen}/> 
          <AdminRoute path="/productlistArtisanal" component={ProductListArtisanalScreen}/> 

          <AdminRoute path="/userList" component={UserListScreen}/> 
          <AdminRoute path="/user/:id/edit" component={UserEditScreen}/> 
          <AdminRoute path="/discussion" component={DiscussionScreen}/> 



        </Switch>

        <Footer/>
    </div>
  );
}

export default App;
