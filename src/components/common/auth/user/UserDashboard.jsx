'use client';
import React from 'react';
import '@styles/common/auth/user/UserDashboard.css';
import Link from 'next/link';
import Image from 'next/image';
import notification from '@public/assets/Images/dashboard/notification.svg';
import security from '@public/assets/Images/dashboard/security.svg';
import account from '@public/assets/Images/dashboard/account.svg';
import logout from '@public/assets/Images/dashboard/logout.svg';

export default function UserDashboard() {
    return (
       
            <div className="user-dashboard">
                <div className="user-dashboard-contents">
                    <div>
                        <Link className="profile" href="/account-settings">
                            <Image src={account} height={21} alt="Profile" />
                            <p>Profile</p>
                        </Link>
                        <Link className="security" href="/account-security">
                            <Image src={security} height={21} alt="Security" />
                            <p>Security</p>
                        </Link>
                        <Link className="notification" href="/account-notification">
                            <Image src={notification} height={21} alt="Notification" />
                            <p>Notification</p>
                        </Link>
                    </div>
                    <Link className="log-out" href="/logout">
                        <Image src={logout} height={21} alt="Log out" />
                        <p>Log out</p>
                    </Link>
                </div>
            </div>
        
    );
}
