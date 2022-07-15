import logo from './logo.svg';
import './App.css';
import { getAuth,signOut, signInWithPopup,GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import initialize from './firebase/itnitial';
import { useState } from 'react';
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
initialize();
function App() {
  const[user,setUser] = useState({});
  // google sign in
  const handleSign = ()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) =>{
       const {displayName,email,photoURL} = result.user;
       console.log(result.user);
       const loggedInUser ={
        name: displayName,
        email: email,
        photo: photoURL
       };
       setUser(loggedInUser);
    } )
    }
  const githubSign =()=>{
    const auth = getAuth();
    signInWithPopup(auth, gitprovider)
    .then((result) =>{
       const {displayName,email,photoURL} = result.user;
       console.log(result.user);
       const loggedInUser ={
        name: displayName,
        email: email,
        photo: photoURL
       };
       setUser(loggedInUser);
    } )
  }
  // sign out
  const handlesignOut =()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }
  return (
    <div className="App">
      {
        !user.name ? 
        <div>
           <button onClick={handleSign} >sign in with google</button>
          <button onClick={githubSign} >github</button> <br />
        </div> : 
        <button onClick={handlesignOut} >sign out</button>
      }
      <br />
      {/* conditional rendering */}
      {
        user.name && <div>
          <h3>welcome {user.name}</h3>
          <p>your email: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}
export default App;