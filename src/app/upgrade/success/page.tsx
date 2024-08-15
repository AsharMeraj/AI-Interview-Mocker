import Header from '@/app/dashboard/_components/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <>
            <Header />
            <section className='p-10 h-[30rem] md:h-[40rem] lg:h-[50rem] flex items-center justify-center flex-col'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 w-fit text-center'>Payment Success</h2>
                <h2 className='text-gray-500 w-fit mt-2 text-center'>Thanks for you subscription!. You will recieve your material shortly</h2>
                <div className='mt-4 w-fit'>
                    <Link href={'/dashboard'}>
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Success