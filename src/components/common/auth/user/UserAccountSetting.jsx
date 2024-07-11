'use client';
import '@styles/common/auth/user/UserAccountSetting.css';
import React, { useState, useEffect } from "react";
import { auth, database, storage } from '@/firebase';
import { ref as dbRef, update } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { FaPen } from 'react-icons/fa';
import Image from 'next/image';
import Default from '@public/assets/Images/comman/common/dark_mode.png';

export default function UserAccountSetting({ user = {}, setUser }) {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [email, setEmail] = useState(user.email || '');
    const [phone, setPhone] = useState(user.phone || '');
    const [country, setCountry] = useState(user.country || '');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicURL, setProfilePicURL] = useState(user.profilePicURL || '');

    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        let newProfilePicURL = profilePicURL;

        if (profilePic) {
            try {
                const storageReference = storageRef(storage, `profilePictures/${user.uid}/${profilePic.name}`);
                await uploadBytes(storageReference, profilePic);
                newProfilePicURL = await getDownloadURL(storageReference);
            } catch (error) {
                console.error("Error uploading profile picture:", error);
                alert("Error uploading profile picture");
                setLoading(false);
                return;
            }
        }

        const updates = {
            firstName,
            lastName,
            email,
            phone,
            country,
            profilePicURL: newProfilePicURL,
        };

        const userRef = dbRef(database, 'usersData/' + user.uid);
        update(userRef, updates)
            .then(() => {
                alert("Profile updated successfully");
                setUser({ ...user, ...updates });
                setProfilePicURL(newProfilePicURL);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                alert("Error updating profile");
                setLoading(false);
            });
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
            const previewURL = URL.createObjectURL(file);
            setProfilePicURL(previewURL);
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
            <form className="profile-form" onSubmit={handleUpdate}>
                <div className="profile-pic-wrapper">
                    <Image src={profilePicURL || Default} alt="Profile" className="profile-pic" width={100} height={100}/>
                   
                    <label htmlFor="profilePic" className="profile-pic-upload">
                        <FaPen className='profile-pen'/>
                        <p className='choose-pic'  htmlFor="profilePic">Choose photo</p>
                        <input
                            type="file"
                            id="profilePic"
                            onChange={handleProfilePicChange}
                            accept="image/*"
                        />
                    </label>
                </div>
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
                        disabled
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
                    <button className="save-changes" type="submit" disabled={loading}>Save</button>
                </div>
            </form>
        </div>
    );
}
