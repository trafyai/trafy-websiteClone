// // 

// 'use client';

// import React, { useState } from "react";
// import '@styles/common/auth/Signup.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';
// import zxcvbn from 'zxcvbn';
// import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, set } from 'firebase/database';
// import { auth, database } from '@firebase'; // Adjust this path based on your actual file structure
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [allFieldError, setAllFieldError] = useState('');
//     const [firebaseError, setFirebaseError] = useState('');
//     const [passwordScore, setPasswordScore] = useState(0);

//     const router = useRouter();

//     const validateEmail = (value) => {
//         if (!/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/.test(value)) {
//             setEmailError("Please enter a valid email address.");
//         } else {
//             setEmailError('');
//         }
//     };

//     const validatePassword = (value) => {
//         if (value.length < 8) {
//             setPasswordError("Password should be at least 8 characters long.");
//         } else {
//             setPasswordError('');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setAllFieldError('');
//         setFirebaseError('');

//         if (!email.trim() || !password.trim()) {
//             setAllFieldError("Please fill in all fields.");
//             return;
//         }

//         if (emailError || passwordError) {
//             setAllFieldError("Please correct the errors before submitting.");
//             return;
//         }

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             const userRef = ref(database, 'usersData/' + user.uid);
//             await set(userRef, {
//                 uid: user.uid,
//                 email: user.email,
//             });

//             router.push('/'); // Correct usage of router.push

//         } catch (error) {
//             setFirebaseError('An account with this email already exists. Please log in.');
//             console.error(error);
//         }
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             const provider = new GoogleAuthProvider();
//             const result = await signInWithPopup(auth, provider);
//             const user = result.user;

//             const [firstName, ...lastName] = user.displayName.split(' ');

//             const userRef = ref(database, 'usersData/' + user.uid);
//             await set(userRef, {
//                 uid: user.uid,
//                 email: user.email,
//                 firstName: firstName,
//                 lastName: lastName.join(' ')
//             });

//             alert("Signup with Google Successfully");
//             router.push('/login');
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handlePasswordChange = (value) => {
//         setPassword(value);
//         validatePassword(value);
//         setPasswordScore(zxcvbn(value).score);
//     }

//     const renderPasswordStrength = (score) => {
//         const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
//         const segments = 5;
//         const activeSegments = score + 1;
//         const segmentStyle = (index) => ({
//             backgroundColor: index < activeSegments ? '#4caf50' : '#e0e0e0',
//             flex: 1,
//             height: '2px',
//             margin: '0 2px',
//             borderRadius: '4px',
//             transition: 'background-color 0.3s ease'
//         });

//         return (
//             <div className="password-strength">
//                 <div className="strength-bar">
//                     {Array.from({ length: segments }, (_, index) => (
//                         <div key={index} style={segmentStyle(index)}></div>
//                     ))}
//                 </div>
//                 <div className="strength-label">
//                     {strengthLabels[score]}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="signup">
//             <div className="signup-container">
//                 <div className="signup-heading"><h1>Create Your Account</h1></div>
//                 {firebaseError && <p style={{ color: "red", paddingBottom: "6px" }}>{firebaseError}</p>}
//                 {allFieldError && <div className="error-message">{allFieldError}</div>}
//                 <form className="form" onSubmit={handleSubmit}>
//                     <Box component="div" className="email" sx={{ '& > :not(style)': { m: 1, width: '100%' },}} noValidate autoComplete="off">
//                         <TextField
//                             id="outlined-email"
//                             label="Email"
//                             variant="outlined"
//                             className="custom-text-field"
//                             error={!!emailError}
//                             helperText={emailError}
//                             value={email}
//                             onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }}
//                             onBlur={(e) => validateEmail(e.target.value)}
//                         />
//                     </Box>

//                     <Box component="div" className="password" sx={{ '& > :not(style)': { m: 1, width: '100%' },}} noValidate autoComplete="off">
//                         <TextField
//                             id="outlined-password"
//                             label="Password"
//                             variant="outlined"
//                             type={showPassword ? "text" : "password"}
//                             className="custom-text-field"
//                             error={!!passwordError}
//                             helperText={passwordError}
//                             value={password}
//                             onChange={(e) => { handlePasswordChange(e.target.value); }}
//                             onBlur={(e) => validatePassword(e.target.value)}
//                             InputProps={{
//                                 endAdornment: (
//                                     <span className="eye" onClick={togglePasswordVisibility}>
//                                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                                     </span>
//                                 ),
//                             }}
//                         />
//                     </Box>

//                     {password && renderPasswordStrength(passwordScore)}

//                     <div className="SignUp-button">
//                         <button className="signup-btn" type="submit">Sign Up</button>
//                     </div>

//                     <div className="divider"></div>

//                     <div className="google-signin">
//                         <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
//                     </div>
//                     <p style={{fontSize:"12px",lineHeight:"150%"}}>By signing up, you agree to our <Link href="/terms-of-service">Terms of services</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>

//                     <p>Already have an account? <Link href="/login"> Login</Link> </p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Signup;


'use client';
import React, { useState } from "react";
import '@styles/common/auth/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database';
import { auth, database } from '@firebase'; // Adjust this path based on your actual file structure
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');
    const [allFieldError, setAllFieldError] = useState('');
    const router = useRouter();

    const validateEmail = (value) => {
        if (!/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/.test(value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            setPasswordError("Password should be at least 8 characters long.");
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAllFieldError('');
        setFirebaseError('');

        if (!email.trim() || !password.trim()) {
            setAllFieldError("Please fill in all fields.");
            return;
        }

        if (emailError || passwordError) {
            setAllFieldError("Please correct the errors before submitting.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userRef = ref(database, 'usersData/' + user.uid);
            await set(userRef, {
                uid: user.uid,
                email: user.email,
            });

            router.push('/'); // Correct usage of router.push
        } catch (error) {
            setFirebaseError('An account with this email already exists. Please log in.');
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userRef = ref(database, 'usersData/' + user.uid);
            await set(userRef, {
                uid: user.uid,
                email: user.email,
            });

            alert("Signup with Google Successfully");
            router.push('/login');
        } catch (err) {
            alert(err.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-heading"><h1>Create Your Account</h1></div>
                {firebaseError && <p style={{ color: "red", paddingBottom: "6px" }}>{firebaseError}</p>}
                {allFieldError && <div className="error-message">{allFieldError}</div>}
                <form className="form" onSubmit={handleSubmit}>
                    <Box component="div" className="email" noValidate autoComplete="off">
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            className="custom-text-field"
                            error={!!emailError}
                            helperText={emailError}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }}
                            onBlur={(e) => validateEmail(e.target.value)}
                            InputLabelProps={{
                                shrink: true, // Ensures label stays above the input when autofilled
                            }}
                        />
                    </Box>
                    <Box component="div" className="password" noValidate autoComplete="off">
                        <TextField
                            id="outlined-password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            className="custom-text-field"
                            error={!!passwordError}
                            helperText={passwordError}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                            onBlur={(e) => validatePassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <span className="eye" onClick={togglePasswordVisibility}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                ),
                            }}
                            InputLabelProps={{
                                shrink: true, // Ensures label stays above the input when autofilled
                            }}
                        />
                    </Box>
                    <div className="signup-button">
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </div>

                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
                        <div>
                            <p style={{ fontSize: "12px", lineHeight: "150%", fontFamily: "Inter", textAlign: "center", paddingTop: "12px" }}>
                                By signing up, you agree to our <Link href="/terms-of-service">Terms of services</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
                            </p>
                            <p style={{ fontSize: "14px", fontFamily: "Inter", textAlign: "center", paddingTop: "12px" }}>
                                Already have an account? <Link href="/login"> Login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
