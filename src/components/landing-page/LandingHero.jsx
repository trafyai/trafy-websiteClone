'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Hero from '@public/assets/Images/landing-page/hero.png'

const LandingHero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const router = useRouter();

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

    return (
        <main>
            <div className="landing-hero-section">
                <div className="landing-hero-container">
                    <div className="landing-hero-contents">
                        <div className="landing-hero-heading">
                            <h1>Innovative Design. <br />Interactive Experience.</h1>
                        </div>
                        <div className="landing-hero-paragraph">
                            <p>Learn to design UI/UX faster, functional and scalable.</p>
                        </div>
                        <button
                            className="landing-hero-explore-btn"
                            onClick={() => handleNavigation('#landingPathways')}
                        >
                            Explore Pathways
                        </button>
                    </div>
                
                <div className="landing-hero-image">
                    <Image src={Hero}/>
                </div>
              </div>
            </div>
        </main>
    );
}

export default LandingHero;
