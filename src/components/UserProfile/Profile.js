import React, { useContext } from 'react'
import { userContext } from '../../UserContext';
import { ProfileWrap, Dp, Name } from './ProfileElement'
import LogOut from '../LogOut/LogOut'

function Profile() {
    const { userData } = useContext(userContext);


    return (
        <ProfileWrap >
            <Dp>
                <img src={userData.photoURL} alt='Dp'></img>
                {console.log("user...,.," + userData.photoURL)}
            </Dp>
            <Name>
                {userData.displayName} 
            </Name>
            <LogOut />
        </ProfileWrap>
    )
}

export default Profile;