'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

const Header = () => {

    const path = usePathname();

    return (
        <>
            <div className='flex p-6 items-center justify-between shadow-xl shadow-black/15'>
                <div className='flex flex-row justify-between gap-2 items-center'>
                    <Image alt='logo.svg' src="/logo.svg" width={40} height={41} />
                    <h1 className='font-bold text-[1.2rem] text-[--primary-color]'>AIM</h1>
                </div>
                <ul className='hidden md:flex w-[30rem] lg:w-[40rem] justify-between'>
                    <Link href={'/dashboard'} className={path === '/dashboard' ? `font-semibold text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Dashboard</Link>

                    <Link href={'/'} className={path === '/questions' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Questions</Link>

                    <Link href={'/upgrade'} className={path === '/upgrade' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>Upgrade</Link>

                    <Link href={'/'} className={path === '/howitworks' ? `font-semibold  text-[--primary-color] border-b-2 border-[--primary-color] cursor-pointer text-[1.05rem] transition-all duration-100` : "hover:text-[--primary-color] border-b-2 border-white cursor-pointer text-[1rem] transition-all duration-100 hover:scale-105 font-"}>How It Works?</Link>
                </ul>
                <UserButton />
            </div>
        </>
    )
}

export default Header