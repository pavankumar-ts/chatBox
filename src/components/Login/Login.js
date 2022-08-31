import React, {  } from 'react'
import { LoginWrapper, GoogleSignin , Button} from './LoginElements'
import { getAuth,  GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    const handleGoogleSingin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // The signed-in user info.
                console.log("details",credential);
                const user = result.user;
                // ...
                console.log("users", user);
            }).catch((error) => {
                console.log(error.code)
                console.log(error.message)
                console.log(error.email)
                // ...
            });
    }

    

    return (
        <LoginWrapper>
            <GoogleSignin>
                <Button onClick={handleGoogleSingin} >Google</Button>
            </GoogleSignin>
        </LoginWrapper>
    )
}

export default Login
