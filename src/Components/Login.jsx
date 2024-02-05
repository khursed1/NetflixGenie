import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import '../utils/firebase.jsx'
import background from '../assets/background.jpg'
const Login = () => {
  const [isSingIN, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const togleSignInForm = () => {
    setIsSignIn(!isSingIN);
  };
  const handleButtonClick = () => {
    //validate the username and password
    const message = checkValidData(email.current.value, password.current.value);
    setErrMsg(message);
    if (message) return;
    //Else logic for signin or signup
    if (!isSingIN) {
      //sign up logic
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage)
          // ..
        });
    }
    else {
      //sign in logic
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage)
        });

    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto" src={background} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-[75%] md:w-[32%]
         my-36 p-12 text-white mx-auto right-0 left-0 
         rounded-lg bg-opacity-80">
        <h1 className="text-xl md:text-3xl font-semibold md:py-4">{isSingIN ? "Sign In" : "Sign Up"}</h1>
        {!isSingIN ? <input type="text" placeholder="Enter your Name" className="my-4 p-4 w-full bg-gray-700 rounded-lg" /> : null
        }
        <input ref={email} type="email" placeholder="Enter Email Adress" className="my-4 p-4 w-full bg-gray-700 rounded-lg" />
        <input ref={password} type="password" placeholder="Password" className="my-4 p-4 w-full bg-gray-700 rounded-lg" />
        <p className="text-red-500 font-semibold">{errMsg}</p>
        <button type="submit" className="my-6 p-4 bg-red-700 w-full rounded-lg transition duration-300
        hover:bg-red-800 text-lg" onClick={handleButtonClick}>{isSingIN ? "Login" : "Sign Up"}</button>
        <p className="m-1 hover:cursor-pointer" onClick={togleSignInForm}>{isSingIN ? "New to N? SignUp" : "Already registered?Log In now"}</p>
      </form>
    </div>
  )
}

export default Login