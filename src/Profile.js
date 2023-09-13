import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from './toolkit/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    return (
        <div>
            <h1>Profile Page</h1>
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Age: </strong>{user.age}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <botton style={{cursor: "pointer"}} onClick={()=>dispatch(logOutAction())}>Logout</botton>
        </div>
    )
}

export default Profile