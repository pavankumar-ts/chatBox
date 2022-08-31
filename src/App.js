import React,{ useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { userContext } from './UserContext'
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  const [user, setUser] = useState(false)
  const [userData, setUserData] = useState([])
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true)
      setUserData(user)
    } else {
      setUser(false)
    }
  });
  return (
    <userContext.Provider value={{userData,setUserData}}>
      {user ? <HeroSection /> : <Login /> }
    </userContext.Provider>
  );
}

export default App;
