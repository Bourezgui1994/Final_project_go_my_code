import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, listUsers } from '../../actions/userActions';

import IconSeperator from '../../Components/IconSeperator';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import { USER_DETAILS_RESET } from '../../constants/userConstants';

const UserListScreen = (props) => {
    
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    // define user delete success
    const userDelete = useSelector((state) => state.userDelete);
    const {loading: loadingDelete,error: errorDelete,success: successDelete} = userDelete;
    
    const dispatch = useDispatch();

    // implement loading error and users from redux store
    useEffect(() => {
        dispatch(listUsers());
        dispatch({ type: USER_DETAILS_RESET});

      }, [dispatch,successDelete]);

    // implement delete action  
    const deleteHandler = (user) => {
        if (window.confirm('Voulez vous supprimer cet utilisateur?')) {
          dispatch(deleteUser(user._id));
        }
      };

    return (
        <div>
            <div class="col-md-12  col-xs-12 text-center mb-5">  
            <h1> Liste <span> Utilisateurs</span></h1>
            <IconSeperator/>
            </div>

            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {successDelete && (<MessageBox variant="success"> L'utilisateur a été bien supprimer </MessageBox>)}
            
            {loading ? (<LoadingBox></LoadingBox>) 
                     : error ? (<MessageBox variant="danger">{error}</MessageBox>) 
                     : (
                      
                        <table className="table table-striped table-hover mt-5 ">

                        <thead style={{fontSize:'20px' }}>
                            <tr class="table-dark">
                            <th scope="col"> ID </th>
                            <th scope="col"> NOM </th>
                            <th scope="col"> EMAIL  </th>
                            <th scope="col"> ADMIN O NN </th>
                            <th scope="col"> </th>
                            <th scope="col">  </th>
                            </tr>
                        </thead>
        
                        <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                              <td>{user._id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td> 
                              <td>{user.isAdmin?'YES':'NO'}</td>
                              <td>
                                <button type="button" className="btn-sm btn-warning mx-3" onClick={()=> props.history.push(`/user/${user._id}/edit`)} >
                                 <strong>Modifier </strong> 
                                </button>
        
                                <button type="button" className="btn-sm btn-warning" onClick={() => deleteHandler(user)} >
                                 <strong>  Effacer</strong>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
        
                    </table>
        

                     )}
        </div>
    )
}

export default UserListScreen;
