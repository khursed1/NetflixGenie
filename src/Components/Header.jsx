import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import logo from '../assets/logo.png'
import profile from '../assets/profile.jpg'
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const GptTage=useSelector(store=>store.gpt.showGptSearch)
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        const auth = getAuth();
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse')

            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate('/')
            }
        });
        return () => unsuscribe();
    }, [])
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView())
    }
    return (
        <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img src={logo} className="w-44 mx-auto mt-0 md:mx-0" />
            {user && (<div className="flex p-2 justify-between">
                <button className="py-2 px-4 mx-4 my-2 rounded-lg bg-purple-800 text-white font-semibold hover:bg-purple-700"
                onClick={handleGptSearchClick}>{!GptTage?"✨GPT search":"🏡Home"}</button>
               <div>
               <img src={profile} className=" w-8 h-8" />
                <button className=" font-bold text-white" onClick={handleSignOut}>Sign out</button>
               </div>
                
            </div>)}
        </div>

    )
}

export default Header