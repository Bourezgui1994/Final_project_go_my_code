import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUser } from '../../actions/userActions'
import IconSeperator from '../../Components/IconSeperator'
import LoadingBox from '../../Components/LoadingBox'
import MessageBox from '../../Components/MessageBox'
import { USER_UPDATE_RESET } from '../../constants/userConstants'

const UserEditScreen = (props) => {
   
    const userId = props.match.params.id;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
  

    const userUpdate = useSelector((state) => state.userUpdate);
    const {loading:loadingUpdate, error: errorUpdate, success: successUpdate} = userUpdate;
    
    const dispatch = useDispatch();

    useEffect(() =>{
      if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET });
        props.history.push('/userList');
      }

        if (!user) {
            dispatch(detailsUser(userId));
          } else {
            setName(user.name);
            setEmail(user.email);
            setIsAdmin(user.isAdmin);
          } 
    },[dispatch,props.history,successUpdate, user,userId])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ _id: userId, name, email, isAdmin }));
        
      };

    return (
        <div>
            <div class="col-md-12  col-xs-12 text-center mb-5">  
            <h1> Modifier <span> Utilisateur </span></h1>
            <IconSeperator/>
            </div>

            <div className="row">

            <div> 
              <h5 className="text-center"> Modifier utilisateur {name}</h5>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
            </div>

            <div className="col-md-4"></div>

            {loading ? (<LoadingBox> </LoadingBox>) 
             : error ? ( <MessageBox variant="danger">{error}</MessageBox> ) 
             : (

            <form onSubmit={submitHandler} className="formSignin col-md-6 mt-5" >


                <div className="mb-3">
                <label for="name" className="form-label text-center"> Nom </label>
                <input type="text" className="form-control " id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label text-center"> Email </label>
                    <input type="text" className="form-control " id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}/>
                    <label className="form-check-label" for="exampleCheck1"> Admin</label>
                </div>

                 <button type="submit" className="btn btn-warning mt-4" > Modifier</button>
                
            
            </form>
              )}
            <div className="col-md-2"></div>

            </div>
        </div>
    )
}

export default UserEditScreen

