'use client';
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '@firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        setUser(userCredential.user);
        return userCredential.user;
    };

    const logOut = async () => {
        await signOut(auth);
        setUser(null);
    };

    const signUpWithEmail = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const signInWithEmail = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, googleSignIn, logOut, signUpWithEmail, signInWithEmail, resetPassword, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};


// useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });
//     return () => unSubscribe();
// }, []);