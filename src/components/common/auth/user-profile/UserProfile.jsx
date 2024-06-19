'use client'
import '@styles/common/auth/user-dashboard/user-profile/UserProfile.css'

export default function UserProfile() {
  
    return (
       
            
                        <div className="profile-contents">
                            <div className="profile-contents-heading">
                                <h1>Edit Profile</h1>
                            </div>
                            <form className="profile-form">
                                <div className="Fname">
                                    <label htmlFor="fname">First name:</label>
                                    <input type="text" placeholder="Enter first name" autoComplete="off" name="fname" className="fname" />
                                </div>
                                <div className="Lname">
                                    <label htmlFor="lname">Last name:</label>
                                    <input type="text" placeholder="Enter last name" autoComplete="off" name="lname" className="lname" />
                                </div>
                                <div className="Pemail">
                                    <label htmlFor="email">Email:</label>
                                    <input type="text" placeholder="Enter email" autoComplete="off" name="email" className="email" />
                                </div>
                                <div className="Phone">
                                    <label htmlFor="phno">Phone number:</label>
                                    <input type="text" placeholder="Enter phone number" autoComplete="off" name="phno" className="phno" />
                                </div>
                                <div className="Country">
                                    <label htmlFor="country">Country:</label>
                                    <input type="text" placeholder="Enter country" autoComplete="off" name="country" className="country" />
                                </div>
                                <div className="save-button">
                                    <button className="save-changes">Save</button>
                                </div>
                            </form>
                   
            </div>
       
    );
}
