// 'use client'
// import '@styles/common/header/NavBar.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useState, useRef, useEffect, useContext } from "react";
// import WhiteLogo from '@public/assets/Images/comman/header/whiteLogo.png';
// import BlackLogo from '@public/assets/Images/comman/header/blackLogo.png';
// import close from '@public/assets/Images/comman/header/close.png';
// import close1 from '@public/assets/Images/comman/header/close (1).png';
// import whiteHamburger from '@public/assets/Images/comman/header/wLogo (2).png';
// import blackHamburger from '@public/assets/Images/comman/header/bLogo.png';
// import { UserAuth } from '@context/AuthContext';

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [hover, setHover] = useState(false); 
//     const timeoutRef = useRef(null);
//     const menuRef = useRef(null);
//     const router = useRouter();
//     const { user, logOut, loading } = UserAuth();

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setMenuOpen(false);
//                 document.body.classList.remove('overflow');
//             }
//         };

//         if (menuOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [menuOpen]);

//     function toggleMenu() {
//         setMenuOpen(!menuOpen);
//         setHover(false); // Ensure dropdown is closed when toggling menu
//         document.body.classList.toggle('overflow');
//     }

//     function handleNavigation() {
//         setMenuOpen(false);
//         setHover(false); // Ensure dropdown is closed when navigating
//         document.body.classList.remove('overflow');
//     }

//     const handleDropDown = () => {
//         setHover(!hover); 
//     }

   

//     const getFirstLetter = () => {
//         if (user && user.email) {
//             return user.email.charAt(0).toUpperCase();
//         }
//         return '';
//     };

//     const handleLogOut = async () => {
//         try {
//             await logOut();
//             setHover(false); 
//             router.push('/');
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className='navbar'>
//             <div className='navbar-container'>
//                 <div className='navbar-log'>
//                     <Link href="/"> <Image src={BlackLogo} alt="trafy logo" height={32} className="trafy-logo" /></Link>
//                 </div>
                
//                 <div className='menu-lg'>
                   
//                 <div className='menu-left'>
//                         <Link href="/courses" className="menu-pathway" onClick={handleNavigation}>Pathways</Link>
//                         <Link href="/blogs" className="menu-resources" onClick={handleNavigation}> Resources </Link>
//                         <Link href="/" className="menu-innovation" onClick={handleNavigation}> Innovation Circle </Link>
//                     </div>
//                     <div className='menu-right'>
//                         {!loading && !user ? 
//                             (<div className='menu-no-profile'>
//                                 <Link href="/login" className="menu-login" onClick={handleNavigation}> Login</Link>
//                                 <Link href="/signup" className="menu-signup" onClick={handleNavigation}> Sign Up Free</Link>
//                             </div>) 
//                             :
//                             (<div className='menu-profile'>
//                                 <div onClick={handleDropDown} >
//                                     <div style={{ width: "36px", height: "36px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
//                                         <Image src=""/>
//                                     </div>
//                                 </div>

//                                 {hover && 
//                                     (<div className="menu-user-dropdown" >
//                                         <Link href="/account-settings" onClick={handleNavigation}><p>Profile</p></Link>
//                                         <Link href="/account-security" onClick={handleNavigation}><p>Security</p></Link>
//                                         <Link href="/" onClick={handleNavigation}><p>Notification</p></Link>
//                                         <p onClick={handleLogOut}>Logout</p>
//                                     </div>)
//                                 }
//                             </div>)
//                         }
//                     </div>
//                 </div>

//                 {/* 0------------------------------------Hamburger----------------------------------- */}
//                 <div className='menu-mobile'>
//                     <Image src={blackHamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{width:"30px",height:"20px"}} onClick={toggleMenu} />
//                     <Image src={close1} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} style={{width:"20px",height:"20px"}} onClick={toggleMenu} />

//                     {menuOpen &&
//                         <div className='menu-mobile-contents' ref={menuRef}>
                         
//                             <div className='menu-top-contents'>
//                             {user &&(
//                                 <div className='menu-profile'>
//                                 <Link href="/account-settings"  onClick={handleNavigation}>
//                                     <div style={{ width: "36px", height: "36px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
//                                         <Image src=""/>
//                                     </div>
//                                 </Link>
//                             </div>
//                             )}
//                             <hr />
//                                 <Link href="/courses" className="menu-pathway" onClick={handleNavigation}>Pathways</Link>
//                                 <Link href="/blogs" className="menu-resources" onClick={handleNavigation}> Resources </Link>
//                                 <Link href="/" className="menu-innovation" onClick={handleNavigation}> Innovation Circle </Link>
//                             <hr />
//                                 <Link href="/account-settings" className='menu-account-settings' onClick={handleNavigation}>Account Settings</Link>
//                                 <Link href="/account-security" className='menu-account-security' onClick={handleNavigation}>Security</Link>
//                                 <Link href="/account-notification" className='menu-account-notification' onClick={handleNavigation}>Notification</Link>
//                                 <Link href="/account-logout" className='menu-account-logout' onClick={handleNavigation}>Logout</Link>
//                             </div>

//                             <div className='menu-bottom-contents'>
//                             {!loading && !user && (
//                                 <div className='menu-no-profile'>
//                                     <Link href="/login" className="menu-login" onClick={handleNavigation}>Login</Link>
//                                     <Link href="/signup" className="menu-signup" onClick={handleNavigation}>Sign Up Free</Link>
//                                 </div>
//                             )}
//                             </div>
//                         </div>
//                     }
//                 </div>
//                 {/* ------------------------------------------------------------------------------------------------------- */}
//             </div>
//         </div>
//     )
// }

// export default Header;


'use client';
import '@styles/common/header/NavBar.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect, useContext } from "react";
import BlackLogo from '@public/assets/Images/comman/header/blackLogo.png';
import close1 from '@public/assets/Images/comman/header/close (1).png';
import blackHamburger from '@public/assets/Images/comman/header/bLogo.png';
import { UserAuth } from '@context/AuthContext';
import Default from '@public/assets/Images/comman/common/dark_mode.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hover, setHover] = useState(false); 
    const timeoutRef = useRef(null);
    const menuRef = useRef(null);
    const router = useRouter();
    const { user, logOut, loading } = UserAuth();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
                document.body.classList.remove('overflow');
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
        setHover(false); // Ensure dropdown is closed when toggling menu
        document.body.classList.toggle('overflow');
    }

    function handleNavigation() {
        setMenuOpen(false);
        setHover(false); // Ensure dropdown is closed when navigating
        document.body.classList.remove('overflow');
    }

    const handleDropDown = () => {
        setHover(!hover); 
    }

    const handleLogOut = async () => {
        try {
            await logOut();
            setHover(false); 
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-log'>
                    <Link href="/"> <Image src={BlackLogo} alt="trafy logo" height={32} className="trafy-logo" /></Link>
                </div>
                
                <div className='menu-lg'>
                    <div className='menu-left'>
                        <Link href="/courses" className="menu-pathway" onClick={handleNavigation}>Pathways</Link>
                        <Link href="/blogs" className="menu-resources" onClick={handleNavigation}> Resources </Link>
                        <Link href="/" className="menu-innovation" onClick={handleNavigation}> Innovation Circle </Link>
                    </div>
                    <div className='menu-right'>
                        {!loading && !user ? 
                            (<div className='menu-no-profile'>
                                <Link href="/login" className="menu-login" onClick={handleNavigation}> Login</Link>
                                <Link href="/signup" className="menu-signup" onClick={handleNavigation}> Sign Up Free</Link>
                            </div>) 
                            :
                            (<div className='menu-profile'>
                                <div onClick={handleDropDown}>
                                    <div style={{ width: "36px", height: "36px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
                                        <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/>
                                    </div>
                                </div>

                                {hover && 
                                    (<div className="menu-user-dropdown">
                                        <Link href="/account-settings" onClick={handleNavigation}><p>Profile</p></Link>
                                        <Link href="/account-security" onClick={handleNavigation}><p>Security</p></Link>
                                        <Link href="/" onClick={handleNavigation}><p>Notification</p></Link>
                                        <p onClick={handleLogOut}>Logout</p>
                                    </div>)
                                }
                            </div>)
                        }
                    </div>
                </div>

                {/* 0------------------------------------Hamburger----------------------------------- */}
                <div className='menu-mobile'>
                    <Image src={blackHamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{width:"30px",height:"20px"}} onClick={toggleMenu} />
                    <Image src={close1} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} style={{width:"20px",height:"20px"}} onClick={toggleMenu} />

                    {menuOpen &&
                        <div className='menu-mobile-contents' ref={menuRef}>
                            <div className='menu-top-contents'>
                                {user &&(
                                    <div className='menu-profile'>
                                        <Link href="/account-settings" onClick={handleNavigation}>
                                            <div style={{ width: "36px", height: "36px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
                                                <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                                <hr />
                                <Link href="/courses" className="menu-pathway" onClick={handleNavigation}>Pathways</Link>
                                <Link href="/blogs" className="menu-resources" onClick={handleNavigation}> Resources </Link>
                                <Link href="/" className="menu-innovation" onClick={handleNavigation}> Innovation Circle </Link>
                                <hr />
                                <Link href="/account-settings" className='menu-account-settings' onClick={handleNavigation}>Account Settings</Link>
                                <Link href="/account-security" className='menu-account-security' onClick={handleNavigation}>Security</Link>
                                <Link href="/account-notification" className='menu-account-notification' onClick={handleNavigation}>Notification</Link>
                                {user &&<p className='menu-account-logout' onClick={handleLogOut}>Logout</p>}
                            </div>
                            <div className='menu-bottom-contents' style={{padding:"16px"}}>
                                {!loading && !user && (
                                    <div className='menu-no-profile'>
                                        <Link href="/login" className="menu-login" onClick={handleNavigation}>Login</Link>
                                        <Link href="/signup" className="menu-signup" onClick={handleNavigation}>Sign Up Free</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
                {/* ------------------------------------------------------------------------------------------------------- */}
            </div>
        </div>
    )
}

export default Header;
