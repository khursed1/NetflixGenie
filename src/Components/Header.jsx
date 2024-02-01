import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import logo from '../assets/logo.png'
import profile from '../assets/profile.jpg'
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
           
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        const auth = getAuth();
        const unsuscribe =onAuthStateChanged(auth, (user) => {
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
        return ()=>unsuscribe();
    }, [])
    return (
        <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={logo}className="w-44" />
            {user && <div>
                <img src={profile} className=" w-8 h-8" />
                <button className=" font-bold text-white" onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>

    )
}

export default Header