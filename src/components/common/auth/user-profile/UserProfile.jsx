<<<<<<< HEAD
'use client'
import '@styles/common/auth/user-dashboard/user-profile/UserProfile.css'
import React, { useState, useEffect } from "react";
import { auth, database } from '@/firebase';
import { ref, get, update } from 'firebase/database';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function UserProfile() {
=======
'use client';

import React, { useState, useEffect } from "react";
import './UserProfile.css';
import { auth, database } from '@/firebase';
import { ref, get } from 'firebase/database';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const UserProfile = () => {
>>>>>>> newrepo/main
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
<<<<<<< HEAD
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
=======
    const [showContent, setShowContent] = useState("profile");
>>>>>>> newrepo/main

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const userRef = ref(database, 'usersData/' + currentUser.uid);
                get(userRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        setFirstName(data.firstName || '');
                        setLastName(data.lastName || '');
                        setEmail(data.email || '');
<<<<<<< HEAD
                        setPhone(data.phone || '');
                        setCountry(data.country || '');
=======
>>>>>>> newrepo/main
                        setUser(data); // Optional: set the entire user data if needed
                    } else {
                        console.log("No data available");
                    }
                    setLoading(false);
                }).catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
            } else {
                router.push('/login');
            }
        });
    }, [router]);

<<<<<<< HEAD
    const handleUpdate = (e) => {
        e.preventDefault();
=======
    const handleUpdate = () => {
>>>>>>> newrepo/main
        if (user) {
            const updates = {
                firstName: firstName,
                lastName: lastName,
<<<<<<< HEAD
                email: email,
                phone: phone,
                country: country
=======
                email: email
>>>>>>> newrepo/main
            };

            const userRef = ref(database, 'usersData/' + user.uid);
            update(userRef, updates)
                .then(() => {
                    alert("Profile updated successfully");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Error updating profile");
                });
        }
<<<<<<< HEAD
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/login');
        }).catch((error) => {
            console.error(error);
        });
    };

=======
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/login');
        }).catch((error) => {
            console.error(error);
        });
    };

    const showProfileContent = (section) => {
        setShowContent(section);
    };

>>>>>>> newrepo/main
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
<<<<<<< HEAD
        <div className="profile-contents">
            <div className="profile-contents-heading">
                <h1>Edit Profile</h1>
=======
        <main>
            <div className="user-profile">
                <div className="user-profile-container">
                    <div className="user-dashboard">
                        <div className="user-picture">
                            <div className="user-pic"></div>
                            <div className="user-name"><h2>{firstName} {lastName}</h2></div>
                        </div>
                        <div className="user-profile-contents">
                            <div className={"profile" + (showContent === "profile" ? " active" : "")} onClick={() => showProfileContent("profile")}><h3>Profile</h3></div>
                            <div className={"security" + (showContent === "security" ? " active" : "")} onClick={() => showProfileContent("security")}><h3>Security</h3></div>
                            <div className={"privacy" + (showContent === "privacy" ? " active" : "")} onClick={() => showProfileContent("privacy")}><h3>Privacy</h3></div>
                            <div className={"notification" + (showContent === "notification" ? " active" : "")} onClick={() => showProfileContent("notification")}><h3>Notification</h3></div>
                            <div className={"log-out" + (showContent === "log-out" ? " active" : "")} onClick={() => showProfileContent("log-out")}><h3>Log out</h3></div>
                        </div>
                    </div>
                    {showContent === "profile" && (
                        <div className="profile-contents">
                            <div className="profile-contents-heading">
                                <h1>Edit Profile</h1>
                            </div>
                            <form className="profile-form">
                                <div className="Fname">
                                    <label htmlFor="fname">First name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="fname"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="Lname">
                                    <label htmlFor="lname">Last name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="lname"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="Pemail">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        value={email}
                                        className="email"
                                        autoComplete="off"
                                        // disabled // Disable email update for simplicity
                                    />
                                </div>
                                <div className="Phone">
                                    <label htmlFor="phno">Phone number:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter phone number"
                                        className="phno"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="Country">
                                    <label htmlFor="country">Country:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter country"
                                        className="country"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="save-button">
                                    <button className="save-changes" onClick={handleUpdate}>Save</button>
                                </div>
                            </form>
                        </div>
                    )}
                    {showContent === "security" && (
                        <div className="security-contents">
                            <div className="security-contents-container">
                                <div className="security-contents-heading">
                                    <h1>Security</h1>
                                </div>
                                <form className="security-form">
                                    <div className="Pemail">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="text"
                                            placeholder="Enter email"
                                            className="email"
                                            autoComplete="off"
                                            // disabled // Keeping it simple
                                        />
                                    </div>
                                    <div className="Ppassword">
                                        <label htmlFor="current-password">Current Password:</label>
                                        <input
                                            type="password"
                                            placeholder="Enter current password"
                                            className="password"
                                            autoComplete="off"
                                        />
                                        <label htmlFor="new-password">New Password:</label>
                                        <input
                                            type="password"
                                            placeholder="Enter new password"
                                            className="password"
                                            autoComplete="off"
                                        />
                                        <label htmlFor="confirm-password">Confirm New Password:</label>
                                        <input
                                            type="password"
                                            placeholder="Re-type new password"
                                            className="password"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="save-button">
                                        <button className="change-password">Change Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {showContent === "privacy" && (
                        <div className="privacy-contents">
                            <div className="privacy-contents-container">
                                <div className="privacy-contents-heading">
                                    <h1>Privacy</h1>
                                </div>
                            </div>
                        </div>
                    )}
                    {showContent === "notification" && (
                        <div className="notification-contents">
                            <div className="notification-contents-container">
                                <div className="notification-contents-heading">
                                    <h1>Notification</h1>
                                </div>
                            </div>
                        </div>
                    )}
                    {showContent === "log-out" && (
                        <div className="logout-contents">
                            <div className="logout-contents-container">
                                <div className="logout-contents-heading">
                                    <h1>Logout</h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
>>>>>>> newrepo/main
            </div>
            <form className="profile-form" onSubmit={handleUpdate}>
                <div className="Fname">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="fname"
                        autoComplete="off"
                    />
                </div>
                <div className="Lname">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="lname"
                        autoComplete="off"
                    />
                </div>
                <div className="Pemail">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        className="email"
                        autoComplete="off"
                        // disabled // Disable email update for simplicity
                    />
                </div>
                <div className="Phone">
                    <label htmlFor="phno">Phone number:</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="phno"
                        autoComplete="off"
                    />
                </div>
                <div className="Country">
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        placeholder="Enter country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="country"
                        autoComplete="off"
                    />
                </div>
                <div className="save-button">
                    <button className="save-changes" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
