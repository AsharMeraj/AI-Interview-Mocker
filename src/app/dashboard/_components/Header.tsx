'use client';
import React, { useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import HeaderMobComp from './HeaderMobComp';

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    const [position, setPosition] = useState<boolean>(false);
    function AppearNavbar() {
        if (window.scrollY >= 200) {
            setPosition(true);
        }
        else if (window.scrollY <= 200) {
            setPosition(false);
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', AppearNavbar);
    }, [])
    return (
        <div>
            <nav className="flex h-[5.5rem] max-[561px]:h-[5rem] w-full">
            </nav>
            <nav className="h-[5.5rem] max-[561px]:h-[5rem] bg-white fixed top-0 translate-y-0 duration-700 w-full flex items-center  justify-center z-10 shad">
                    <HeaderComponent setShowMobileNav={setShowMobileNav} />
            </nav>
            {/* <nav className={position ? 'h-[5.5rem] max-[561px]:h-[5rem] bg-white fixed top-0 shadow-xl shadow-[rgba(0,0,0,0.15)] translate-y-0 duration-700 w-full flex items-center  justify-center  z-10' : "absolute top-0 translate-y-[-100%]  w-full flex items-center  justify-center bg-white h-[5.5rem] max-[561px]:h-[5rem]"}>
                    <HeaderComponent setShowMobileNav={setShowMobileNav} />
            </nav> */}

            <main className={`flex items-center justify-center h-screen bg-white w-full px-20 fixed left-0 top-0 duration-700 z-10  ${showMobileNav ? 'translate-x-[0] ' : 'translate-x-[100%]'}`}>
                    <HeaderMobComp showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
            </main>
        </div>
    )
}




