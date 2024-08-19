"use client";
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
type ChildType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}


const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav, showMobileNav }) => {

    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
    const path = usePathname()
    const user = useUser()


    const ShowSubmenu = () => {
        setShowSubmenu(true)
    }
    const HideSubmenu = () => {
        setShowSubmenu(false)
    }

    useEffect(() => {
        ShowSubmenu()
        HideSubmenu()
    }, [])
    return (
        <main className='flex items-center justify-center w-full'>
            <div className='flex flex-col justify-between gap-8 my-4 items-center h-fit'>
                <div className='absolute top-0 left-0 ml-3 mt-6'>
                    {
                        !user.isSignedIn
                            ?
                            <Link href={'./dashboard'} onClick={() => { setShowMobileNav(false) }}>
                                <Button>Sign In</Button>
                            </Link>
                            :
                            <span className=''>
                                <UserButton />
                            </span>

                    }
                </div>
                <X onClick={() => { setShowMobileNav(false) }} className='absolute top-0 mt-8 mr-5 right-0' />
                <ul className='flex flex-col justify-between gap-12 items-center'>
                    <li onClick={() => { setShowMobileNav(false) }} className={path === '/' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={() => { setShowMobileNav(false) }} className={path === '/dashboard' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    <li onClick={() => { setShowMobileNav(false) }} className={path === '/questions' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                        <Link href='/questions'>Questions</Link>
                    </li>
                    <li onClick={() => { setShowMobileNav(false) }} className={path === '/upgrade' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                        <Link href='/upgrade'>Upgrade</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar