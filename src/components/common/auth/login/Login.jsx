// 'use client'
// import React, { useState } from "react";
// import '@styles/common/auth/login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';
// import { UserAuth } from "@context/AuthContext";

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [generalError, setGeneralError] = useState('');

//     const { googleSignIn, signInWithEmail } = UserAuth();
//     const router = useRouter();

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleEmailChange = (e) => {
//         const { value } = e.target;
//         setEmail(value);
//         if (!validateEmail(value)) {
//             setEmailError('Invalid email address');
//         } else {
//             setEmailError('');
//         }
//     };

//     const handlePasswordChange = (e) => {
//         const { value } = e.target;
//         setPassword(value);
//         if (!value) {
//             setPasswordError('Password is required');
//         } else {
//             setPasswordError('');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setGeneralError('');

//         try {
//             if (!email || !validateEmail(email)) {
//                 setEmailError('Invalid email address');
//                 return;
//             }

//             if (!password) {
//                 setPasswordError('Password is required');
//                 return;
//             }

//             await signInWithEmail(email, password);
//             router.push('/');
//         } catch (error) {
//             if (error.code === 'auth/user-not-found') {
//                 setEmailError('The email you entered is not registered.');
//             } else if (error.code === 'auth/wrong-password') {
//                 setPasswordError('Invalid password.');
//             } else {
//                 setGeneralError("An error occurred. Please try again.");
//             }
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             await googleSignIn();
//             router.push('/');
//         } catch (error) {
//             setGeneralError(error.message);
//         }
//     };

//     return (
//         <div className="login">
//             <div className="login-container">
//                 <div className="login-heading">
//                     <h1>Login with trafy.</h1>
//                     {generalError && <div className="error-message" style={{ paddingTop: "6px" }}>{generalError}</div>}
//                 </div>
//                 <form className="form" onSubmit={handleSubmit}>
//                     <Box component="form" noValidate autoComplete="off" className="email">
//                         <TextField
//                             id="outlined-email"
//                             label="Email"
//                             variant="outlined"
//                             className="custom-text-field"
//                             error={!!emailError}
//                             helperText={emailError}
//                             value={email}
//                             onChange={handleEmailChange}
//                             InputLabelProps={{
//                                 shrink: true, // Ensure label stays above input when filled
//                             }}
//                         />
//                     </Box>

//                     <Box component="form" noValidate autoComplete="off" className="password">
//                         <TextField
//                             id="outlined-password"
//                             label="Password"
//                             variant="outlined"
//                             type={showPassword ? "text" : "password"}
//                             className="custom-text-field"
//                             error={!!passwordError}
//                             helperText={passwordError}
//                             value={password}
//                             onChange={handlePasswordChange}
//                             InputProps={{
//                                 endAdornment: (
//                                     <span className="eye" onClick={togglePasswordVisibility}>
//                                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                                     </span>
//                                 ),
//                             }}
//                             InputLabelProps={{
//                                 shrink: true, // Ensure label stays above input when filled
//                             }}
//                         />
//                         <div className="forgot-password" style={{ width: "100%", display: "flex", justifyContent: "end", fontSize: "12px", fontFamily: "Inter", paddingTop: "6px" }}>
//                             <Link href="/forgot-password">Forgot Password?</Link>
//                         </div>
//                     </Box>

//                     <div className="login-button">
//                         <button className="login-btn" type="submit">Login</button>
//                     </div>

//                     <div className="google-signin">
//                         <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
//                         <p style={{ fontFamily: "Inter", fontSize: "13px", paddingTop: "16px", textAlign: "center" }}>Don't have an account? <Link href="/signup">Sign up</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;


'use client';
import React, { useState } from "react";
import '@styles/common/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { UserAuth } from "@context/AuthContext";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        setEmail(e.target.value);
        setEmailError(''); // Clear email error on change
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(''); // Clear password error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGeneralError('');
        let valid = true;

        if (!email || !validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (!valid) {
            return;
        }

        try {
            await signInWithEmail(email, password);
            router.push('/');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setEmailError('The email you entered is not registered.');
            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Invalid password.');
            } else {
                setGeneralError("An error occurred. Please try again.");
            }
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
                <div className="login-heading">
                    <h1>Login</h1>
                    {generalError && <div className="error-message" style={{ paddingTop: "6px" }}>{generalError}</div>}
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <Box component="div" noValidate autoComplete="off" className="email">
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            className="custom-text-field"
                            error={!!emailError}
                            helperText={emailError}
                            value={email}
                            onChange={handleEmailChange}
                            // InputLabelProps={{
                            //     shrink: true, // Ensure label stays above input when filled
                            // }}
                        />

                    </Box>

                    <Box component="div" noValidate autoComplete="off" className="password">
                        <TextField
                            id="outlined-password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            className="custom-text-field"
                            error={!!passwordError}
                            helperText={passwordError}
                            value={password}
                            onChange={handlePasswordChange}
                            InputProps={{
                                endAdornment: (
                                    <span className="eye" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                ),
                            }}
                            // InputLabelProps={{
                            //     shrink: true, // Ensure label stays above input when filled
                            // }}
                        />
                        <div className="forgot-password" style={{ width: "100%", display: "flex", justifyContent: "end", fontSize: "12px", fontFamily: "Inter", paddingTop: "6px" }}>
                            <Link href="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Box>

                    <div className="login-button">
                        <button className="login-btn" type="submit">Login</button>
                    </div>

                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
                        <p style={{ fontFamily: "Inter", fontSize: "13px", paddingTop: "16px", textAlign: "center" }}>Dont have an account? <Link href="/signup">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
