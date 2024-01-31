import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const user=useSelector(store=>store.user)
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-44" />
            {user&&<div>
                <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" className=" w-8 h-8" />
                <button className=" font-bold text-white" onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>

    )
}

export default Header