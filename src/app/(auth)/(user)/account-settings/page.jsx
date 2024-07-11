import React from 'react'
import '@styles/common/auth/user/UserSettings.css'
import UserDashboard from '@components/common/auth/user/UserDashboard'
import UserAccountSetting from '@components/common/auth/user/UserAccountSetting'
import UserProgress from '@components/common/auth/user/UserProgress'
const Page = () => {
  return (
    <div className='user-settings'>
        <div className='user-settings-container'>
            <div className='user-settings-dashboard'>
                <UserDashboard profile="#bab7c1" security="inherit"/>
                <UserAccountSetting/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Page