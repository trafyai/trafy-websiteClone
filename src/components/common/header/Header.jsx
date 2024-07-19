

// 'use client';
// import '@styles/common/header/NavBar.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useState, useRef, useEffect } from "react";
// import BlackLogo from '@public/assets/Images/comman/header/WhiteLogo.png';
// import close1 from '@public/assets/Images/comman/header/close.png';
// import blackHamburger from '@public/assets/Images/comman/header/wLogo.png';
// import { UserAuth } from '@context/AuthContext';
// import Default from '@public/assets/Images/comman/common/dark_mode.png';

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

//     function handleNavigation(targetPath) {
//         if (router.pathname !== targetPath) {
//             setMenuOpen(false);
//             setHover(false);
//             document.body.classList.remove('overflow');
//             router.push(targetPath);
//         }
//     }

//     const handleDropDown = () => {
//         setHover(!hover); 
//     }

//     const handleLogOut = async () => {
//         try {
//             await logOut();
//             setHover(false); 
//             router.push('/');
//             router.reload(); 
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className='navbar'>
//             <div className='navbar-container'>
//                 <div className='navbar-log'>
//                     <Link href="/"> <Image src={BlackLogo} alt="trafy logo" height={26} className="trafy-logo" /></Link>
//                 </div>
                
//                 <div className='menu-lg'>
//                     <div className='menu-left'>
//                         <Link href="/courses" className="menu-pathway" onClick={() => handleNavigation('/courses')}>Pathways</Link>
//                         <Link href="/blogs" className="menu-resources" onClick={() => handleNavigation('/blogs')}> Resources </Link>
//                         <Link href="/" className="menu-innovation" onClick={() => handleNavigation('/')}> Innovation Circle </Link>
//                     </div>
//                     <div className='menu-right'>
//                         {!loading && !user ? 
//                             (<div className='menu-no-profile'>
//                                 <Link href="/login" className="menu-login" onClick={() => handleNavigation('/login')}> Login</Link>
//                                 <Link href="/signup" className="menu-signup" onClick={() => handleNavigation('/signup')}> Sign Up Free</Link>
//                             </div>) 
//                             :
//                             (<div className='menu-profile'>
//                                 <div onClick={handleDropDown}>
//                                     <div style={{ width: "24px", height: "24px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
//                                         {/* <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/> */}
//                                     </div>
//                                 </div>

//                                 {hover && 
//                                     (<div className="menu-user-dropdown">
//                                         <Link href="/account-settings" onClick={() => handleNavigation('/account-settings')}><p>Profile</p></Link>
//                                         <Link href="/account-security" onClick={() => handleNavigation('/account-security')}><p>Security</p></Link>
//                                         <Link href="/" onClick={() => handleNavigation('/')}><p>Notification</p></Link>
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
//                                 {user &&(
//                                     <div className='menu-profile'>
//                                         <Link href="/account-settings" onClick={() => handleNavigation('/account-settings')} style={{display:"flex",alignItems:"center",gap:"1rem"}}>
//                                             <div style={{ width: "32px", height: "32px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
//                                                 <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/>
//                                             </div>
//                                             <p>{user?.displayName || 'User'}</p> 
//                                         </Link>
//                                     </div>
//                                 )}
//                                {user &&  <hr style={{borderBottom:"0",borderTop:"1px solid #2a2929"}}/>}
//                                 <Link href="/courses" className="menu-pathway" onClick={() => handleNavigation('/courses')}>Pathways</Link>
//                                 <Link href="/blogs" className="menu-resources" onClick={() => handleNavigation('/blogs')}> Resources </Link>
//                                 <Link href="/" className="menu-innovation" onClick={() => handleNavigation('/')}> Innovation Circle </Link>
//                                 <hr style={{borderBottom:"0",borderTop:"1px solid #2a2929"}}/>
//                                 <Link href="/account-settings" className='menu-account-settings' onClick={() => handleNavigation('/account-settings')}>Account Settings</Link>
//                                 <Link href="/account-security" className='menu-account-security' onClick={() => handleNavigation('/account-security')}>Security</Link>
//                                 <Link href="/account-notification" className='menu-account-notification' onClick={() => handleNavigation('/account-notification')}>Notification</Link>
//                                 {user &&<p className='menu-account-logout' onClick={handleLogOut}>Logout</p>}
//                             </div>
//                             <div className='menu-bottom-contents' style={{padding:"16px"}}>
//                                 {!loading && !user && (
//                                     <div className='menu-no-profile'>
//                                         <Link href="/login" className="menu-login" onClick={() => handleNavigation('/login')}>Login</Link>
//                                         <Link href="/signup" className="menu-signup" onClick={() => handleNavigation('/signup')}>Sign Up Free</Link>
//                                     </div>
//                                 )}
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
import React, { useState, useRef, useEffect } from "react";
import whiteLogo from '@public/assets/Images/comman/header/whiteLogo.png';
import close1 from '@public/assets/Images/comman/header/close.png';
import blackHamburger from '@public/assets/Images/comman/header/wLogo.png';
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
        setHover(false); 
        document.body.classList.toggle('overflow');
    }

    function handleNavigation(targetPath) {
        if (targetPath.startsWith('#')) {
            setMenuOpen(false);
            setHover(false);
            document.body.classList.remove('overflow');
            const element = document.querySelector(targetPath);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (router.pathname !== targetPath) {
            setMenuOpen(false);
            setHover(false);
            document.body.classList.remove('overflow');
            router.push(targetPath);
        }
    }

    const handleDropDown = () => {
        setHover(!hover); 
    }

    const handleLogOut = async () => {
        try {
            await logOut();
            setHover(false); 
            router.push('/');
            router.reload(); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-log'>
                    <Link href="/"> <Image src={whiteLogo} alt="trafy logo"  className="trafy-logo" /></Link>
                </div>
                
                <div className='menu-lg'>
                    <div className='menu-left'>
                        <a href="#landingPathways" className="menu-pathway" onClick={() => handleNavigation('#landingPathways')}>Pathways</a>
                        <Link href="/blogs" className="menu-resources" onClick={() => handleNavigation('/blogs')}> Resources </Link>
                        {/* <Link href="/" className="menu-innovation" onClick={() => handleNavigation('/')}> Innovation Circle </Link> */}
                    </div>
                    <div className='menu-right'>
                        {!loading && !user ? 
                            (<div className='menu-no-profile'>
                                <Link href="/login" className="menu-login" onClick={() => handleNavigation('/login')}> Login</Link>
                                <Link href="/signup" className="menu-signup" onClick={() => handleNavigation('/signup')}> Sign Up Free</Link>
                            </div>) 
                            :
                            (<div className='menu-profile'>
                                <div onClick={handleDropDown}>
                                    <div style={{ width: "24px", height: "24px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
                                        {/* <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/> */}
                                    </div>
                                </div>

                                {hover && 
                                    (<div className="menu-user-dropdown">
                                        <Link href="/account-settings" onClick={() => handleNavigation('/account-settings')}><p>Profile</p></Link>
                                        <Link href="/account-security" onClick={() => handleNavigation('/account-security')}><p>Security</p></Link>
                                        <Link href="/" onClick={() => handleNavigation('/')}>Notification</Link>
                                        <p onClick={handleLogOut}>Logout</p>
                                    </div>)
                                }
                            </div>)
                        }
                    </div>
                </div>

                {/* 0------------------------------------Hamburger----------------------------------- */}
                <div className='menu-mobile'>
                    <Image src={blackHamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`}  onClick={toggleMenu} />
                    <Image src={close1} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`}  onClick={toggleMenu} />

                    {menuOpen &&
                        <div className='menu-mobile-contents' ref={menuRef}>
                            <div className='menu-top-contents'>
                                {user &&(
                                    <div className='menu-profile'>
                                        <Link href="/account-settings" onClick={() => handleNavigation('/account-settings')} style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                                            <div style={{ width: "36px", height: "36px", borderRadius: "100%", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontFamily: "Inter" }}>
                                                <Image src={user?.profilePicURL || Default} alt="Profile" width={36} height={36} style={{ borderRadius: '50%' }}/>
                                            </div>
                                            <p style={{fontSize:"14px",fontFamily:"Inter",color:"var(--h-white)"}}>{user?.displayName || 'User'}</p> 
                                        </Link>
                                    </div>
                                )}
                               {user &&  <hr style={{borderBottom:"0",borderTop:"1px solid #2a2929",borderRightWidth:"0",borderLeftWidth:"0"}}/>}
                                <a href="#landingPathways" className="menu-pathway" onClick={() => handleNavigation('#landingPathways')}>Pathways</a>
                                <Link href="/blogs" className="menu-resources" onClick={() => handleNavigation('/blogs')}> Resources </Link>
                                {/* <Link href="/" className="menu-innovation" onClick={() => handleNavigation('/')}> Innovation Circle </Link> */}
                                <hr style={{borderBottom:"0",borderTop:"1px solid #2a2929",borderRightWidth:"0",borderLeftWidth:"0"}}/>
                               {user && <Link href="/account-settings" className='menu-account-settings' onClick={() => handleNavigation('/account-settings')}>Account Settings</Link>}
                               {user &&<Link href="/account-security" className='menu-account-security' onClick={() => handleNavigation('/account-security')}>Security</Link>}
                               {user &&<Link href="/account-notification" className='menu-account-notification' onClick={() => handleNavigation('/account-notification')}>Notification</Link>}
                                {user &&<p className='menu-account-logout' onClick={handleLogOut}>Logout</p>}
                               
                            </div>
                            <div className='menu-bottom-contents'>
                            {!loading && !user ? 
                                    (<div className='menu-no-profile'>
                                        <Link href="/login" className="menu-login" onClick={() => handleNavigation('/login')}> Login</Link>
                                        <Link href="/signup" className="menu-signup" onClick={() => handleNavigation('/signup')}> Sign Up Free</Link>
                                    </div>) 
                                    :null
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;



