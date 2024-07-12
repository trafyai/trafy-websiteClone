'use client'
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';
import '@styles/common/auth/user/UserAccountSetting.css'

const UserAccountSecurity = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (auth.currentUser) {
            setEmail(auth.currentUser.email);
        }
    }, []);

    const handleChangeCredentials = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (!auth.currentUser) {
            setError('No user is currently logged in');
            return;
        }

        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(user.email, currentPassword);

            await reauthenticateWithCredential(user, credential);

            if (newPassword) {
                await updatePassword(user, newPassword);
            }

            setSuccess('Credentials updated successfully');
            // Clear the password fields
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setError('The current password is incorrect');
            } else if (error.code === 'auth/weak-password') {
                setError('The new password is too weak');
            } else if (error.code === 'auth/invalid-credential') {
                setError('Invalid credentials provided');
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <div className="security-contents">
                <form className="security-form" onSubmit={handleChangeCredentials}>
                    <div className="Pemail">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter new email"
                            autoComplete="off"
                            name="email"
                            className="email"
                            value={email}
                            readOnly
                        />
                    </div>
                    <div className="Ppassword">
                        <label htmlFor="current-password">Current Password:</label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            autoComplete="off"
                            name="current-password"
                            className="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <label htmlFor="new-password">New Password:</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            autoComplete="off"
                            name="new-password"
                            className="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <label htmlFor="confirm-password">Re-type New Password:</label>
                        <input
                            type="password"
                            placeholder="Re-type new password"
                            autoComplete="off"
                            name="confirm-password"
                            className="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="save-button">
                        <button className="change-password" type="submit">Update Credentials</button>
                    </div>
                    {error && <div className="error-message" style={{fontSize:"14px",fontFamily:"Inter",color:"red"}}>{error}</div>}
                    {success && <div className="success-message" style={{fontSize:"14px",fontFamily:"Inter",color:"red"}}>{success}</div>}
                </form>
        </div>
    );
};

export default UserAccountSecurity;
