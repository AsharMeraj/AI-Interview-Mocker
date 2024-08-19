// 'use client'
// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import NextTopLoader from 'nextjs-toploader'
// import React from 'react'

// const Header = () => {

//     const path = usePathname();

//     return (
//         <>
//             <div className='flex p-6 items-center justify-between shadow-xl shadow-black/15'>
//                 <div className='flex flex-row justify-between gap-2 items-center'>
//                     <Image alt='logo.svg' src="/logo.svg" width={40} height={41} />
//                     <h1 className='font-bold text-[1.2rem] text-[--primary-color]'>AIM</h1>
//                 </div>
//                 <ul className='hidden md:flex w-[30rem] lg:w-[40rem] justify-between'>
//                     <Link href={'/dashboard'} className={path === '/dashboard' ? `font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Dashboard</Link>

//                     <Link href={'/'} className={path === '/questions' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Questions</Link>

//                     <Link href={'/upgrade'} className={path === '/upgrade' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Upgrade</Link>

//                     <Link href={'/'} className={path === '/howitworks' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>How It Works?</Link>
//                 </ul>
//                 <UserButton />
//             </div>
//         </>
//     )
// }

// export default Header
'use client'
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

type PropType = {
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderComponent = (props: PropType) => {
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
        <div className='w-[85rem] h-full min-[1600px]:w-full flex items-center justify-between mx-3 md:mx-6 min-[1600px]:mx-[7.5rem]'>

            <h1 className='text-lg tracking-widest font-extrabold flex gap-2 items-center'>
                <Image alt='logo' width={50} height={50} src={'/logo.png'} />
                AIM
            </h1>
            <ul className='hidden md:flex h-full items-center justify-between md:gap-10 lg:gap-20 '>
                <li className={path === '/' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={path === '/dashboard' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li className={" hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                    <Link href='/'>Questions</Link>
                </li>

                <li className={path === '/upgrade' ? ` h-fit font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : " hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105"}>
                    <Link href='/upgrade'>Upgrade</Link>
                </li>
            </ul>
            {
                user.isSignedIn ?
                    <div className='hidden md:block cursor-pointer'>
                        <UserButton />
                    </div> :
                    <Link className='hidden md:block cursor-pointer'  href={'/dashboard'}>
                        <Button>Login</Button>
                    </Link>

            }

            {/* Only for Mobile */}
            <Menu onClick={() => { props.setShowMobileNav(true) }} className='md:hidden cursor-pointer' />
        </div>
    )
}

export default HeaderComponent