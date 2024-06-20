'use client'
import '@styles/common/auth/user-dashboard/user-profile/UserProfile.css'
import React, { useState, useEffect } from "react";
import { auth, database } from '@/firebase';
import { ref, get, update } from 'firebase/database';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');

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
                        setPhone(data.phone || '');
                        setCountry(data.country || '');
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

    const handleUpdate = (e) => {
        e.preventDefault();
        if (user) {
            const updates = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                country: country
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
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/login');
        }).catch((error) => {
            console.error(error);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-contents">
            <div className="profile-contents-heading">
                <h1>Edit Profile</h1>
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
}
