import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const history = useHistory();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        /*
            .then((result) => {
                const user = result.user;
                console.log("signInWithGoogle", user);
                setUser(user);
                setError('');
               
            }).catch((error) => {
                const errorMessage = error.message;
                console.log("signInWithGoogle", errorMessage);
                setError(errorMessage);
            });
            */
            
            
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setError('');
            console.log("logOut");
        }).catch((error) => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("onAuthStateChanged", user);
                const uid = user.uid;
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return unsubscribe;
    }, [])

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;