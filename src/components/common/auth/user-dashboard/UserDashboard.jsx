'use client'
import React, { useState } from "react";
import UserProfile from "../user-profile/UserProfile";
import '@styles/common/auth/user-dashboard/UserDashboard.css'

export default function UserDashboard() {
    const [showContent, setShowContent] = useState("profile");

    const showProfileContent = (section) => {
        setShowContent(section);
    };

    return (
        <main>
            <div className="user-profile">
                <div className="user-profile-container">
                    <div className="user-dashboard">
                        <div className="user-picture">
                            <div className="user-pic"></div>
                            <div className="user-name"><h2>John Doe</h2></div>
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
                        <UserProfile/>
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
                                        <input type="text" placeholder="Enter email" autoComplete="off" name="email" className="email" />
                                    </div>
                                    <div className="Ppassword">
                                        <label htmlFor="password">Password:</label>
                                        <input type="text" placeholder="Enter current password" autoComplete="off" name="password" className="password" />
                                        <input type="text" placeholder="Enter new password" autoComplete="off" name="password" className="password" />
                                        <input type="text" placeholder="Re-type new password" autoComplete="off" name="password" className="password" />
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
            </div>
        </main>
    );
}
