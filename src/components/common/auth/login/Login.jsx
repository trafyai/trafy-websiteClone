// 'use client'
// import React, { useState } from "react";
// import '@styles/common/auth/login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';

// // Define the Login component
// const Login = () => {
//     // Define state variables
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//     const [emailError, setEmailError] = useState('');
    
//     // Get the router instance
//     const router = useRouter();

//     // Define the handleSubmit function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (validateForm()) {
//                 // Sign in with email and password
//                 const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
//                 // If user successfully logged in
//                 if (userCredential) {
//                     // Redirect to home page
                 
//                     router.push('/');
//                 }
//             }
//         } catch (error) {
//             alert(error.message);
//         }
//     }

//     // Function to validate email
//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     // Function to handle email blur event
//     const handleEmailBlur = () => {
//         if (!validateEmail(email)) {
//             setEmailError('Invalid email address');
//         } else {
//             setEmailError('');
//         }
//     }

//     // Function to validate form
//     const validateForm = () => {
//         let isValid = true;

//         // Email validation
//         if (!email || !validateEmail(email)) {
//             setEmailError('Invalid email address');
//             isValid = false;
//         } else {
//             setEmailError('');
//         }

//         return isValid;
//     }
//     const handleGoogleSignIn = async () => {
//         try {
//             const provider = new firebase.auth.GoogleAuthProvider();
//             const userCredential = await firebase.auth().signInWithPopup(provider);
//             // If userCredential is available
//             if (userCredential) {
//                 // Extract relevant user information
//                 // const { email, displayName, photoURL } = userCredential.user;
               
//                 // dispatch(loginUser({ email, displayName, photoURL }));
//                 router.push('/');
//             } else {
//                 // Handle the case when userCredential is not available
//                 alert("User credential not available");
//             }
//         } catch (err) {
//             alert(err.message);
//         }
//     }
//     // Function  toggle password visibility
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     }

//     // Return the JSX for the Login component
//     return (
//         <div className="login">
//             <div className="login-container">
//                 <div className="login-heading"><h1>Login to Your Account</h1></div>
//                 <form className="form" onSubmit={handleSubmit}>
//                     <div className="Email">
//                         <input type="email" placeholder="Enter email" required autoComplete="off" name="email" className={`email-holder ${emailError ? 'error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur}/>
//                         {emailError && <div className="error-message">{emailError}</div>}
//                     </div>
//                     <div className="Password">
//                         <div className="password-input">
//                             <div><input type={showPassword ? "text" : "password"} placeholder="Enter password" required autoComplete="off" name="password" className="password-holder" value={password} onChange={(e) => setPassword(e.target.value)} />
//                             <span className="password-toggle" onClick={togglePasswordVisibility}>
//                                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                             </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="login-button">
//                         <button className="signup-btn" type="submit">Login</button>
//                     </div>
//                     <div className="divider"></div>
//                     <div className="google-signin">
//                         <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
//                     </div>
//                     <p>Don&apos;t have an account? <Link href="/signup"> Signup</Link></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// // Export the Login component
// export default Login;


// 'use client'
// import React, { useState, useContext } from "react";
// import '@styles/common/auth/login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';
// import { UserAuth } from "@context/AuthContext";


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState('');


//     const {googleSignIn, logOut ,signInWithEmail } = UserAuth();

    
//     const router = useRouter();
//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
      
//         try {
//             if (validateForm()) {
//                 // If the form is valid, attempt to sign in with email and password
//                 await signInWithEmail(email, password);
              
//                 // If successful, navigate to the home page
//                 router.push('/');
//             }
//         } catch (error) {
           
//             console.log(error);
//         }
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             await googleSignIn();
//             router.push('/');
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleEmailBlur = () => {
//         if (!validateEmail(email)) {
//             setEmailError('Invalid email address');
//         } else {
//             setEmailError('');
//         }
//     };

//     const validateForm = () => {
//         let isValid = true;
//         if (!email || !validateEmail(email)) {
//             setEmailError('Invalid email address');
//             isValid = false;
//         } else {
//             setEmailError('');
//         }
//         return isValid;
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     }


//     return (
//         <div className="login">
//             <div className="login-container">
//                 <div className="login-heading"><h1>Login to Your Account</h1></div>
//                 <form className="form" onSubmit={handleSubmit}>
//                     <div className="Email">
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             required
//                             autoComplete="off"
//                             name="email"
//                             className={`email-holder ${emailError ? 'error' : ''}`}
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             onBlur={handleEmailBlur}
//                         />
//                         {emailError && <div className="error-message">{emailError}</div>}
//                     </div>
//                     <div className="Password">
//                         <div className="password-input">
//                             <div>
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="Enter password"
//                                     required
//                                     autoComplete="off"
//                                     name="password"
//                                     className="password-holder"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                                 <span className="password-toggle" onClick={togglePasswordVisibility}>
//                                     <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="login-button">
//                         <button className="signup-btn" type="submit">Login</button>
//                     </div>
//                     <div className="divider"></div>
//                     <div className="google-signin">
//                         <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
//                     </div>
//                     <p>Don&apos;t have an account? <Link href="/signup">Signup</Link></p>
//                 </form>
//             </div>
           
//         </div>
//     );
// }

// export default Login;
'use client'
import React, { useState } from "react";
import '@styles/common/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { UserAuth } from "@context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const { googleSignIn, signInWithEmail } = UserAuth();
    const router = useRouter();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        // Check for email validation
        if (!validateEmail(value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        // Check for password validation
        if (!value) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset general error
        setGeneralError('');

        try {
            if (!email || !validateEmail(email)) {
                setEmailError('Invalid email address');
                return;
            }

            if (!password) {
                setPasswordError('Password is required');
                return;
            }

            await signInWithEmail(email, password);
            router.push('/');
        } catch (error) {
            console.log(error);
            setGeneralError("Incorrect email or password");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            router.push('/');
        } catch (error) {
            setGeneralError(error.message);
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-heading"><h1>Login to Your Account</h1></div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="Email">
                        <input
                            type="email"
                            placeholder="Enter email"
                            required
                            autoComplete="off"
                            name="email"
                            className={`email-holder ${emailError ? 'error' : ''}`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    required
                                    autoComplete="off"
                                    name="password"
                                    className={`password-holder ${passwordError ? 'error' : ''}`}
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            {passwordError && <div className="error-message">{passwordError}</div>
                            }
                             {generalError && <div className="error-message">{generalError}</div>}
                        </div>
                    </div>
                   
                    <div className="login-button">
                        <button className="signup-btn" type="submit">Login</button>
                    </div>
                    <div className="divider"></div>
                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
                    </div>
                    <p>Don't have an account? <Link href="/signup">Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
