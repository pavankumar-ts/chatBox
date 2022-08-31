import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Logout, Button } from './LogoutElements'

const LogOut = () => {
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Logout>
            <Button onClick={handleLogout}>LogOut</Button>
        </Logout>
    )
}

export default LogOut
